import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "id3.tech";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const title = "Alexsandro Ribeiro | CIO e Diretor Executivo de Tecnologia";
  const description =
    "CV virtual de Alexsandro Ribeiro, CIO e Diretor Executivo de Tecnologia com 25+ anos de carreira em varejo, omnichannel, dados, IA e cibersegurança.";
  const socialImage = new URL("/og-4x3.png", baseUrl).toString();

  return {
    metadataBase: baseUrl,
    title,
    description,
    keywords: [
      "Alexsandro Ribeiro",
      "Alex Ribeiro CIO",
      "CIO",
      "Diretor Executivo de Tecnologia",
      "varejo e omnichannel",
      "cybersecurity",
      "dados e inteligência artificial",
    ],
    authors: [{ name: "Alexsandro Castro Ribeiro" }],
    creator: "Alexsandro Castro Ribeiro",
    alternates: { canonical: "/" },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      type: "profile",
      locale: "pt_BR",
      url: "/",
      siteName: "Alexsandro Ribeiro — CV Virtual",
      title,
      description,
      images: [
        {
          url: socialImage,
          width: 1448,
          height: 1086,
          alt: "Alexsandro Ribeiro — CIO, Tecnologia, Varejo, Dados e IA",
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
      <body className={`${inter.variable} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
