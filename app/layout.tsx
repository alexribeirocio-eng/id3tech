import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07111f",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "id3tech.com";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const title = "Aleksandro Ribeiro | CIO e Diretor Executivo de Tecnologia";
  const description =
    "CV virtual de Aleksandro Ribeiro, CIO e Diretor Executivo de Tecnologia com 25+ anos de carreira em varejo, omnichannel, dados, IA e cibersegurança.";
  const socialImage = new URL("/og.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title,
    description,
    keywords: [
      "Aleksandro Ribeiro",
      "Alex Ribeiro CIO",
      "CIO",
      "Diretor Executivo de Tecnologia",
      "varejo e omnichannel",
      "cybersecurity",
      "dados e inteligência artificial",
    ],
    authors: [{ name: "Aleksandro Castro Ribeiro" }],
    creator: "Aleksandro Castro Ribeiro",
    alternates: { canonical: "/" },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      type: "profile",
      locale: "pt_BR",
      url: "/",
      siteName: "Aleksandro Ribeiro — CV Virtual",
      title,
      description,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Aleksandro Ribeiro — CIO, Tecnologia, Varejo, Dados e IA",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
