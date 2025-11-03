<!-- src/lib/components/Footer.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
  import { language } from '$lib/stores/languageStore';
  $: currentLanguage = $language;

  const labels = {
    en: {
      about: 'About',
      license: 'CC BY-SA 4.0'
    },
    sv: {
      about: 'Om',
      license: 'CC BY-SA 4.0'
    }
  };
  $: t = labels[currentLanguage] || labels.en;
</script>

<footer class="border-t border-neutral-200 dark:border-slate-800 mt-20 py-8">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <p class="text-sm text-neutral-600 dark:text-neutral-400">
      <a
        href="{base}/about"
        class="hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
      >
        {t.about}
      </a>
      <span class="mx-2">•</span>
      <a
        href="https://spiralize.org"
        class="hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Spiralize
      </a>
      <span class="mx-2">•</span>
      <a
        href="https://nondualize.org"
        class="hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nondualize
      </a>
      <span class="mx-2">•</span>
      <a
        href="https://communize.org"
        class="hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Communize
      </a>
      <span class="mx-2">•</span>
      <a
        href="https://globalgovernanceframeworks.org"
        class="hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        GGF
      </a>
      <span class="mx-2">•</span>
      <a
        href="https://existencemap.org"
        class="hover:text-primary-600 dark:hover:text-primary-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        Existence Map
      </a>
      <span class="mx-2">•</span>
      <span class="text-neutral-400 dark:text-neutral-500">{t.license}</span>
    </p>
  </div>
</footer>
