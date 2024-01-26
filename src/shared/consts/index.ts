import { createSharedPathnamesNavigation } from "next-intl/navigation"
import { sharedi18n } from "../i18n"
export const localePrefix = "always" // Default

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales: sharedi18n.locales, localePrefix })

type SocialNav = {
  label: string;
  href: string;
};

type SharedSocialNav = {
  facebook: SocialNav;
  instagram: SocialNav;
  telegram: SocialNav;
  whatsapp: SocialNav;
};

export const sharedSocialNav: SharedSocialNav = {
  facebook: {
    label: "FB",
    href: "http://facebook.com/goodfood.tbilisi",
  },
  instagram: {
    label: "IG",
    href: "https://www.instagram.com/goodfoodge/",
  },
  telegram: {
    label: "TG",
    href: "https://t.me/goodfoodge",
  },
  whatsapp: {
    label: "WA",
    href: "http://wa.me/995599885710",
  },
}

export const sharedSocialNavArray = Object.keys(sharedSocialNav).map((key) => ({
  name: key,
  label: sharedSocialNav[key as keyof SharedSocialNav].label,
  href: sharedSocialNav[key as keyof SharedSocialNav].href,
}));