<script lang="ts">
  import { fade } from 'svelte/transition';
  import { t } from '$lib/stores/languageStore';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';

  $: currentLanguage = globalThis.language;
  $: seoTitle =
    currentLanguage === 'en'
      ? 'Spiritualized - Being is the Path'
      : 'Spiritualized - Varandet är vägen';
  $: seoDescription =
    currentLanguage === 'en'
      ? "A quiet refuge to explore spirituality as 'being,' not 'doing.' Offers permission to rest and heal."
      : 'En stilla fristad för att utforska andlighet som ’varande,’ inte ’görande.’ Erbjuder tillåtelse att vila och hela.';
</script>

<SEO
  title={seoTitle}
  description={seoDescription}
  keywords="spirituality, spiritual development, being, presence, non-duality, meditation, self-healing, depression, anxiety, purpose, meaning"
  type="website"
/>

<svelte:head>
  <title>{$t.home.title} | {$t.home.subtitle}</title>
  <meta name="description" content={$t.home.intro} />
</svelte:head>

<div class="max-w-4xl mx-auto px-4 py-20" in:fade>
  <header class="text-center mb-16">
    <div class="flex justify-center mb-8">
      <img
        src="{base}/logo.svg"
        alt="Spiritualized logo"
        class="w-32 h-32 md:w-40 md:h-40 opacity-90"
      />
    </div>

    <h1 class="text-5xl font-light mb-4 text-primary-700 dark:text-primary-300">
      {$t.home.title}
    </h1>

    <p class="text-xl font-light text-neutral-600 dark:text-neutral-400">
      {$t.home.subtitle}
    </p>
  </header>

  <div class="prose-custom mx-auto">
    <p class="text-lg leading-relaxed">
      {$t.home.intro}
    </p>

    <p class="text-lg leading-relaxed mt-6">
      {$t.home.description}
    </p>

    <div class="mt-12 text-center">
      <p class="text-sm text-neutral-500 dark:text-neutral-400 italic">
        {$t.home.invitation}
      </p>
    </div>
  </div>
</div>
