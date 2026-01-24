'use client'

import { useEffect, useRef } from 'react'

export default function TubesBackground() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        let app: any
        let mounted = true

        const onClick = () => {
            if (!app) return
            app.tubes.setColors(randomColors(3))
            app.tubes.setLightsColors(randomColors(4))
        }

        const init = async () => {
            const { default: TubesCursor } = await import(
                'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js'
              )


            if (!mounted || !canvasRef.current) return

            app = TubesCursor(canvasRef.current, {
                tubes: {
                    colors: ['#f967fb', '#53bc28', '#6958d5'],
                    lights: {
                        intensity: 200,
                        colors: ['#83f36e', '#fe8a2e', '#ff008a', '#60aed5']
                    }
                }
            })

            document.body.addEventListener('click', onClick)
        }

        init()

        return () => {
            mounted = false
            document.body.removeEventListener('click', onClick)
            app?.dispose?.()
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            id="canvas"
            aria-hidden
        />
    )
}

function randomColors(count: number) {
    return Array.from({ length: count }, () =>
        '#' +
        Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0')
    )
}
