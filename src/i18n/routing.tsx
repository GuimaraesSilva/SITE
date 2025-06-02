import { defineRouting } from "next-intl/routing";

export const routeKeys = {
  home: "/",
  lastNews: "/last-news",
  legislation: "/category/legislacion",
  online: "/category/online",
  lottery: "/category/loteria",
  casino: "/category/casino",
  otherEvents: "/otros",
  events: "/evento",
  // Rotas para "Outros temas"
  cobevent: "/category/cobertura-de-eventos",
  nextEvents: "/others/next-events",
  // Rotas para "Eventos"
  bet: "/category/apuesta-desportiva",
  podcast: "/category/podcast",
  affiliates: "/category/afiliados",
  columnists: "/category/columnistas",
  poker: "/category/poker",
  awards: "/category/premio",
  turf: "/category/turfe",
  entrevista: "/category/entrevista",
  slug: "/others/evento/[slug]",
  about: "/about",
  contact: "/contact",
};

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  pathnames: {
    [routeKeys.home]: "/",
    [routeKeys.lastNews]: {
      es: "/ultimas-noticias",
      en: "/latest-news",
    },
    [routeKeys.legislation]: {
      es: "/categoria/legislacion",
      en: "/category/legislation",
    },
    [routeKeys.online]: {
      es: "/categoria/online",
      en: "/category/online",
    },
    [routeKeys.lottery]: {
      es: "/categoria/loteria",
      en: "/category/lottery",
    },
    [routeKeys.casino]: {
      es: "/categoria/casino",
      en: "/category/casino",
    },
    [routeKeys.otherEvents]: {
      es: "/otros",
      en: "/other",
    },
    [routeKeys.events]: {
      es: "/evento",
      en: "/events",
    },
    // Rotas para "Outros temas"
    [routeKeys.cobevent]: {
      es: "/categoria/cobertura-de-eventos",
      en: "/category/events-coverage",
    },
    [routeKeys.nextEvents]: {
      es: "/otros/proximos-eventos",
      en: "/others/next-events",
    },
    [routeKeys.slug]: {
      es: "/evento/[slug]",
      en: "/event/[slug]",
    },

    // Rotas para "Eventos"
    [routeKeys.bet]: {
      es: "/categoria/apuestas-desportivas",
      en: "/category/sports-betting",
    },
    [routeKeys.podcast]: {
      es: "/categoria/podcast",
      en: "/category/podcast",
    },
    [routeKeys.affiliates]: {
      es: "/categoria/afiliados",
      en: "/category/affiliates",
    },
    [routeKeys.columnists]: {
      es: "/categoria/columnistas",
      en: "/category/columnists",
    },
    [routeKeys.poker]: {
      es: "/categoria/poker",
      en: "/category/poker",
    },
    [routeKeys.awards]: {
      es: "/categoria/premiacion",
      en: "/category/awards",
    },
    [routeKeys.turf]: {
      es: "/categoria/turfe",
      en: "/category/turf",
    },
    [routeKeys.entrevista]: {
      es: "/categoria/entrevista",
      en: "/category/interview",
    },
    [routeKeys.about]: {
      es: "/quienes-somos",
      en: "/about",
    },
    [routeKeys.contact]: {
      es: "/contactanos",
      en: "/contact",
    },
  },
});
