'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import ImageSlider from '@/components/ImageSlider'
import Fireworks from '../../../components/Fireworks'


const projects = [
  {
    title: 'ファミ通.com - ゲーム総合情報サイト',
    description: 'ファミ通.comは、家庭用ゲーム、スマートフォンゲーム、PCゲームなど、あらゆるゲームに関する最新ニュース、レビュー、インタビュー、動画、特集記事などを提供する総合ゲーム情報サイトです。',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    images: [
      '/assets/img/Screenshot_31.png',
      '/assets/img/Screenshot_32.png',
      '/assets/img/Screenshot_33.png'
    ],
    slug: 'project-1',
    details: 'Detailed description of Project 1...',

    challenges: '   総合情報サイトはアクセス数も多く、攻撃対象になりやすいです。サイト改ざん防止、DDoS対策、個人情報保護など、セキュリティの確保も重要です。また、CMS運用や記事更新の権限管理も複雑になります。',
  },
  {
    title: '株式会社ベストエステート - 不動産売買・査定サービス',
    description: 'ベストエステートは、広島県を中心に不動産の売却、購入、無料査定を行う地域密着型の不動産会社です。物件情報、売却相談、スタッフ紹介など、ユーザーに安心感を与える情報が掲載されています。',
    technologies: ['Next', 'Node.js', 'MongoDB','Google Analytics','Google Maps API'],
    images: [
      '/assets/img/Screenshot_34.png',
      '/assets/img/Screenshot_35.png',
      '/assets/img/Screenshot_36.png'
    ],
    slug: 'project-2',
    details: 'Detailed description of Project 2...',

    challenges: `リアルタイムでの地図連動

Google Maps API を利用して、物件の位置を地図上に表示する際に、以下の課題があります。

多数の物件をマップ上に効率的に表示するためのマーカー管理。

マップの拡大・縮小、範囲検索との連動。

モバイルでも快適に地図操作できるレスポンシブ対応。

データの正確性・更新頻度の管理`,
  },
  {
    title: 'OurPhoto（アワーフォト） - 出張撮影マッチングサービス',
    description: 'OurPhotoは、プロやセミプロのフォトグラファーとユーザーをマッチングする出張撮影プラットフォームです。記念日、家族写真、プロフィール写真など、様々なシーンに対応した撮影サービスを簡単に予約できます。A social media dashboard with analytics and reporting',
    technologies: ['Vue.js', 'Laravel', 'Chart.js','A8.net','Moshimo', 'php'],
    images: [
      '/assets/img/Screenshot_37.png',
      '/assets/img/Screenshot_38.png',
      '/assets/img/Screenshot_39.png'
    ],
    slug: 'project-3',
    details: 'Detailed description of Project 3...',

    challenges: `予約・スケジュール管理

ユーザーが希望日程で予約可能かを確認し、フォトグラファー側もスケジュール管理を行えるシステムを構築する必要があります。

時間帯や地域ごとの空き状況の動的表示、予約の自動通知メールやリマインドなどを整合性高く実装することが課題です。`,
  },
  {
    title: 'SpeeLead（スピリード） - 営業リスト自動作成・営業支援ツール',
    description: 'SpeeLeadは、法人営業向けに、企業リストの自動作成・ターゲティング・営業効率化を実現するSaaS型ツールです。業種や地域などの条件に基づいて見込み顧客を抽出し、営業リストとして活用できます。',
    technologies: ['Wordpress', 'PHP', 'MySQL','GSAP'],
    images: [
      '/assets/img/Screenshot_37.png',
      '/assets/img/Screenshot_38.png',
      '/assets/img/Screenshot_39.png'
    ],
    slug: 'project-4',
    details: 'Detailed description of Project 3...',

    challenges: `予約・スケジュール管理

ユーザーが希望日程で予約可能かを確認し、フォトグラファー側もスケジュール管理を行えるシステムを構築する必要があります。

時間帯や地域ごとの空き状況の動的表示、予約の自動通知メールやリマインドなどを整合性高く実装することが課題です。`,
  },
  {
    title: 'レガーレ 採用情報 - 地域密着型IT企業の求人サイト',
    description: '株式会社レガーレの採用サイトで、システム開発やWeb制作、営業職などの求人情報を提供。会社紹介、社員インタビュー、福利厚生など、求職者向けに企業の魅力を伝える内容が充実しています。',
    technologies: ['Wordpress', 'PHP', 'MySQL','GSAP','core-js','slick'],
    images: [
      '/assets/img/Screenshot_37.png',
      '/assets/img/Screenshot_38.png',
      '/assets/img/Screenshot_39.png'
    ],
    slug: 'project-5',
    details: 'Detailed description of Project 3...',

    challenges: `予約・スケジュール管理

ユーザーが希望日程で予約可能かを確認し、フォトグラファー側もスケジュール管理を行えるシステムを構築する必要があります。

時間帯や地域ごとの空き状況の動的表示、予約の自動通知メールやリマインドなどを整合性高く実装することが課題です。`,
  },
  {
    title: '株式会社田村塗装店 - 防水・塗装工事の専門業者',
    description: '田村塗装店は、東京都・神奈川県を中心に、建物の塗装、防水工事、リフォーム工事を提供する企業です。会社概要、施工実績、採用情報など、地域密着の安心感が伝わる内容です。',
    technologies: ['Wordpress', 'PHP', 'MySQL'],
    images: [
      '/assets/img/Screenshot_37.png',
      '/assets/img/Screenshot_38.png',
      '/assets/img/Screenshot_39.png'
    ],
    slug: 'project-6',
    details: 'Detailed description of Project 3...',

    challenges: `予約・スケジュール管理

ユーザーが希望日程で予約可能かを確認し、フォトグラファー側もスケジュール管理を行えるシステムを構築する必要があります。

時間帯や地域ごとの空き状況の動的表示、予約の自動通知メールやリマインドなどを整合性高く実装することが課題です。`,
  },
  {
    title: '門倉組 採用サイト - 建設業界のキャリアを支える採用情報',
    description: ' 門倉組の採用専用サイトで、新卒・中途向けに企業情報、職種紹介、福利厚生、先輩社員インタビューなどを掲載。建設業界でのキャリア形成を支援する内容が充実しています。',
    technologies: ['Wordpress', 'PHP', 'MySQL','GSAP'],
    images: [
      '/assets/img/Screenshot_37.png',
      '/assets/img/Screenshot_38.png',
      '/assets/img/Screenshot_39.png'
    ],
    slug: 'project-7',
    details: 'Detailed description of Project 3...',

    challenges: `予約・スケジュール管理

ユーザーが希望日程で予約可能かを確認し、フォトグラファー側もスケジュール管理を行えるシステムを構築する必要があります。

時間帯や地域ごとの空き状況の動的表示、予約の自動通知メールやリマインドなどを整合性高く実装することが課題です。`,
  },
  {
    title: 'Lifely株式会社 - 住まいと暮らしを豊かにするリノベーションサービス',
    description: 'Lifelyは、東京都を中心に、戸建てやマンションのリノベーション・不動産仲介サービスを提供しています。物件購入からデザイン・施工までワンストップで対応する、ライフスタイル提案型企業です。',
    technologies: ['WordPress', 'Woo-commerce', 'PHP', 'MySQL','GSAP'],
    images: [
      '/assets/img/Screenshot_37.png',
      '/assets/img/Screenshot_38.png',
      '/assets/img/Screenshot_39.png'
    ],
    slug: 'project-8',
    details: 'Detailed description of Project 3...',

    challenges: `予約・スケジュール管理

ユーザーが希望日程で予約可能かを確認し、フォトグラファー側もスケジュール管理を行えるシステムを構築する必要があります。

時間帯や地域ごとの空き状況の動的表示、予約の自動通知メールやリマインドなどを整合性高く実装することが課題です。`,
  },
  {
    title: '株式会社STリヴ - 解体工事・建築土木のプロフェッショナル',
    description: 'STリヴは、大阪府を拠点に、解体工事、造成、土木工事を行う建設業者です。安全・迅速・丁寧な施工をモットーに、住宅や商業施設の解体など幅広く対応しています。',
    technologies: ['WordPress', 'Woo-commerce', 'PHP', 'MySQL','GSAP'],
    images: [
      '/assets/img/Screenshot_37.png',
      '/assets/img/Screenshot_38.png',
      '/assets/img/Screenshot_39.png'
    ],
    slug: 'project-9',
    details: 'Detailed description of Project 3...',

    challenges: `予約・スケジュール管理

ユーザーが希望日程で予約可能かを確認し、フォトグラファー側もスケジュール管理を行えるシステムを構築する必要があります。

時間帯や地域ごとの空き状況の動的表示、予約の自動通知メールやリマインドなどを整合性高く実装することが課題です。`,
  },
  {
    title: 'オザワスタジオ - 群馬県桐生市のフォトスタジオ',
    description: 'オザワスタジオは、群馬県桐生市にある老舗写真館です。七五三、成人式、家族写真、証明写真など幅広いジャンルの撮影を行っており、地域密着型のフォトサービスを提供しています。',
    technologies: ['WordPress', 'Woo-commerce', 'PHP', 'MySQL','GSAP'],
    images: [
      '/assets/img/Screenshot_37.png',
      '/assets/img/Screenshot_38.png',
      '/assets/img/Screenshot_39.png'
    ],
    slug: 'project-10',
    details: 'Detailed description of Project 3...',

    challenges: `予約・スケジュール管理

ユーザーが希望日程で予約可能かを確認し、フォトグラファー側もスケジュール管理を行えるシステムを構築する必要があります。

時間帯や地域ごとの空き状況の動的表示、予約の自動通知メールやリマインドなどを整合性高く実装することが課題です。`,
  },
  {
    title: 'メンズ専門美容室の予約サイト',
    description: 'Kami-wo-kiru.comは、男性向けのヘアサロン・美容室に特化した予約サイトです。ビジネススタイルやカジュアルスタイルなど、メンズカットに特化したサロンの情報と予約導線が整っています。',
    technologies: ['WordPress', 'Woo-commerce', 'PHP', 'MySQL','GSAP'],
    images: [
      '/assets/img/Screenshot_37.png',
      '/assets/img/Screenshot_38.png',
      '/assets/img/Screenshot_39.png'
    ],
    slug: 'project-11',
    details: 'Detailed description of Project 3...',

    challenges: `予約・スケジュール管理

ユーザーが希望日程で予約可能かを確認し、フォトグラファー側もスケジュール管理を行えるシステムを構築する必要があります。

時間帯や地域ごとの空き状況の動的表示、予約の自動通知メールやリマインドなどを整合性高く実装することが課題です。`,
  },
  {
    title: '友禅会 - 日本舞踊を通じて伝統文化を次世代へ',
    description: '友禅会は、日本舞踊の継承と普及を目的とした団体で、教室案内やイベント情報、発表会レポートなどを掲載しています。伝統芸能の魅力を現代にも伝える活動を展開しています。',
    technologies: ['WordPress', 'Woo-commerce', 'PHP', 'MySQL','GSAP'],
    images: [
      '/assets/img/Screenshot_37.png',
      '/assets/img/Screenshot_38.png',
      '/assets/img/Screenshot_39.png'
    ],
    slug: 'project-12',
    details: 'Detailed description of Project 3...',

    challenges: `予約・スケジュール管理

ユーザーが希望日程で予約可能かを確認し、フォトグラファー側もスケジュール管理を行えるシステムを構築する必要があります。

時間帯や地域ごとの空き状況の動的表示、予約の自動通知メールやリマインドなどを整合性高く実装することが課題です。`,
  }
]

export default function ProjectPage() {
  const params = useParams()
  const projectSlug = params.slug as string
  const project = projects.find(p => p.slug === projectSlug)


  if (!project) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 animate-gradient">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white text-center">Project not found</h1>
          <Link 
            href="/projects"
            className="mt-8 inline-block text-white hover:text-gray-300 transition-colors"
          >
            プロジェクトに戻る
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 animate-gradient">
      <Fireworks />
      <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link 
            href="/projects"
            className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
          >
            <svg 
              className="w-6 h-6 mr-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 19l-7-7m0 0l7-7m-7 7h18" 
              />
            </svg>
            プロジェクトに戻る
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 p-8"
        >
          <h1 className="text-4xl font-bold text-white mb-6">{project.title}</h1>
          <p className="text-xl text-gray-300 mb-8">{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mb-8">
            <ImageSlider images={project.images} alt={project.title} />
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">チャレンジ</h2>
              <p className="text-gray-300" style={{ whiteSpace: 'pre-line' }}>{project.challenges}</p>
            </section>

          </div>
        </motion.div>
      </div>
    </main>
  )
} 