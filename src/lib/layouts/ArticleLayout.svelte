<script lang="ts">
  import { fade } from 'svelte/transition';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';
  import ShareButtons from '$lib/components/ShareButtons.svelte';

  // Props that can be set in the article frontmatter
  export let title = '';
  export let subtitle = '';
  export let description = '';
  export let author = 'Björn Kenneth Holmström';
  export let date = '';
  export let readingTime = '';
  export let category = '';
  export let keywords = '';
</script>

<SEO 
  {title}
  {description}
  {keywords}
  type="article"
  {author}
  publishedTime={date}
/>

<svelte:head>
  <title>{title} | Spiritualized</title>
  <meta name="description" content={description}>
</svelte:head>

<article class="min-h-screen" in:fade>
  <div class="mx-auto px-4 py-16">
    
    <!-- Article Header -->
    <header class="mb-12 text-center max-w-3xl mx-auto">
      {#if category}
        <div class="mb-4">
          <span class="inline-block px-4 py-1 text-sm font-medium bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 rounded-full">
            {category}
          </span>
        </div>
      {/if}
      
      <h1 class="text-4xl md:text-5xl font-light mb-4 text-primary-700 dark:text-primary-300">
        {title}
      </h1>
      
      {#if subtitle}
        <p class="text-xl text-neutral-600 dark:text-neutral-400 font-light mb-6">
          {subtitle}
        </p>
      {/if}
      
      <div class="flex flex-wrap justify-center items-center gap-4 text-sm text-neutral-500 dark:text-neutral-400">
        {#if author}
          <span>{author}</span>
        {/if}
        {#if date}
          <span>•</span>
          <time datetime={date}>{date}</time>
        {/if}
        {#if readingTime}
          <span>•</span>
          <span>{readingTime}</span>
        {/if}
      </div>
    </header>

    <!-- Article Content -->
    <div class="prose-custom max-w-4xl mx-auto">
      <slot />
    </div>

    <!-- Article Footer -->
    <footer class="mt-16 pt-8 border-t border-neutral-300 dark:border-slate-700 max-w-3xl mx-auto">
      
      <!-- Share Buttons -->
      <ShareButtons {title} {description} />
      
      <!-- Author Note -->
      <div class="mt-8 p-6 bg-neutral-50 dark:bg-slate-800 rounded-lg border border-primary-200 dark:border-primary-800">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 flex-shrink-0 flex items-center justify-center">
            <img 
              src="{base}/logo.svg" 
              alt="Spiritualized logo" 
              class="w-full h-full opacity-80"
            />
          </div>
          <div class="flex-1">
            <p class="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              This article is part of <strong>Spiritualized</strong>, a refuge for exploring spirituality as 'being.' 
              If these words resonated with you, you're welcome to explore more or 
              <a href="{base}/contact" class="text-primary-600 dark:text-primary-400 hover:underline">reach out</a>.
            </p>
          </div>
        </div>
      </div>

      <!-- Back to Explore -->
      <div class="mt-8 text-center">
        <a 
          href="{base}/explore"
          class="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 font-medium transition-colors"
        >
          ← Back to explore
        </a>
      </div>
    </footer>
  </div>
</article>
