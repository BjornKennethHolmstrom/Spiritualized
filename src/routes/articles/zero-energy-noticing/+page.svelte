<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import ArticleLayout from '$lib/layouts/ArticleLayout.svelte';
  
  import ArticleEn from './zero-energy-noticing-en.md';
  import ArticleSv from './zero-energy-noticing-sv.md';

  $: currentLanguage = $language;
  $: Article = currentLanguage === 'en' ? ArticleEn : ArticleSv;

  $: metadata = currentLanguage === 'en' ?
  {
    title: "Zero-Energy Noticing",
    subtitle: "For when you're too tired to 'do' anything",
    description: "A gentle guide to spirituality when you have no energy—reframing rest and incapacity as a profound part of the path.",
    author: "Björn Kenneth Holmström",
    date: "2025-11-08",
    category: "Ways to Notice", // Updated category
    keywords: "zero-energy, noticing, presence, depression, burnout, incapacity, being, rest, meditation" // Updated keywords
  } : {
    title: "Nollenergi-uppmärksammande", // Swedish translation
    subtitle: "När du är för trött för att 'göra' någonting", // Swedish translation
    description: "En mild guide till andlighet när du inte har någon energi – att omforma vila och oförmåga till en djup del av vägen.", // Swedish translation
    author: "Björn Kenneth Holmström",
    date: "2025-11-08",
    category: "Sätt att uppmärksamma", // Updated category (Swedish)
    keywords: "nollenergi, uppmärksamma, närvaro, depression, utbrändhet, oförmåga, varande, vila, meditation" // Updated keywords (Swedish)
  };
</script>

<ArticleLayout {...metadata}>
  <svelte:component this={Article} />
</ArticleLayout>
