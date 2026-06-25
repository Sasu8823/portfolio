'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface ProjectItem {
  slug: string
  title: string
  images: string[]
  technologies: string[]
}

// ── Responsive layout ──────────────────────────────────────
// Arc distance between card centres = 2 × r × sin(ANGLE_STEP/2)
// Target: arc > card_width + gap  →  r > (card_width + gap) / (2 × sin(π/18))
// sin(10°) ≈ 0.1736,  so  r > (w + gap) / 0.3472
function getLayout() {
  if (typeof window === 'undefined') return { w: 320, h: 180, r: 1020 }
  const vw = window.innerWidth
  if (vw < 480)  return { w: 220, h: 124, r:  700 }  // small mobile  gap ≈ 43px
  if (vw < 768)  return { w: 306, h: 172, r:  960 }  // mobile        gap ≈ 28px
  if (vw < 1024) return { w: 240, h: 135, r:  760 }  // tablet        gap ≈ 24px
  return                { w: 320, h: 180, r: 1020 }   // desktop       gap ≈ 34px
}

// ── Drag physics ───────────────────────────────────────────
const DRAG_SENSITIVITY = 0.28
const INERTIA_DECAY    = 0.93
const SETTLE_LERP      = 0.10
const DRAG_THRESHOLD   = 5

export default function ProjectCarousel3D({ projects }: { projects: ProjectItem[] }) {
  const N          = projects.length
  const ANGLE_STEP = 360 / N

  // DOM refs
  const pivotRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const rafRef   = useRef<number>()

  // Responsive card dimensions
  const [layout, setLayout] = useState(getLayout)

  // Physics refs (never in React state — updated every frame)
  const angleRef    = useRef(0)    // current rendered angle
  const targetRef   = useRef(0)    // angle we're settling toward
  const velocityRef = useRef(0)    // deg/frame after release
  const prevTarget  = useRef(0)    // to track velocity during drag

  // Drag state refs
  const isDragging  = useRef(false)
  const dragStartX  = useRef(0)
  const dragBase    = useRef(0)    // targetRef value when drag began
  const hasDragged  = useRef(false)
  const activeRef   = useRef(0)

  // React state
  const [activeIdx, setActiveIdx] = useState(0)
  const [grabbing,  setGrabbing]  = useState(false)

  /* ── Responsive resize ───────────────────────────────────── */
  useEffect(() => {
    const onResize = () => setLayout(getLayout())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  /* ── rAF physics + DOM loop ─────────────────────────────── */
  useEffect(() => {
    const loop = () => {
      if (isDragging.current) {
        // Direct follow — no lag during drag
        angleRef.current = targetRef.current
      } else {
        // Inertia coast
        if (Math.abs(velocityRef.current) > 0.015) {
          targetRef.current   += velocityRef.current
          velocityRef.current *= INERTIA_DECAY
        }
        // Settle lerp
        angleRef.current += (targetRef.current - angleRef.current) * SETTLE_LERP
      }

      const a = angleRef.current

      if (pivotRef.current) {
        pivotRef.current.style.transform = `rotateY(${a}deg)`
      }

      // Per-card opacity: 1 = front, ≈0.08 = back
      cardRefs.current.forEach((el, i) => {
        if (!el) return
        const raw  = ((i * ANGLE_STEP + a) % 360 + 360) % 360
        const norm = raw > 180 ? raw - 360 : raw
        const t    = 1 - Math.abs(norm) / 180
        el.style.opacity = String(Math.max(0.08, t))
      })

      // Active index — only triggers React re-render when it changes
      const raw      = ((-a % 360) + 360) % 360
      const newFront = Math.round(raw / ANGLE_STEP) % N
      if (newFront !== activeRef.current) {
        activeRef.current = newFront
        setActiveIdx(newFront)
      }

      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [N, ANGLE_STEP])

  /* ── Drag helpers ─────────────────────────────────────────── */
  const startDrag = (clientX: number) => {
    isDragging.current  = true
    dragStartX.current  = clientX
    dragBase.current    = targetRef.current
    prevTarget.current  = targetRef.current
    velocityRef.current = 0
    hasDragged.current  = false
    setGrabbing(true)
  }

  const moveDrag = (clientX: number) => {
    if (!isDragging.current) return
    const dx = clientX - dragStartX.current
    if (Math.abs(dx) > DRAG_THRESHOLD) hasDragged.current = true
    const next          = dragBase.current + dx * DRAG_SENSITIVITY
    velocityRef.current = next - prevTarget.current   // capture velocity
    prevTarget.current  = next
    targetRef.current   = next
  }

  const endDrag = () => {
    isDragging.current = false
    setGrabbing(false)
    // velocityRef retains last value → inertia coast
  }

  /* ── Mouse events ────────────────────────────────────────── */
  useEffect(() => {
    const onMove = (e: MouseEvent) => moveDrag(e.clientX)
    const onUp   = ()              => endDrag()
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup',   onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup',   onUp)
    }
  }, [])

  /* ── Touch events ─────────────────────────────────────────── */
  useEffect(() => {
    const onStart  = (e: TouchEvent) => startDrag(e.touches[0].clientX)
    const onMove   = (e: TouchEvent) => { e.preventDefault(); moveDrag(e.touches[0].clientX) }
    const onEnd    = ()               => endDrag()
    window.addEventListener('touchstart',  onStart, { passive: true  })
    window.addEventListener('touchmove',   onMove,  { passive: false })
    window.addEventListener('touchend',    onEnd,   { passive: true  })
    window.addEventListener('touchcancel', onEnd,   { passive: true  })
    return () => {
      window.removeEventListener('touchstart',  onStart)
      window.removeEventListener('touchmove',   onMove)
      window.removeEventListener('touchend',    onEnd)
      window.removeEventListener('touchcancel', onEnd)
    }
  }, [])

  /* ── Render ───────────────────────────────────────────────── */
  return (
    <section
      className="relative w-full select-none"
      style={{
        height:   'calc(100vh - 50px)',
        overflow: 'hidden',
        cursor:   grabbing ? 'grabbing' : 'grab',
      }}
      onMouseDown={(e) => startDrag(e.clientX)}
    >
      {/* drag hint */}
      <p
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20
                   text-[10px] tracking-[0.3em] uppercase pointer-events-none
                   select-none whitespace-nowrap"
        style={{ color: 'rgba(255,255,255,0.22)' }}
      >
        ← ドラッグして探索 →
      </p>

      {/* counter */}
      <div
        className="absolute top-4 right-6 z-20 font-mono text-xs pointer-events-none"
        style={{ color: 'rgba(255,255,255,0.32)' }}
      >
        {String(activeIdx + 1).padStart(2, '0')}&thinsp;/&thinsp;{String(N).padStart(2, '0')}
      </div>

      {/*
        perspective 2400px + radius 680px
        → front-card scale ≈ 1.40× — sharp, not blown-out
        rotateX(15deg) on the tilt wrapper:
          front cards (Z = +RADIUS) shift down → foreground lower
          back  cards (Z = −RADIUS) shift up   → background higher
      */}
      <div
        style={{
          perspective:       '2400px',
          perspectiveOrigin: '50% 50%',
          width:    '100%',
          height:   '100%',
          position: 'relative',
        }}
      >
        {/* X-axis tilt: front down, back up */}
        <div
          style={{
            position:       'absolute',
            top:  '50%',
            left: '50%',
            transformStyle: 'preserve-3d',
            transform:      'rotateX(-8deg)',
          }}
        >
        {/* Y-axis pivot: drag rotation */}
        <div
          ref={pivotRef}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {projects.map((p, i) => (
            <div
              key={p.slug}
              ref={el => { cardRefs.current[i] = el }}
              style={{
                position:   'absolute',
                width:      layout.w,
                height:     layout.h,
                marginLeft: -layout.w / 2,
                marginTop:  -layout.h / 2,
                transform:  `rotateY(${i * ANGLE_STEP}deg) translateZ(${layout.r}px)`,
                willChange: 'opacity',
              }}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="block w-full h-full"
                draggable={false}
                onClick={(e) => { if (hasDragged.current) e.preventDefault() }}
              >
                <div
                  className="w-full h-full rounded-2xl overflow-hidden relative"
                  style={{
                    border: `1px solid ${
                      activeIdx === i ? 'rgba(255,255,255,0.42)' : 'rgba(255,255,255,0.07)'
                    }`,
                    boxShadow: activeIdx === i
                      ? '0 0 28px rgba(52,211,153,0.22), 0 16px 48px rgba(0,0,0,0.55)'
                      : '0 6px 24px rgba(0,0,0,0.4)',
                    transition: 'border-color 0.35s, box-shadow 0.35s',
                  }}
                >
                  {/* screenshot — sizes="480px" feeds a larger srcset so it's sharp */}
                  <Image
                    src={p.images[0]}
                    alt={p.title}
                    fill
                    className="object-cover"
                    sizes="480px"
                    priority={i < 3}
                    draggable={false}
                  />

                  {/* dark overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.22) 55%, transparent 100%)',
                    }}
                  />

                  {/* index badge */}
                  <span
                    className="absolute top-3 left-3 font-mono text-[10px]"
                    style={{ color: 'rgba(255,255,255,0.40)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* active indicator */}
                  {activeIdx === i && (
                    <span
                      className="absolute top-3 right-3 text-[8px] font-semibold
                                 px-2 py-0.5 rounded-full tracking-wide"
                      style={{
                        background: 'rgba(52,211,153,0.22)',
                        border:     '1px solid rgba(52,211,153,0.45)',
                        color:      '#34d399',
                      }}
                    >
                      表示中
                    </span>
                  )}

                  {/* title + tech tags */}
                  <div className="absolute bottom-0 inset-x-0 p-3">
                    <h3
                      className="text-[11px] font-bold text-white leading-snug"
                      style={{
                        display:         '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow:        'hidden',
                      }}
                    >
                      {p.title}
                    </h3>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {p.technologies.slice(0, 2).map(t => (
                        <span
                          key={t}
                          className="text-[8px] px-1.5 py-0.5 rounded-full"
                          style={{
                            background: 'rgba(255,255,255,0.11)',
                            color:      'rgba(255,255,255,0.60)',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>   {/* pivotRef */}
        </div>   {/* rotateX tilt */}
      </div>     {/* perspective */}

      {/* radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background:
            'radial-gradient(ellipse 78% 78% at 50% 50%, transparent 32%, rgba(2,44,18,0.78) 100%)',
        }}
      />
    </section>
  )
}
