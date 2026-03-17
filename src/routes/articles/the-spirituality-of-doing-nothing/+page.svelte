<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import ArticleLayout from '$lib/layouts/ArticleLayout.svelte';
  
  import ArticleEn from './the-spirituality-of-doing-nothing-en.md';
  import ArticleSv from './the-spirituality-of-doing-nothing-sv.md';

  $: currentLanguage = $language;
  $: Article = currentLanguage === 'en' ? ArticleEn : ArticleSv;
  
  // Article metadata (from frontmatter)
  $: metadata = currentLanguage === 'en' ? {
    title: "The Spirituality of 'Doing Nothing'",
    subtitle: "Why rest and 'unproductive' states are sacred",
    description: "A field must lie fallow to become fertile again. A tide must go out before it can come in. So why do we treat our own stillness as a problem to solve?",
    author: "Björn Kenneth Holmström",
    date: "2025-12-05",
    category: "The Great Permission",
    keywords: "rest, doing nothing, stillness, fallow, sabbath, productivity, sacred rest, permission, being, idleness"
  } : {
    title: "Andligheten i att 'inte göra något'",
    subtitle: "Varför vila och 'improduktiva' tillstånd är heliga",
    description: "En åker måste ligga i träda för att bli bördig igen. Tidvattnet måste dra sig tillbaka innan det kan komma in. Så varför behandlar vi vår egen stillhet som ett problem att lösa?",
    author: "Björn Kenneth Holmström",
    date: "2025-12-05",
    category: "Den stora tillåtelsen",
    keywords: "vila, göra ingenting, stillhet, träda, sabbat, produktivitet, helig vila, tillåtelse, varande, sysslolöshet"
  };
</script>

<ArticleLayout {...metadata}>
  <svelte:component this={Article} />
</ArticleLayout>
