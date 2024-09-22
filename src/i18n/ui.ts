export const languages: Record<string, { code: string; name: string }> = {
  es: { code: "es", name: "Español" },
  en: { code: "en", name: "English" },
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.index": "Inicio",
    "nav.rooms": "Habitaciones",
    "nav.about": "Acerca de",
    "nav.gallery": "Galería",
    "nav.experiences": "Experiencias",
  },
  en: {
    "nav.index": "Home",
    "nav.rooms": "All Rooms",
    "nav.about": "About Us",
    "nav.gallery": "Gallery",
    "nav.experiences": "Experiences",
  },
} as const;

export const routes = {
  en: {
    index: "home",
    rooms: "rooms",
    about: "about",
    gallery: "gallery",
    experiences: "experiences",
  },
  es: {
    index: "home",
    rooms: "rooms",
    about: "about",
    gallery: "gallery",
    experiences: "experiences",
  },
};
