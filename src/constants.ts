import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconInstagram from "@/assets/icons/IconInstagram.svg";
import IconYoutube from "@/assets/icons/IconsYoutube.svg";
import IconTwitch from "@/assets/icons/IconsTwitch.svg";
import { SITE } from "@/config";

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const SOCIALS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/harshy_2212/",
    linkTitle: ` ${SITE.title} on Instagram`,
    icon: IconInstagram,
  },
  {
    name: "Github",
    href: "https://github.com/grenmon2202",
    linkTitle: ` ${SITE.title} on Github`,
    icon: IconGitHub,
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/@gr3nmon",
    linkTitle: ` ${SITE.title} on YouTube`,
    icon: IconYoutube,
  },
  {
    name: "Twitch",
    href: "https://twitch.tv/gr3nmon",
    linkTitle: ` ${SITE.title} on Twitch`,
    icon: IconTwitch,
  },
  {
    name: "X",
    href: "https://x.com/grenmon2202",
    linkTitle: `${SITE.title} on X`,
    icon: IconBrandX,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/harsh-meena-7699931a3/",
    linkTitle: `${SITE.title} on LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Mail",
    href: "mailto:grenmon@grenmon.xyz",
    linkTitle: `Send an email to ${SITE.title}`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;
