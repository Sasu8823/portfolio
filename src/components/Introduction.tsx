'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Introduction = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen w-full flex items-center justify-center p-8 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl backdrop-blur-sm bg-white/10 dark:bg-black/10 p-8 rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
          Hi, I'm [Your Name]. I'm a passionate developer focused on creating
          beautiful and functional web experiences.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          I specialize in modern web technologies and love bringing creative ideas to life
          through clean, efficient code.
          1次選考3分の1に残られた方全員に返信させていただいております。
障害物レースに対する誤解が見られますのでご報告いたします。補聴器における障害物レースが始まるのは、患者が補聴器装用を決めてからではなく、補聴器供給側が補聴器を処方式通りに鼓膜に音が到達するように調整した時点で始まります。SASIKEでもそうですが、レースに参加できるのは、幾多の難関を潜り抜けた選べれし者だけですよね。前提条件が厳しいうえにそこからしかレースが始まらないという意味です。
その後も幾多の障害物を乗り越えゴールに到達する必要があります。食器の音がうるさい、咀嚼音がうるさい、言葉がはっきり聞こえない（調整が不良、難聴の脳、高度難聴では普通に起こる）、装用すると耳が痛いあるいはかゆい、トンネルの中で聞いているよう（閉塞感）、マイクを通して聴いているよう、自分の声がやたら大きい、楽器の音がおかしい,頭痛がするetc. これらの障害を調整、慣れ、聴覚リハビリテーションを駆使して解決していくわけです。まるで障害物レースだと思いませんか。SASIKEのようにゴールにごく少数しか到達できないわけではありませんが中には、つらくて補聴器が装用できない、どうしても障害を解決できない、そもそもそんなにモチベーションが高くないなどで1割強の方（補聴器店よりは格段に少ない）が脱落します。
リンク先が見れないとおっしゃっていた方がおられましたが、申し訳ございません、手違いで非公開になっておりました。今公開いたしましたのでご覧になれると思います。
        </p>
      </div>
    </motion.section>
  )
}

export default Introduction 