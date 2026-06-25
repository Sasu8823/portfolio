import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '村越敏一 — フルスタック＆AIエンジニア',
  description: '村越敏一のポートフォリオ。フルスタック開発・AI・Webアニメーションを専門とするエンジニアです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
