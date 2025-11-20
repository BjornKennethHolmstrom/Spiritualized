<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import ArticleLayout from '$lib/layouts/ArticleLayout.svelte';
  import ArticleEn from './the-isness-that-is-always-here-en.md';
  import ArticleSv from './the-isness-that-is-always-here-sv.md';

  $: currentLanguage = $language;
  $: Article = currentLanguage === 'en' ? ArticleEn : ArticleSv;
  
  // Article metadata (from frontmatter)
  $: metadata = currentLanguage === 'en' ? {
    title: "The 'Isness' That Is Always Here",
    subtitle: "What we mean by being",
    description: "The most fundamental spiritual insight is also the simplest: You already are what you're looking for. This isn't a metaphor or a distant goal—it's the felt reality of this moment.",
    author: "Björn Kenneth Holmström",
    date: "2025-11-20",
    category: "The Core Insight",
    keywords: "being, isness, presence, existence, awareness, now, spirituality, foundation"
  } : {
    title: "Det 'varande' som alltid är här",
    subtitle: "Vad vi menar med att vara",
    description: "Den mest grundläggande andliga insikten är också den enklaste: Du är redan det du letar efter. Det här är inte en metafor eller ett avlägset mål—det är den kända verkligheten i detta ögonblick.",
    author: "Björn Kenneth Holmström",
    date: "2025-11-20",
    category: "Kärninsikten",
    keywords: "varande, existens, närvaro, medvetande, nu, andlighet, grund"
  };
</script>

<ArticleLayout {...metadata}>
  <svelte:component this={Article} />
</ArticleLayout>
