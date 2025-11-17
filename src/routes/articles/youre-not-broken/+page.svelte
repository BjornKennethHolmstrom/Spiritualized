<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import ArticleLayout from '$lib/layouts/ArticleLayout.svelte';
  import ArticleEn from './youre-not-broken-youre-just-here-en.md';
  import ArticleSv from './youre-not-broken-youre-just-here-sv.md';

  $: currentLanguage = $language;
  $: Article = currentLanguage === 'en' ? ArticleEn : ArticleSv;
  
  // Article metadata (from frontmatter)
  $: metadata = currentLanguage === 'en' ? {
    title: "You're Not Broken (You're Just Here)",
    subtitle: "De-pathologizing sensitivity and overwhelm",
    description: "For those who feel 'too sensitive' for this world—understanding that your overwhelm is not a flaw, but an appropriate response to what is.",
    author: "Björn Kenneth Holmström",
    date: "2025-11-17",
    category: "The Great Permission",
    keywords: "sensitivity, overwhelm, HSP, empathy, broken, pathology, depression, anxiety, permission, being"
  } : {
    title: "Du är inte trasig (du är bara här)",
    subtitle: "Avpatologisera känslighet och överväldigande",
    description: "För dem som känner sig 'för känsliga' för den här världen—att förstå att din överväldigande känsla inte är en brist, utan ett lämpligt svar på det som är.",
    author: "Björn Kenneth Holmström",
    date: "2025-11-17",
    category: "Den stora tillåtelsen",
    keywords: "känslighet, överväldigande, HSP, empati, trasig, patologi, depression, ångest, tillåtelse, varande"
  };
</script>

<ArticleLayout {...metadata}>
  <svelte:component this={Article} />
</ArticleLayout>
