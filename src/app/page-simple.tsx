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
            1次選考3分の1に残られた方全員に返信させていただいております。
障害物レースに対する誤解が見られますのでご報告いたします。補聴器における障害物レースが始まるのは、患者が補聴器装用を決めてからではなく、補聴器供給側が補聴器を処方式通りに鼓膜に音が到達するように調整した時点で始まります。SASIKEでもそうですが、レースに参加できるのは、幾多の難関を潜り抜けた選べれし者だけですよね。前提条件が厳しいうえにそこからしかレースが始まらないという意味です。
その後も幾多の障害物を乗り越えゴールに到達する必要があります。食器の音がうるさい、咀嚼音がうるさい、言葉がはっきり聞こえない（調整が不良、難聴の脳、高度難聴では普通に起こる）、装用すると耳が痛いあるいはかゆい、トンネルの中で聞いているよう（閉塞感）、マイクを通して聴いているよう、自分の声がやたら大きい、楽器の音がおかしい,頭痛がするetc. これらの障害を調整、慣れ、聴覚リハビリテーションを駆使して解決していくわけです。まるで障害物レースだと思いませんか。SASIKEのようにゴールにごく少数しか到達できないわけではありませんが中には、つらくて補聴器が装用できない、どうしても障害を解決できない、そもそもそんなにモチベーションが高くないなどで1割強の方（補聴器店よりは格段に少ない）が脱落します。
リンク先が見れないとおっしゃっていた方がおられましたが、申し訳ございません、手違いで非公開になっておりました。今公開いたしましたのでご覧になれると思います。
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
