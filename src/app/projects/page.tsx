'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Fireworks from '../../components/Fireworks'

const projects = [
  {
    title: 'ファミ通.com - ゲーム総合情報サイト',
    description: `ファミ通.comは、家庭用ゲーム、スマートフォンゲーム、PCゲームなど、あらゆるゲームに関する最新ニュース、レビュー、インタビュー、動画、特集記事などを提供する総合ゲーム情報サイトです。`,
    technologies: ['Next', 'TypeScript', 'Tailwind CSS', 'Python'],
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
    technologies: ['Next', 'Node.js', 'MongoDB','Google Analytics','Google Maps API'],
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
    technologies: ['Vue.js', 'Laravel', 'Chart.js','A8.net','Moshimo', 'php'],
    images: [
      '/assets/img/Screenshot_37.png',
      '/assets/img/Screenshot_38.png',
      '/assets/img/Screenshot_39.png'
    ],
    slug: 'project-3'
  },
  {
    title: 'SpeeLead（スピリード） - 営業リスト自動作成・営業支援ツール',
    description: 'SpeeLeadは、法人営業向けに、企業リストの自動作成・ターゲティング・営業効率化を実現するSaaS型ツールです。業種や地域などの条件に基づいて見込み顧客を抽出し、営業リストとして活用できます。',
    technologies: ['Wordpress', 'PHP', 'MySQL','GSAP'],
    images: [
      '/assets/img/Screenshot_2.png',
      '/assets/img/Screenshot_3.png',
      '/assets/img/Screenshot_4.png'   
    ],
    slug: 'project-4'
  },
  {
    title: 'レガーレ 採用情報 - 地域密着型IT企業の求人サイト',
    description: '株式会社レガーレの採用サイトで、システム開発やWeb制作、営業職などの求人情報を提供。会社紹介、社員インタビュー、福利厚生など、求職者向けに企業の魅力を伝える内容が充実しています。',
    technologies: ['Wordpress', 'PHP', 'MySQL','GSAP','core-js','slick'],
    images: [
      '/assets/img/Screenshot_5.png',
      '/assets/img/Screenshot_6.png',
      '/assets/img/Screenshot_7.png'
    ],
    slug: 'project-5'
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
    technologies: ['Wordpress', 'PHP', 'MySQL','GSAP'],
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
    technologies: ['WordPress', 'Woo-commerce', 'PHP', 'MySQL','GSAP'],
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
    technologies: ['WordPress', 'Woo-commerce', 'PHP', 'MySQL','GSAP'],
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
    technologies: ['WordPress', 'Woo-commerce', 'PHP', 'MySQL','GSAP'],
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
    technologies: ['React', 'LIFF', 'Express', 'MySQL','LINE official account'],
    images: [
      '/assets/img/Screenshot_24.png',
      '/assets/img/Screenshot_25.png',
      '/assets/img/Screenshot_26.png'
    ],
    slug: 'project-11'
  }
]

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 animate-gradient">
      <Fireworks />
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <Link 
            href="/"
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
            ホームに戻る
          </Link>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center"
        >
          私のプロジェクト
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-xl font-bold text-white mb-12 text-center "
          >
            <ul className='flex flex-wrap gap-2 justify-center max-w-80vw'>
                <button className='px-3 py-1 bg-red-500 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    React
                </button>
                <button className='px-3 py-1 bg-green-500 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    Next
                </button>
                <button className='px-3 py-1 bg-yellow-500 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    WordPress
                </button>
                <button className='px-3 py-1 bg-blue-500 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    Python
                </button>
                <button className='px-3 py-1 bg-indigo-500 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    GSAP
                </button>
                <button className='px-3 py-1 bg-pink-500 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    MySQL
                </button>
                <button className='px-3 py-1 bg-red-900 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    MongoDB
                </button>
                <button className='px-3 py-1 bg-yellow-900 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    WIX
                </button>
                <button className='px-3 py-1 bg-green-900 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    SHOPIFY
                </button>
                <button className='px-3 py-1 bg-blue-900 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    JavaScript
                </button>
                <button className='px-3 py-1 bg-indigo-900 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    HTML, CSS
                </button>
                <button className='px-3 py-1 bg-purple-900 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    JavaScript
                </button>
                <button className='px-3 py-1 bg-pink-900 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    JQuery
                </button>
                <button className='px-3 py-1 bg-red-50 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    BTOB
                </button>
                <button className='px-3 py-1 bg-yellow-700 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    Woo-Commerce
                </button>
                <button className='px-3 py-1 bg-green-700 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    STUDIO
                </button>
                <button className='px-3 py-1 bg-blue-700 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    UTAGE
                </button>
                <button className='px-3 py-1 bg-indigo-700 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    AI
                </button>
                <button className='px-3 py-1 bg-purple-700 bg-opacity-50 border-2 border-opacity-75 rounded-full text-sm text-white'>
                    Scrapping
                </button>
            </ul>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-colors"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="aspect-video relative">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-white mb-2">{project.title}</h2>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 rounded-full text-sm text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
} 