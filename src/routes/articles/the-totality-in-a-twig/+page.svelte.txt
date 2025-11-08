<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import ArticleLayout from '$lib/layouts/ArticleLayout.svelte';
  import ArticleEn from './the-totality-in-a-twig-en.md';
  import ArticleSv from './the-totality-in-a-twig-sv.md';

  $: currentLanguage = $language;
  $: Article = currentLanguage === 'en' ? ArticleEn : ArticleSv;
  
  // Article metadata (from frontmatter)
  $: metadata = currentLanguage === 'en' ? {
    title: "The Totality in a Twig",
    subtitle: "Why nothing is 'too small' to matter",
    description: "A profound insight about meaning, scale, and the liberation that comes from seeing the infinite in the ordinary.",
    author: "Björn Kenneth Holmström",
    date: "2024-01-15",
    category: "The Core Insight",
    keywords: "meaning, presence, scale, spirituality, being, purpose, service"
  } : {
    title: "Totaliteten i en kvist",
    subtitle: "Varför ingenting är 'för litet' för att betyda något",
    description: "En djup insikt om mening, skala och den befrielse som kommer från att se det oändliga i det vanliga.",
    author: "Björn Kenneth Holmström",
    date: "2024-01-15",
    category: "Kärninsikten",
    keywords: "mening, närvaro, skala, andlighet, varande, syfte, tjänande"
  };
</script>

<ArticleLayout {...metadata}>
  <svelte:component this={Article} />
</ArticleLayout>
