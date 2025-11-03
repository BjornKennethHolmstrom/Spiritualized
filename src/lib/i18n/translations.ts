// src/lib/stores/translations.ts

export type Language = 'en' | 'sv';

export interface Translations {
  nav: {
    home: string;
    explore: string; // Changed from 'guides'
    about: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
    intro: string;
    description: string;
    invitation: string; // Changed from 'sectionsComplete'
  };
  explore: { // Changed from 'guides'
    thePermission: string;
    theInsight: string;
    theNoticing: string;
    theHuman: string;
    theSociety: string;
  };
  common: {
    readMore: string;
    previous: string;
    next: string;
    tableOfContents: string;
    loading: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      explore: 'Explore',
      about: 'About',
      contact: 'Contact'
    },
    home: {
      title: 'Spiritualized',
      subtitle: "Spirituality isn't something you do. It's what you are.",
      intro: "A quiet place to rest in 'isness.' This site is a refuge, offering the permission to just *be*, without any need to fix yourself or the world.",
      description: "Here, we explore 'Being' as the core of spirituality—through gentle reflections, ways to notice what's already here, and discussions on how to live with an open heart in a world that hurts.",
      invitation: 'You are welcome here, exactly as you are.'
    },
    explore: {
      thePermission: 'The Great Permission',
      theInsight: 'The Core Insight',
      theNoticing: 'Ways to Notice',
      theHuman: 'Being Human',
      theSociety: 'Being Together'
    },
    common: {
      readMore: 'Read more',
      previous: 'Previous',
      next: 'Next',
      tableOfContents: 'Table of Contents',
      loading: 'Loading...'
    }
  },
  sv: {
    nav: {
      home: 'Hem',
      explore: 'Utforska',
      about: 'Om',
      contact: 'Kontakt'
    },
    home: {
      title: 'Spiritualized',
      subtitle: 'Andlighet är inte något du gör. Det är vad du är.',
      intro: "En stilla plats att vila i 'varande.' Den här sidan är en fristad, som erbjuder tillåtelse att bara *vara*, utan något behov av att laga dig själv eller världen.",
      description: "Här utforskar vi 'Varandet' som kärnan i andlighet—genom milda reflektioner, sätt att uppmärksamma vad som redan är här, och diskussioner om hur vi kan leva med ett öppet hjärta i en värld som gör ont.",
      invitation: 'Du är välkommen hit, precis som du är.'
    },
    explore: {
      thePermission: 'Den stora tillåtelsen',
      theInsight: 'Kärninsikten',
      theNoticing: 'Sätt att uppmärksamma',
      theHuman: 'Att vara människa',
      theSociety: 'Att vara tillsammans'
    },
    common: {
      readMore: 'Läs mer',
      previous: 'Föregående',
      next: 'Nästa',
      tableOfContents: 'Innehållsförteckning',
      loading: 'Laddar...'
    }
  }
};
