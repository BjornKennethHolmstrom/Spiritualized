<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import ArticleLayout from '$lib/layouts/ArticleLayout.svelte';
  import ArticleEn from './the-depressed-mystic-en.md';
  import ArticleSv from './the-depressed-mystic-sv.md';

  $: currentLanguage = $language;
  $: Article = currentLanguage === 'en' ? ArticleEn : ArticleSv;
  
  // Article metadata (from frontmatter)
  $: metadata = currentLanguage === 'en' ? {
    title: "The Depressed Mystic",
    subtitle: "Finding spirituality when you can't get out of bed",
    description: "For those who feel like spiritual failures because depression has stolen their ability to 'do' practices—a reframing of spirituality as permission to simply be.",
    author: "Björn Kenneth Holmström",
    date: "2024-01-15",
    category: "The Great Permission",
    keywords: "depression, spirituality, meditation, being, permission, dark night of the soul"
  } : {
    title: "Den deprimerade mystikern",
    subtitle: "Att finna andlighet när du inte kan lämna sängen",
    description: "För dem som känner sig som andliga misslyckanden eftersom depression har stulit deras förmåga att 'göra' praktiker—en omramning av andlighet som tillåtelse att bara vara.",
    author: "Björn Kenneth Holmström",
    date: "2024-01-15",
    category: "Den stora tillåtelsen",
    keywords: "depression, andlighet, meditation, varande, tillåtelse, själens mörka natt"
  };
</script>

<ArticleLayout {...metadata}>
  <svelte:component this={Article} />
</ArticleLayout>
