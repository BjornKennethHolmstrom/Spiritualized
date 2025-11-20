<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import ArticleLayout from '$lib/layouts/ArticleLayout.svelte';
  import ArticleEn from './common-loops-the-mind-creates-en.md';
  import ArticleSv from './common-loops-the-mind-creates-sv.md';

  $: currentLanguage = $language;
  $: Article = currentLanguage === 'en' ? ArticleEn : ArticleSv;
  
  // Article metadata (from frontmatter)
  $: metadata = currentLanguage === 'en' ? {
    title: "Common Loops the Mind Creates",
    subtitle: "Working with (not against) mental patterns",
    description: "The spiritual path isn't about never getting stuck—it's about recognizing the familiar grooves our minds fall into, and meeting them with curiosity instead of shame.",
    author: "Björn Kenneth Holmström",
    date: "2025-11-20",
    category: "Ways to Notice",
    keywords: "mental patterns, thinking traps, spiritual perfectionism, spiritual bypassing, self-compassion, noticing, awareness"
  } : {
    title: "Vanliga loopar sinnet skapar",
    subtitle: "Att arbeta med (inte emot) mentala mönster",
    description: "Den andliga vägen handlar inte om att aldrig fastna—det handlar om att känna igen de bekanta spår våra sinnen faller in i, och möta dem med nyfikenhet istället för skam.",
    author: "Björn Kenneth Holmström",
    date: "2025-11-20",
    category: "Sätt att märka",
    keywords: "mentala mönster, tankefällor, andlig perfektionism, andlig förbigående, självmedkänsla, märkande, medvetenhet"
  };
</script>

<ArticleLayout {...metadata}>
  <svelte:component this={Article} />
</ArticleLayout>
