import type { Metadata, Viewport } from "next";
import { Inter, Outfit, Urbanist } from "next/font/google";
import { site } from "@/content";
import "./globals.css";

const urbanist = Urbanist({ variable: "--font-urbanist", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const outfit = Outfit({ variable: "--font-outfit", subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Foco no POCUS | Curso de Ultrassom à Beira do Leito no Rio de Janeiro",
    template: "%s | Foco no POCUS",
  },
  description: site.description,
  keywords: [
    "curso POCUS",
    "ultrassom à beira do leito",
    "acesso vascular guiado por ultrassom",
    "curso de ultrassom Rio de Janeiro",
    "POCUS multissistêmico",
    "VExUS",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.name,
    title: "Foco no POCUS | Domine o Ultrassom à Beira do Leito",
    description: site.description,
    images: [{ url: "/img/og-equipe.jpg", width: 1200, height: 630, alt: "Equipe Foco no POCUS" }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#183556",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${urbanist.variable} ${inter.variable} ${outfit.variable} antialiased`}>
      <body className="flex min-h-svh flex-col">{children}</body>
    </html>
  );
}
