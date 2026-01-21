<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import ArticleLayout from '$lib/layouts/ArticleLayout.svelte';
  import ArticleEn from './sacred-service-en.md';
  import ArticleSv from './sacred-service-sv.md';

  $: currentLanguage = $language;
  $: Article = currentLanguage === 'en' ? ArticleEn : ArticleSv;
  $: metadata = currentLanguage === 'en' ?
  {
    title: "Sacred Service",
    subtitle: "Action that arises from being, not obligation",
    description: "How do we act in a hurting world when 'being is enough'? The answer isn't choosing between acceptance and action—it's discovering how true service flows naturally from presence.",
    author: "Björn Kenneth Holmström",
    date: "2025-11-21",
    category: "Being Human",
    keywords: "sacred activism, service, action, being, obligation, meaning, purpose, burnout, twig insight"
  } : {
    title: "Helig tjänst",
    subtitle: "Handling som uppstår från vara, inte plikt",
    description: "Hur agerar vi i en värld som gör ont när 'att vara är tillräckligt'? Svaret är inte att välja mellan acceptans och handling – det är att upptäcka hur sann tjänst flödar naturligt från närvaro.",
    author: "Björn Kenneth Holmström",
    date: "2025-11-21",
    category: "Att vara människa",
    keywords: "helig aktivism, tjänst, handling, vara, plikt, mening, syfte, utbrändhet, kvist-insikt"
  };
</script>

<ArticleLayout {...metadata}>
  <svelte:component this={Article} />
</ArticleLayout>
