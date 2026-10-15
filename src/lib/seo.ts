import type { Metadata } from "next";

export const siteUrl = "https://electropatrimonio.vercel.app";

const socialImage = {
  url: "/logo.png",
  width: 1024,
  height: 1024,
  alt: "Logo de ELECTROPATRIMONIO, instalaciones eléctricas domiciliarias",
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "ELECTROPATRIMONIO",
      locale: "es_CL",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export const defaultSocialImage = socialImage;
