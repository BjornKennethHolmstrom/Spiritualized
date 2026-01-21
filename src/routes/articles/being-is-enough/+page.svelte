<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import ArticleLayout from '$lib/layouts/ArticleLayout.svelte';
  import ArticleEn from './being-is-enough-en.md';
  import ArticleSv from './being-is-enough-sv.md'; // You'll need to create this

  $: currentLanguage = $language;
  $: Article = currentLanguage === 'en' ? ArticleEn : ArticleSv;
  $: metadata = currentLanguage === 'en' ?
  {
    title: "Being is Enough",
    subtitle: "Worth beyond productivity",
    description: "The deepest spiritual truth is also the hardest to believe: You don't have to earn your right to exist. Your worth is not measured in output. Being itself is sufficient.",
    author: "Björn Kenneth Holmström",
    date: "2025-11-21",
    category: "Being Together",
    keywords: "worth, productivity, being, value, capitalism, identity, rest, burnout, permission, existence"
  } : {
    title: "Att vara är tillräckligt",
    subtitle: "Värde bortom produktivitet",
    description: "Den djupaste andliga sanningen är också den svåraste att tro på: Du behöver inte förtjäna din rätt att existera. Ditt värde mäts inte i utdata. Att vara i sig är tillräckligt.",
    author: "Björn Kenneth Holmström",
    date: "2025-11-21",
    category: "Att vara tillsammans",
    keywords: "värde, produktivitet, vara, kapitalismen, identitet, vila, utbrändhet, tillåtelse, existens"
  };
</script>

<ArticleLayout {...metadata}>
  <svelte:component this={Article} />
</ArticleLayout>
