import type { Metadata } from "next";
import "./globals.css";

const title = "Yahan Chen | Data Scientist & Biostatistician";
const description = "Data science, biostatistics, healthcare analytics, NLP, and research by Yahan Chen.";

export const metadata: Metadata = {
  metadataBase: new URL("https://AndreaChen0301.github.io"),
  title,
  description,
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title, description, type: "website", images: [{ url: "/og.png", width: 1536, height: 804 }] },
  twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
