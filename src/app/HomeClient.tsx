'use client'
import { useEffect, useRef, useState, useCallback } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { motion } from "framer-motion"
import Link from 'next/link'
import Fireworks from '@/components/Fireworks'
import Image from 'next/image'
import SkillSection from "@/components/skillsection"
import { translations, type Language } from '@/lib/translations'

gsap.registerPlugin(ScrollTrigger)

/* ── Typing animation component ─────────────────────────────────────────── */
function TypedRole({ roles }: { roles: string[] }) {
  const [text, setText]           = useState('')
  const [roleIdx, setRoleIdx]     = useState(0)
  const [isDeleting, setDeleting] = useState(false)
  const timerRef                  = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    const current = roles[roleIdx]
    const delay   = isDeleting ? 50 : 100

    timerRef.current = setTimeout(() => {
      if (!isDeleting && text === current) {
        // Pause at full word, then start deleting
        timerRef.current = setTimeout(() => setDeleting(true), 1800)
        return
      }
      if (isDeleting && text === '') {
        setDeleting(false)
        setRoleIdx((i) => (i + 1) % roles.length)
        return
      }
      setText(isDeleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
    }, delay)

    return () => clearTimeout(timerRef.current)
  }, [text, isDeleting, roleIdx, roles])

  // Reset when roles array changes (language switch)
  useEffect(() => {
    setText('')
    setDeleting(false)
    setRoleIdx(0)
  }, [roles])

  return (
    <span className="text-emerald-300 font-semibold">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  )
}

/* ── Scroll-triggered reveal ─────────────────────────────────────────────── */
function Reveal3D({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="reveal-3d" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

/* ── Language switcher ───────────────────────────────────────────────────── */
const LANGS: { code: Language; label: string }[] = [
  { code: 'ja',    label: 'JP' },
  { code: 'en',    label: 'EN' },
  { code: 'pt-BR', label: 'PT' },
]

function LanguageSwitcher({ lang, onChange }: { lang: Language; onChange: (l: Language) => void }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1
                    bg-black/30 backdrop-blur-md rounded-full p-1
                    border border-emerald-400/20">
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => onChange(code)}
          className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-200 ${
            lang === code
              ? 'bg-emerald-400 text-emerald-950 shadow-md shadow-emerald-500/30'
              : 'text-emerald-300 hover:text-white'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

/* ── Main page ───────────────────────────────────────────────────────────── */
export default function Home() {
  const [lang, setLang] = useState<Language>('ja')

  // Persist language choice
  useEffect(() => {
    const saved = (typeof window !== 'undefined' && localStorage.getItem('lang')) as Language | null
    if (saved && (saved === 'ja' || saved === 'en' || saved === 'pt-BR')) setLang(saved)
  }, [])

  const changeLang = useCallback((l: Language) => {
    setLang(l)
    localStorage.setItem('lang', l)
  }, [])

  const t = translations[lang]

  // GSAP scroll animations on headings
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.gsap-heading').forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50, rotationX: 30 },
          {
            opacity: 1, y: 0, rotationX: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        )
      })
    })
    return () => ctx.revert()
  }, [lang]) // re-run when lang changes (new DOM elements)

  return (
    <main className="text-white overflow-x-hidden">
      <Fireworks />
      <LanguageSwitcher lang={lang} onChange={changeLang} />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center
                          px-4 sm:px-6 lg:px-8 hero-section overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full
                          bg-emerald-400/20 filter blur-3xl animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full
                          bg-green-300/15 filter blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full
                          bg-teal-400/15 filter blur-3xl animate-blob animation-delay-4000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-[600px] h-[600px] rounded-full border border-emerald-400/10
                          animate-spin-slow" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-[800px] h-[800px] rounded-full border border-green-300/8
                          animate-spin-slow animation-delay-4000"
               style={{ animationDirection: 'reverse' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            key={t.hero.welcome}
            initial={{ opacity: 0, y: 40, rotateX: 45 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-4xl sm:text-6xl font-bold mb-4 drop-shadow-2xl"
            style={{ textShadow: '0 4px 30px rgba(16,185,129,0.6)' }}
          >
            {t.hero.welcome}
          </motion.h1>

          {/* Typing role */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl mb-3 h-8"
          >
            <TypedRole key={lang} roles={t.hero.roles} />
          </motion.p>

          <motion.p
            key={t.hero.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
            className="text-lg text-emerald-100/80 mb-10"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.7, ease: 'backOut' }}
            className="flex justify-center gap-4"
          >
            <Link
              href="/projects"
              className="inline-block px-8 py-3 bg-emerald-400 text-emerald-950 rounded-full
                         font-semibold hover:bg-emerald-300 transition-colors shadow-lg
                         shadow-emerald-500/40"
            >
              {t.hero.cta}
            </Link>
            <Link
              href="/inquiry"
              className="inline-block px-8 py-3 border border-emerald-400 text-emerald-200
                         rounded-full font-semibold hover:bg-emerald-400/20 transition-colors"
            >
              {t.hero.ctaContact}
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2
                     text-emerald-300/60 text-xs tracking-widest"
        >
          <span className="uppercase">{t.hero.scroll}</span>
          <div className="w-px h-10 bg-gradient-to-b from-emerald-400/60 to-transparent
                          animate-bounce" />
        </motion.div>
      </section>

      {/* ── Photo / Profile ──────────────────────────────────────── */}
      <section className="min-h-screen py-20 intro-section relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
             style={{
               backgroundImage: `
                 linear-gradient(rgba(16,185,129,0.06) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(16,185,129,0.06) 1px, transparent 1px)`,
               backgroundSize: '60px 60px',
               transform: 'perspective(600px) rotateX(10deg)',
               transformOrigin: 'top',
             }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Reveal3D>
            <div className="inline-block rounded-3xl p-1
                            bg-gradient-to-br from-emerald-400/30 to-teal-500/30
                            shadow-2xl shadow-emerald-900/60">
              <Image
                src="/assets/img/Screenshot_179.png"
                alt={t.profile.name}
                width={360}
                height={360}
                className="rounded-3xl border-2 border-emerald-300/40"
              />
            </div>
          </Reveal3D>
          <Reveal3D delay={150}>
            <h2 className="gsap-heading text-3xl font-bold mt-8 mb-2"
                style={{ textShadow: '0 0 20px rgba(52,211,153,0.5)' }}>
              {t.profile.hello}
            </h2>
            <p className="text-emerald-200 text-lg mt-2">
              {t.profile.name}　｜　{t.profile.role}
            </p>
          </Reveal3D>
        </div>
      </section>

      {/* ── About Me ─────────────────────────────────────────────── */}
      <section className="min-h-screen py-20 relative">
        <div className="absolute right-10 top-20 w-48 h-48 rounded-full
                        bg-emerald-500/10 filter blur-2xl animate-float-slow pointer-events-none" />
        <div className="absolute left-10 bottom-20 w-56 h-56 rounded-full
                        bg-teal-400/10 filter blur-2xl animate-float pointer-events-none
                        animation-delay-2000" />
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <Reveal3D>
            <h2 className="gsap-heading text-3xl font-bold mb-8 text-center text-emerald-300">
              {t.about.title}
            </h2>
          </Reveal3D>
          <Reveal3D delay={100}>
            <div className="bg-white/5 backdrop-blur-sm border border-emerald-400/20
                            rounded-2xl p-6 shadow-xl shadow-emerald-900/40 space-y-4">
              {t.about.paras.map((para, i) => (
                <p key={i} className="text-lg leading-relaxed text-gray-200">{para}</p>
              ))}
              <div className="pt-4 border-t border-emerald-400/20">
                <p className="text-emerald-300 font-semibold mb-3">{t.about.skillsTitle}</p>
                <dl className="space-y-2">
                  {t.about.skills.map((s) => (
                    <div key={s.label} className="flex gap-2 text-sm">
                      <dt className="text-emerald-400 font-medium whitespace-nowrap w-28 shrink-0">
                        {s.label}
                      </dt>
                      <dd className="text-gray-300">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal3D>
        </div>
      </section>

      {/* ── Education & Skills ───────────────────────────────────── */}
      <section className="min-h-screen pt-12 relative">
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <Reveal3D>
            <h2 className="gsap-heading text-3xl font-bold text-center mb-8 text-emerald-300">
              {t.education.title}
            </h2>
          </Reveal3D>
          <Reveal3D delay={100}>
            <ul className="space-y-4">
              <li className="bg-white/10 backdrop-blur-sm border border-emerald-400/20
                             p-6 rounded-2xl text-center shadow-lg shadow-emerald-900/30">
                <h3 className="text-xl font-semibold">{t.education.school}</h3>
                <p className="text-emerald-300 mt-1">{t.education.period}</p>
              </li>
            </ul>
          </Reveal3D>
        </div>
        <SkillSection title={t.skills.title} />
      </section>

      {/* ── Contact ──────────────────────────────────────────────── */}
      <section className="py-16 flex flex-col items-center gap-4">
        <Reveal3D>
          <h2 className="gsap-heading text-2xl font-bold text-emerald-300 mb-4">
            {t.contact.title}
          </h2>
        </Reveal3D>
        <Reveal3D delay={100}>
          <a
            href="mailto:stackover.info@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3
                       bg-white/10 backdrop-blur-sm border border-emerald-400/30
                       rounded-full hover:bg-emerald-400/20 transition-colors"
          >
            <img src="/assets/img/mail.png" alt="Email" className="w-8 h-8 object-contain" />
            <span className="text-emerald-200">stackover.info@gmail.com</span>
          </a>
        </Reveal3D>
      </section>
    </main>
  )
}
