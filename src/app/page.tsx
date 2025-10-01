'use client'
import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from 'next/link'
import Fireworks from '@/components/Fireworks';
import Image from 'next/image'
import SkillSection from "@/components/skillsection"


gsap.registerPlugin(ScrollTrigger)


export default function Home() {




  return (
    <main className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white" >
      <Fireworks />

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            私のポートフォリオへようこそ
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8">
            最新のウェブテクノロジーでデジタル体験を創造する
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 bg-white text-indigo-900 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              プロジェクトを見る
            </Link>
            
          </div>
        </div>
      </section>

      {/* Photo Section */}
      <section className="min-h-screen py-20 bg-indigo-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/assets/img/avatar.png" // put your photo in public/me.jpg
            alt="My Photo"
            width={400}
            height={400}
            className="mx-auto rounded-full border-4 border-white shadow-lg"
          />
          <h2 className="text-3xl font-bold mt-6">こんにちは！</h2>
          <p>
            名前: ヘンドラ<br />
            年齢：26歳<br />
            職業：株式会社アイプラス業務委託エンジニア
          </p>
        </div>
      </section>

      {/* About Me */}
      <section className="min-h-screen py-20">
        <div className="max-w-3xl mx-auto ">
          <h2 className="text-3xl font-bold mb-4 text-center">自己紹介</h2>
          <p className="text-lg text-gray-200">
            はじめまして。<br />
            <br />
            開発は単なる作業ではなく、一つの芸術です。<br />
            私にとって、それは心を込めて創り上げる創作活動のようなもの。<br />
            私のコードは、ただ動くだけのものではなく、貴社のビジョンを具現化し、<br />
            未来へとつながる確かな道を築くものです。<br />
            <br />
            最先端のAI技術と堅実なシステム開発の両立を強みとするフルスタックエンジニアです。<br />
            自然言語処理・画像解析・機械学習モデルの構築から、<br />
            業務効率化ツールやWebアプリケーションの開発、API設計、<br />
            データ基盤構築まで、幅広い分野に対応しています。<br />
            <br />
            これまでに、WordPressと銀行決済を組み合わせたシステム、<br />
            美容マッチングサービス、ポケモンをテーマとしたWordPressゲーム紹介サイトなど、<br />
            多様な開発案件を成功裏にリリースしております。<br />
            <br />
            さらに、生成AI（ChatGPT APIや各種LLM）やクラウドサービス（ConoHa、さくらVPS、<br />
            AWS EC2）を用いたソリューション提案・開発にも精通しています。<br />
            <br />
            私たちは「技術ありき」ではなく、<br />
            お客様のビジネスゴールを見据えたシステム提案・改善を強みとしており、<br />
            個人開発からチーム開発まで柔軟に対応可能です。短期的な成果はもちろん、<br />
            長期的なパートナーシップの構築を大切にしています。<br />
            <br />
            【主なスキル・技術スタック】<br />
            <br />
            AI開発：画像処理、生成AI<br />
            <br />
            Web開発：WordPress、Shopify、Three.js、GSAP<br />
            <br />
            デザイン：figma , photoshop , イラスト制作、Webアニメーション<br />
            <br />
            フロントエンド：React、Next.js、Vue.js、Nuxt、Nest.js、React Native、Flutter<br />
            <br />
            バックエンド：JavaScript、Python、Node.js、Express、Laravel、Java<br />
            <br />
            その他：Git、Docker、OpenAI API、Notion API など<br />
            <br />
            【最後の一言】<br />
            <br />
            技術だけではなく「人」としての信頼関係を大切にしています。<br />
            安心してお任せいただけるパートナーとして、<br />
            共に未来を切り拓いていければと願っております。

          </p>
        </div>
      </section>

      {/* Programming Languages */}
      <section className="min-h-screen py-28">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">学歴</h2>
          <ul className="space-y-4">
            <li className="bg-white/10 p-4 rounded-lg text-center">
              <h3 className="text-xl font-semibold ">セベラス・マレット大学大学 – コンピュータサイエンス学部</h3>
              <p className="text-gray-200">2017 - 2021</p>
            </li>
          </ul>
        </div>
            <SkillSection />
      </section>
    </main>
  )
}
