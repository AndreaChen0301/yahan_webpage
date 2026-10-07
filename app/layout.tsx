import type { Metadata } from "next";
import "./globals.css";

const title = "Yahan Chen | Data Scientist & Biostatistician";
const description = "Data science, biostatistics, healthcare analytics, NLP, and research by Yahan Chen.";

export const metadata: Metadata = {
  metadataBase: new URL("https://AndreaChen0301.github.io/yahan_webpage/"),
  title,
  description,
  icons: { icon: "/yahan_webpage/favicon.svg", shortcut: "/yahan_webpage/favicon.svg" },
  openGraph: { title, description, type: "website", images: [{ url: "/yahan_webpage/og.png", width: 1536, height: 804 }] },
  twitter: { card: "summary_large_image", title, description, images: ["/yahan_webpage/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
