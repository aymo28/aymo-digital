/**
 * AYMO DIGITAL — Centralized brand configuration.
 * All site-wide brand constants live here.
 * Import from this file anywhere you need brand values.
 */

export const BRAND = {
  /** Legal / display company name */
  name: "AYMO DIGITAL",

  /** Short tagline used in meta descriptions and sub-headings */
  tagline: "Digital Ecosystems for Ambitious Businesses",

  /** Canonical production origin — no trailing slash */
  url: "https://www.aymo.digital",

  /** Absolute path to the main logo file served from /public */
  logo: "https://www.aymo.digital/logo.png",

  /** Default OG / Twitter card image */
  ogImage: "https://www.aymo.digital/logo.png",

  /** Contact details */
  contact: {
    emailGeneral: "info@aymo.digital",
    emailSupport: "support@aymo.digital",

    phonePK: "+923173712950",
    phonePKDisplay: "+92 317 371 2950",

    phoneUK: "+447717229638",
    phoneUKDisplay: "+44 771 722 9638",
  },

  /** Office addresses */
  addresses: [
    {
      label: "Islamabad HQ",
      street: "Office, 6th Road, Techno City, Blue Area",
      city: "Islamabad",
      country: "PK",
    },
    {
      label: "Rawat Technology Park",
      street: "Rawat Technology Park",
      city: "Rawat",
      country: "PK",
    },
  ],

  /** Founders — used in JSON-LD structured data */
  founders: [
    { name: "Moez Rehman", title: "Founder & CEO" },
    { name: "Malaika Jahangir", title: "Co-Founder & Director" },
  ],

  /** Social media profiles */
  social: {
    linkedin: "https://www.linkedin.com/company/aymodigital",
    instagram: "https://www.instagram.com/aymo.digital",
    facebook: "https://www.facebook.com/aymo.digital",
    twitter: "https://twitter.com/aymodigital",
  },

  /** Portal name suffixes for <title> tags */
  portals: {
    client: "AYMO DIGITAL Client Portal",
    staff: "AYMO DIGITAL Team Portal",
    admin: "AYMO DIGITAL Admin",
    department: "AYMO DIGITAL Department Portal",
  },
} as const;

/** Convenience re-exports matching legacy src/lib/site.ts API so existing imports keep working */
export const SITE_URL = BRAND.url;
export const SITE_NAME = BRAND.name;
export const SITE_LOGO = BRAND.logo;
export const SITE_OG_IMAGE = BRAND.ogImage;
export const PHONE_PK = BRAND.contact.phonePK;
export const PHONE_UK = BRAND.contact.phoneUK;
export const PHONE_PK_DISPLAY = BRAND.contact.phonePKDisplay;
export const PHONE_UK_DISPLAY = BRAND.contact.phoneUKDisplay;
export const EMAIL = BRAND.contact.emailGeneral;

/** Build an absolute URL from an app path. */
export function abs(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${BRAND.url}${path.startsWith("/") ? path : `/${path}`}`;
}

/** BreadcrumbList JSON-LD helper. */
export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}
