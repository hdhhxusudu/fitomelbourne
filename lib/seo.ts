import type { Metadata } from "next";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_DESCRIPTION,
  getSiteUrl,
  titleTemplate,
} from "@/lib/site";

/** Default keywords for peptide research commerce (tune for your catalog). */
export const defaultKeywords = [
  "Peptides4u",
  "research peptides",
  "laboratory peptides",
  "lyophilized peptides",
  "peptide catalog",
  "research use only",
];

export function rootMetadata(): Metadata {
  const base = getSiteUrl();
  return {
    metadataBase: new URL(base),
    title: {
      default: `${SITE_NAME} · Research-grade peptides`,
      template: titleTemplate,
    },
    description: SITE_DESCRIPTION,
    applicationName: SITE_NAME,
    keywords: defaultKeywords,
    authors: [{ name: SITE_NAME }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: base,
      siteName: SITE_NAME,
      title: `${SITE_NAME} · Research-grade peptides`,
      description: SITE_OG_DESCRIPTION,
    },
    twitter: {
      card: "summary_large_image",
      title: `${SITE_NAME} · Research-grade peptides`,
      description: SITE_OG_DESCRIPTION,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    category: "science",
  };
}

/** JSON-LD for the home page: WebSite + Organization. */
export function homeJsonLdGraph(): Record<string, unknown> {
  const base = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        name: SITE_NAME,
        url: base,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${base}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: SITE_NAME,
        url: base,
        description: SITE_DESCRIPTION,
      },
    ],
  };
}
