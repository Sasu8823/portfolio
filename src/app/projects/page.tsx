'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Fireworks from '../../components/Fireworks'

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
    description: `大切な誕生日や記念日をおしゃれな思い出に、たったひとつの特別なケーキを。出来立ての味をお届けするために、通販だからこそできる冷凍に対応した配合のオリジナルクリームは、１００％北海道産生クリームに新鮮な苺で作った自家製コンフィチュールをたっぷり入れた、苺の旨味と香りが広がる美味しさです。乳化剤を使用しない、こだわりのスポンジはフワフワの食感！生クリームとスポンジの相性も抜群です。`,
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
    description: `東京・蔵前にある「たのしく、書く人。」のための文具店。お好みで作るオーダーノートやオーダーインク。愛着の湧く、古びない文具セレクション。自分のために、大切な誰かのために「書く」楽しみをご提供します。海外発送可。`,
    technologies: ['Shopify', 'PHP', 'JavaScript', 'MySQL'],
    images: [
      '/assets/img/Screenshot_53.png',
      '/assets/img/Screenshot_54.png',
      '/assets/img/Screenshot_55.png'
    ],
    slug: 'project-15'
  }
]

const techFilters = [
  "React", "Next", "WordPress", "AI", "Python", "GSAP", "MySQL",
  "MongoDB", "WIX", "Shopify", "JavaScript", "HTML, CSS", "BTOB",
  "Woo-Commerce", "STUDIO", "UTAGE", "Scrapping",
];

export default function ProjectsPage() {
  const [selectedTech, setSelectedTech] = useState<string[]>([]);

  // --- Filter logic ---
  const filteredProjects =
    selectedTech.length === 0
      ? projects
      : projects.filter((project) =>
          project.technologies.some((tech) =>
            selectedTech.some((sel) =>
              tech.toLowerCase().includes(sel.toLowerCase())
            )
          )
        );

  // --- Toggle filters ---
  const handleFilter = (tech: string) => {
    setSelectedTech((prev) =>
      prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]
    );
  };

  return (
    <main className="min-h-screen">
      <Fireworks />
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Back to Home */}
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

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center"
        >
          私のプロジェクト
        </motion.h1>

        {/* --- Filter Buttons --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-xl font-bold text-white mb-12 text-center"
        >
          <ul className="flex flex-wrap gap-2 justify-center max-w-80vw">
            {techFilters.map((tech) => (
              <button
                key={tech}
                onClick={() => handleFilter(tech)}
                className={`px-3 py-1 border-2 rounded-full text-sm transition-colors ${
                  selectedTech.includes(tech)
                    ? "bg-white text-black border-white"
                    : "bg-white/20 text-white hover:bg-white/40"
                }`}
              >
                {tech}
              </button>
            ))}
          </ul>

          {/* Selected tech list */}
          {selectedTech.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-gray-300 text-sm">
                現在のフィルター:{" "}
                <span className="text-white">
                  {selectedTech.join(", ")}
                </span>
              </p>
              <button
                onClick={() => setSelectedTech([])}
                className="px-3 py-1 bg-white/20 hover:bg-white/40 rounded-full text-sm text-white transition"
              >
                フィルターをクリア
              </button>
            </div>
          )}
        </motion.div>

        {/* --- Project Cards Grid --- */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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
                  <h2 className="text-2xl font-semibold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>
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
        </motion.div>

        {/* --- No Results --- */}
        {filteredProjects.length === 0 && (
          <p className="text-gray-400 text-center mt-10">
            該当するプロジェクトがありません。
          </p>
        )}
      </div>
    </main>
  );
}