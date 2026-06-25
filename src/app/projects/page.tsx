'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Fireworks from '../../components/Fireworks'
import ProjectCarousel3D from '../../components/ProjectCarousel3D'

const projects = [
  {
    title: 'LINEステップAI自動化構築サービス',
    description: `あなたのLINE公式アカウントをAIで自動化し、売上とエンゲージメントを向上させます。
固定ステップ配信ではなく、ユーザーの反応に応じてAIが最適な返信・提案を行う新しいLINEマーケティングを構築します。東京・蔵前にある「たのしく、書く人。」のための文具店。お好みで作るオーダーノートやオーダーインク。愛着の湧く、古びない文具セレクション。自分のために、大切な誰かのために「書く」楽しみをご提供します。海外発送可。`,
    technologies: ['Python', 'ChatGPT API', 'AI', 'LINE Messaging API', 'LINE Biz account'],
    images: [
      '/assets/img/Screenshot_73.png',
      '/assets/img/Screenshot_74.png'
    ],
    slug: 'project-16'
  },{
    title: '相性診断文章生成 WEBアプリ',
    description: `目的: 恋に悩む10〜30代が、入力済みの占い要素をもとに「前向きで寄り添う」相性結果を受け取り、勇気づけられる体験を提供する。
    価値: 1つのサイトで複数の占い軸を横断・クロス集計して“総合判断”。
    方針:

    結果テキストは15行前後（225〜300文字程度）, ポジティブで応援するトーン。

    保存はスクショ推奨、マイページは持たない（個人情報を保持しない）。

    SNS優先度: Instagram ＞ X（Twitter）＞ LINE。

    将来は PWA化 → さらに アプリ化 も検討（広告カット版や有料版の可能性）。

    収益化は動画広告に依存しない方向（主にアフィリエイト）。
    URL; https://ai-mixer.jp/`,
    technologies: ['NEXT.js', 'ChatGPT API', 'AI', 'Node.js', 'Radix UI'],
    images: [
      '/assets/img/Compatibility-Test-Find-Your-Perfect-Match.png',
      '/assets/img/Compatibility-Test-Find-Your-Perfect-Match-12.png',
      '/assets/img/Compatibility-Test-Find-Your-Perfect-Match-1.png',
      '/assets/img/Compatibility-Test-Find-Your-Perfect-Match-123.png',
    ],
    slug: 'project-17'
  }, 
  {
    title: 'ファミ通.com - ゲーム総合情報サイト',
    description: `ファミ通.comは、家庭用ゲーム、スマートフォンゲーム、PCゲームなど、あらゆるゲームに関する最新ニュース、レビュー、インタビュー、動画、特集記事などを提供する総合ゲーム情報サイトです。`,
    technologies: ['Next', 'TypeScript', 'Tailwind', 'Swift UI'],
    images: [
      '/assets/img/Screenshot_31.png',
      '/assets/img/Screenshot_32.png',
      '/assets/img/Screenshot_33.png'
    ],
    slug: 'project-1'
  },
  {
    title: '株式会社ベストエステート - 不動産売買・査定サービス',
    description: 'ベストエステートは、広島県を中心に不動産の売却、購入、無料査定を行う地域密着型の不動産会社です。物件情報、売却相談、スタッフ紹介など、ユーザーに安心感を与える情報が掲載されています。',
    technologies: ['Next', 'Node.js', 'MongoDB', 'Google Analytics', 'Google Maps API'],
    images: [
      '/assets/img/Screenshot_34.png',
      '/assets/img/Screenshot_35.png',
      '/assets/img/Screenshot_36.png'
    ],
    slug: 'project-2'
  },
  {
    title: 'OurPhoto（アワーフォト） - 出張撮影マッチングサービス',
    description: 'OurPhotoは、プロやセミプロのフォトグラファーとユーザーをマッチングする出張撮影プラットフォームです。記念日、家族写真、プロフィール写真など、様々なシーンに対応した撮影サービスを簡単に予約できます。',
    technologies: ['Vue.js', 'Laravel', 'Chart.js', 'A8.net', 'Moshimo', 'php'],
    images: [
      '/assets/img/Screenshot_37.png',
      '/assets/img/Screenshot_38.png',
      '/assets/img/Screenshot_39.png'
    ],
    slug: 'project-3'
  },
  {
    title: '株式会社田村塗装店 - 防水・塗装工事の専門業者',
    description: '田村塗装店は、東京都・神奈川県を中心に、建物の塗装、防水工事、リフォーム工事を提供する企業です。会社概要、施工実績、採用情報など、地域密着の安心感が伝わる内容です。',
    technologies: ['Wordpress', 'PHP', 'MySQL'],
    images: [
      '/assets/img/Screenshot_9.png',
      '/assets/img/Screenshot_10.png',
      '/assets/img/Screenshot_11.png'
    ],
    slug: 'project-6'
  },
  {
    title: '門倉組 採用サイト - 建設業界のキャリアを支える採用情報',
    description: ' 門倉組の採用専用サイトで、新卒・中途向けに企業情報、職種紹介、福利厚生、先輩社員インタビューなどを掲載。建設業界でのキャリア形成を支援する内容が充実しています。',
    technologies: ['Wordpress', 'PHP', 'MySQL', 'GSAP'],
    images: [
      '/assets/img/Screenshot_12.png',
      '/assets/img/Screenshot_13.png',
      '/assets/img/Screenshot_14.png'
    ],
    slug: 'project-7'
  },
  {
    title: 'Lifely株式会社 - 住まいと暮らしを豊かにするリノベーションサービス',
    description: 'Lifelyは、東京都を中心に、戸建てやマンションのリノベーション・不動産仲介サービスを提供しています。物件購入からデザイン・施工までワンストップで対応する、ライフスタイル提案型企業です。',
    technologies: ['WordPress', 'Woo-commerce', 'PHP', 'MySQL', 'GSAP'],
    images: [
      '/assets/img/Screenshot_15.png',
      '/assets/img/Screenshot_17.png',
      '/assets/img/Screenshot_16.png'
    ],
    slug: 'project-8'
  },
  {
    title: '株式会社STリヴ - 解体工事・建築土木のプロフェッショナル',
    description: 'STリヴは、大阪府を拠点に、解体工事、造成、土木工事を行う建設業者です。安全・迅速・丁寧な施工をモットーに、住宅や商業施設の解体など幅広く対応しています。',
    technologies: ['WordPress', 'Woo-commerce', 'PHP', 'MySQL', 'GSAP'],
    images: [
      '/assets/img/Screenshot_18.png',
      '/assets/img/Screenshot_20.png',
      '/assets/img/Screenshot_19.png'
    ],
    slug: 'project-9'
  },
  {
    title: 'オザワスタジオ - 群馬県桐生市のフォトスタジオ',
    description: 'オザワスタジオは、群馬県桐生市にある老舗写真館です。七五三、成人式、家族写真、証明写真など幅広いジャンルの撮影を行っており、地域密着型のフォトサービスを提供しています。',
    technologies: ['WordPress', 'Woo-commerce', 'PHP', 'MySQL', 'GSAP'],
    images: [
      '/assets/img/Screenshot_21.png',
      '/assets/img/Screenshot_23.png',
      '/assets/img/Screenshot_22.png'
    ],
    slug: 'project-10'
  },
  {
    title: 'LINEで美容師+顧客マッチングシステム',
    description: `・美容師がLINE経由でお客様とマッチングできる仕組みを構築
                  ・マッチング1件につき500円の成果課金（Stripeで自動決済）
                  ・お客様には施術予算に応じたランク（S〜C）を設定し、マッチング精度を向上`,
    technologies: ['React', 'LIFF', 'Express', 'MySQL', 'LINE official account'],
    images: [
      '/assets/img/Screenshot_24.png',
      '/assets/img/Screenshot_25.png',
      '/assets/img/Screenshot_26.png'
    ],
    slug: 'project-11'
  },
  {
    title: 'DIFYを利用した業務計画書の作成',
    description: `DIFYを活用することで、ChatGPTなどの生成AIを業務計画書の作成プロセスに組み込み、質問応答形式で必要情報を自動収集・整理できます。担当者が入力した事業方針や目標をもとに、AIが日次・週次・月次の行動計画を自動生成し、文書フォーマットまで整えてくれるため、短時間で完成度の高い業務計画書を作成できます。`,
    technologies: ['Dify', 'LLM', 'chatGPT API', 'python'],
    images: [
      '/assets/img/Screenshot_56.png',
      '/assets/img/Screenshot_57.png',
      '/assets/img/Screenshot_58.png'
    ],
    slug: 'project-12'
  },
  {
    title: 'Vue + Laravel + Dockerプロジェクトをさくらサーバーにデプロイ',
    description: `Vue（フロントエンド）と Laravel（バックエンド）で構成された Web アプリケーションを Docker 環境でコンテナ化し、そのまま さくらのレンタルサーバー または さくらの VPS へデプロイするプロジェクトです。開発環境で動作している Docker コンテナ群（Laravel / Nginx / MySQL / Node など）を本番用に最適化し、セキュアかつスケーラブルな構成で稼働させることを目的としています。`,
    technologies: ['Vue', 'Larvel', 'Docker', 'MySQL', 'Sakura VPS'],
    images: [
      '/assets/img/Screenshot_59.png',
      '/assets/img/Screenshot_60.png',
      '/assets/img/Screenshot_61.png'
    ],
    slug: 'project-13'
  },
  {
    title: 'たったひとつのアニバーサリーケーキ | 誕生日ケーキ | 通販 | お取り寄せ',
    description: `大切な誕生日や記念日をおしゃれな思い出に、たったひとつの特別なケーキを。出来立ての味をお届けするために、通販だからこそできる冷凍に対応した配合のオリジナルクリームは、１００％北海道産生クリームに新鮮な苺で作った自家製コンフィチュールをたっぷり入れた、苺の旨味と香りが広がる美味しさです。乳化剤を使用しない、こだわりのスポンジはフワフワの食感！生クリームとスポンジの相性も抜群です。
    URL; https://anniversary-cake.com/`,
    technologies: ['Shopify', 'PHP', 'MySQL'],
    images: [
      '/assets/img/Screenshot_44.png',
      '/assets/img/Screenshot_45.png',
      '/assets/img/Screenshot_46.png'
    ],
    slug: 'project-14'
  },
  {
    title: 'たのしく、書く人。カキモリ',
    description: `東京・蔵前にある「たのしく、書く人。」のための文具店。お好みで作るオーダーノートやオーダーインク。愛着の湧く、古びない文具セレクション。自分のために、大切な誰かのために「書く」楽しみをご提供します。海外発送可。
    URL; https://kakimori.com/`,
    technologies: ['Shopify', 'PHP', 'JavaScript', 'MySQL'],
    images: [
      '/assets/img/Screenshot_53.png',
      '/assets/img/Screenshot_54.png',
      '/assets/img/Screenshot_55.png'
    ],
    slug: 'project-15'
  },
  {
    title: '米国ビザ申請フォームの設計・開発',
    description: `DS-160は、アメリカ非移民ビザ申請に必要な公式オンライン申請フォームです。
    本フォームでは、アメリカビザ申請に必要な情報を多数ご入力いただくため、
入力には相応のお時間がかかることが予想されます。

各項目に正確にご入力のうえ、
「次のページへ進む」ボタンを押していただくと、
入力内容は自動的に保存されます。

本フォームは、アメリカビザ申請に必須となる申請書作成のための重要な情報収集フォームです。
円滑で正確な申請のため、どうぞご協力くださいますようお願い申し上げます。
URL; 非公開`,
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'MySQL' , 'google sheet download function' , 'mail notification function','AI translation function'],
    images: [
      '/assets/img/Screenshot_151.png',
      '/assets/img/Screenshot_152.png',
      '/assets/img/Screenshot_153.png'
    ],
    slug: 'project-18'
  },{
    title: '親の想いを届けるLINEミニアプリ',
    description: `「My Personality」診断を実施しました。
親のプロパティを設定しました。

また、プロパティの設定に適していると思われる質問は、
・遠く住んでいる子供でも、簡単に答えられる質問にする
・質問数は、多くても10文～20文（回答できない場合は、「知らない」という回答もできる）
・応答結果の利用はメッセージを生成するためのものなので、AIで分析すればよい。
    URL;https://liff.line.me/2007856156-GXQbyd30`,
    technologies: ['LINE Messaging API', 'React', 'Tailwind CSS', 'MySQL' , 'Select form' ,'check button UI' ,'LLM'],
    images: [
      '/assets/img/Screenshot_158.png',
      '/assets/img/Screenshot_159.png',
      '/assets/img/Screenshot_160.png'
    ],
    slug: 'project-19'
  }, {
    title: 'お正月お祝い占星術ランディングページ',
    description: `お正月お祝い占星術ランディングページです。
    URL;https://mikeneco.co.jp/2026_newyear/`,
    technologies: ['HTML', 'SCSS', 'Javascript', 'GSAP'],
    images: [
      '/assets/img/Screenshot_154.png',
      '/assets/img/Screenshot_156.png',
      '/assets/img/Screenshot_157.png'
    ],
    slug: 'project-20'
  },
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Fireworks />

      {/* ── 3D Circular Carousel ─────────────────────────── */}
      <div className="relative">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-6 inset-x-0 z-20 text-center pointer-events-none"
        >
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-widest uppercase">
            Projects
          </h1>
          <p
            className="mt-1 text-[10px] tracking-[0.3em] uppercase"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            {projects.length} works
          </p>
        </motion.div>

        <ProjectCarousel3D projects={projects} />
      </div>

      {/* back link */}
      <div className="flex justify-center" style={{ height: '50px', alignItems: 'center' }}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{ color: 'rgba(255,255,255,0.40)' }}
          onMouseOver={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.80)')}
          onMouseOut={(e)  => (e.currentTarget.style.color = 'rgba(255,255,255,0.40)')}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path d="M10 13L5 8l5-5" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          ホームに戻る
        </Link>
      </div>
    </main>
  )
}