<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { theme } from '$lib/stores/themeStore';
  import { browser } from '$app/environment';

  // Just subscribe - the store handles everything
  $: currentTheme = $theme;

  $: if (browser) {
    console.log('Layout: current theme is', currentTheme);
  }
</script>

<div
  class="min-h-screen bg-neutral-50 dark:bg-slate-900 text-neutral-800 dark:text-neutral-200"
>
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
