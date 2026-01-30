import HomeClient from "./HomeClient";

export const metadata = {
  title: "Hendra | Fullstack & AI Engineer",
  description:
    "Freelance Fullstack & AI Engineer specializing in WordPress, Next.js, and AI automation.",
  openGraph: {
    title: "Hendra – Fullstack & AI Engineer",
    description: "WordPress, AI automation, SaaS, and system development",
    url: "https://portfolio-hendras-projects.vercel.app",
    siteName: "ポートフォリオ",
    images: [
      {
        url: "/assets/img/top02_3_bg.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function Page() {
  return <HomeClient />;
}
