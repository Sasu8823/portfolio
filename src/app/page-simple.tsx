'use client'

import Link from 'next/link'

export default function HomeSimple() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            Crafting digital experiences with modern web technologies
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 bg-white text-indigo-900 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              プロジェクトを見る
            </Link>
            <Link
              href="/inquiry"
              className="px-8 py-3 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
