// All contact cards (Contact section, Contact window, Footer icons).
//
// HOW TO EDIT A CARD
// Each card has two fields (a card with both empty shows "Coming soon"):
//   display -> the text shown on the card
//   href    -> the link
// Examples:
//   phone:     display: "+92 300 0000000",   href: "tel:+923000000000"
//   whatsapp:  display: "Chat on WhatsApp",  href: "https://wa.me/923000000000"
//   instagram: display: "@yourname",         href: "https://instagram.com/yourname"
//   tiktok:    display: "@yourname",         href: "https://tiktok.com/@yourname"
// A card with an empty href is shown as "Coming soon" and is not clickable.

export const CONTACTS = [
  {
    id: "email",
    group: "professional",
    label: "Email",
    icon: "mail",
    display: "itsabdulsalam2@gmail.com",
    href: "mailto:itsabdulsalam2@gmail.com",
    hint: "Best for opportunities",
    tile: "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
    hover: "hover:border-cyan-400/50 hover:shadow-cyan-500/10",
  },
  {
    id: "linkedin",
    group: "professional",
    label: "LinkedIn",
    icon: "linkedin",
    display: "Connect on LinkedIn",
    href: "https://linkedin.com/in/abdul-salam-0b0759276",
    hint: "Let's connect professionally",
    tile: "border-sky-400/20 bg-sky-400/10 text-sky-300",
    hover: "hover:border-sky-400/50 hover:shadow-sky-500/10",
  },
  {
    id: "github",
    group: "professional",
    label: "GitHub",
    icon: "github",
    display: "@abdulsalamcode",
    href: "https://github.com/abdulsalamcode",
    hint: "See my code",
    tile: "border-slate-400/20 bg-slate-400/10 text-slate-200",
    hover: "hover:border-slate-400/50 hover:shadow-slate-500/10",
  },
  {
    id: "phone",
    group: "direct",
    label: "Phone",
    icon: "phone",
    display: "+92 300 1599511",
    href: "tel:+923001599511",
    hint: "Call me directly",
    tile: "border-amber-400/20 bg-amber-400/10 text-amber-300",
    hover: "hover:border-amber-400/50 hover:shadow-amber-500/10",
  },
  {
    id: "whatsapp",
    group: "direct",
    label: "WhatsApp",
    icon: "whatsapp",
    display: "Chat on WhatsApp",
    href: "https://wa.me/923001599511",
    hint: "Message me",
    tile: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    hover: "hover:border-emerald-400/50 hover:shadow-emerald-500/10",
  },
  {
    id: "instagram",
    group: "direct",
    label: "Instagram",
    icon: "instagram",
    display: "@abdul_salam511",
    href: "https://instagram.com/abdul_salam511",
    hint: "Follow along",
    tile: "border-pink-400/20 bg-pink-400/10 text-pink-300",
    hover: "hover:border-pink-400/50 hover:shadow-pink-500/10",
  },
  {
    id: "tiktok",
    group: "direct",
    label: "TikTok",
    icon: "tiktok",
    display: "@abdulsalamdev",
    href: "https://www.tiktok.com/@abdulsalamdev",
    hint: "Watch my content",
    tile: "border-fuchsia-400/20 bg-fuchsia-400/10 text-fuchsia-300",
    hover: "hover:border-fuchsia-400/50 hover:shadow-fuchsia-500/10",
  },
];

export const isLive = (contact) =>
  Boolean(contact.href && contact.display);