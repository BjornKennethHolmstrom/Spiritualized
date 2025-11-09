<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import ArticleLayout from '$lib/layouts/ArticleLayout.svelte';
  // Uppdaterade imports för den nya artikeln
  import ArticleEn from './if-being-is-enough-why-does-the-world-hurt-en.md';
  import ArticleSv from './if-being-is-enough-why-does-the-world-hurt-sv.md';

  $: currentLanguage = $language;
  $: Article = currentLanguage === 'en' ? ArticleEn : ArticleSv;
  // Uppdaterad artikelmetadata (från frontmatter)
  $: metadata = currentLanguage === 'en' ?
  {
    title: "If 'Being' is Enough, Why Does the World Hurt?",
    subtitle: "Eco-anxiety and grief as evidence of connection",
    description: "When 'being' feels impossible because the world is burning—understanding spiritual pain not as a problem to fix, but as proof of your deepest nature.",
    author: "Björn Kenneth Holmström",
    date: "2025-11-09",
    category: "Being Human",
    keywords: "eco-anxiety, grief, suffering, world pain, climate anxiety, spiritual bypass, being, connection, empathy"
  } : {
    title: "Om 'att vara' är tillräckligt, varför gör världen ont?",
    subtitle: "Eko-ångest och sorg som bevis på samhörighet",
    description: "När 'att vara' känns omöjligt för att världen brinner – att förstå andlig smärta inte som ett problem att lösa, utan som ett bevis på din djupaste natur.",
    author: "Björn Kenneth Holmström",
    date: "2025-11-09",
    category: "Att vara människa",
    keywords: "eko-ångest, sorg, lidande, världssmärta, klimatångest, andlig bypass, vara, samhörighet, empati"
  };
</script>

<ArticleLayout {...metadata}>
  <svelte:component this={Article} />
</ArticleLayout>
