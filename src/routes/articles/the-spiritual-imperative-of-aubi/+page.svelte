<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import ArticleLayout from '$lib/layouts/ArticleLayout.svelte';
  
  import ArticleEn from './the-spiritual-imperative-of-aubi-en.md';
  import ArticleSv from './the-spiritual-imperative-of-aubi-sv.md';

  $: currentLanguage = $language;
  $: Article = currentLanguage === 'en' ? ArticleEn : ArticleSv;
  
  // Article metadata (from frontmatter)
  $: metadata = currentLanguage === 'en' ? {
    title: "The Spiritual Imperative of AUBI",
    subtitle: "Why basic income is about being, not just economics",
    description: "Our society is built on the premise that our worth is conditional on our productivity. AUBI isn't a political policy—it's a structural form of 'The Great Permission.'",
    author: "Björn Kenneth Holmström",
    date: "2025-11-14",
    category: "Being Together",
    keywords: "AUBI, universal basic income, being, worth, productivity, the great permission, spiritualized, economic anxiety"
  } : {
    title: "Det andliga imperativet för AUBI",
    subtitle: "Varför basinkomst handlar om att vara, inte bara ekonomi",
    description: "Vårt samhälle bygger på premissen att vårt värde är villkorat av vår produktivitet. AUBI är inte en politisk policy – det är en strukturell form av 'Den stora tillåtelsen.'",
    author: "Björn Kenneth Holmström",
    date: "2025-11-14",
    category: "Vara tillsammans",
    keywords: "AUBI, basinkomst, medborgarlön, varande, värde, produktivitet, den stora tillåtelsen, spiritualized, ekonomisk ångest"
  };
</script>

<ArticleLayout {...metadata}>
  <svelte:component this={Article} />
</ArticleLayout>
