<script lang="ts">
  import { fade } from 'svelte/transition';
  import { language } from '$lib/stores/languageStore';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';

  $: currentLanguage = $language;

  const translations = {
    en: {
      title: "Your message has been received",
      subtitle: "Thank you for reaching out",
      message: "Your words have arrived safely and are held with care. I read every message personally and will respond as soon as I'm able.",
      blessing: "May you find peace while you wait.",
      signature: "— Björn Kenneth Holmström",
      role: "Creator of Spiritualized",
      responseTime: "Typical response time: 2-5 days",
      backHome: "Return home",
      backToContact: "Send another message",
      explore: "Explore the site"
    },
    sv: {
      title: "Ditt meddelande har tagits emot",
      subtitle: "Tack för att du hörde av dig",
      message: "Dina ord har anlänt säkert och hålls med omsorg. Jag läser varje meddelande personligen och svarar så snart jag kan.",
      blessing: "Må du finna ro medan du väntar.",
      signature: "— Björn Kenneth Holmström",
      role: "Skapare av Spiritualized",
      responseTime: "Vanlig svarstid: 2-5 dagar",
      backHome: "Återvänd hem",
      backToContact: "Skicka ett nytt meddelande",
      explore: "Utforska sajten"
    }
  };

  $: t = translations[currentLanguage];
  
  $: seoTitle = currentLanguage === 'en'
    ? 'Thank You | Spiritualized'
    : 'Tack | Spiritualized';
    
  $: seoDescription = currentLanguage === 'en'
    ? 'Your message has been received and will be read with care.'
    : 'Ditt meddelande har tagits emot och kommer läsas med omsorg.';
</script>

<SEO 
  title={seoTitle}
  description={seoDescription}
  type="website"
/>

<svelte:head>
  <title>{seoTitle}</title>
  <meta name="description" content={seoDescription}>
</svelte:head>

<div class="min-h-screen flex items-center justify-center px-4" in:fade>
  <div class="max-w-2xl w-full">
    <!-- Card with gradient background -->
    <div class="bg-gradient-to-br from-primary-500 to-secondary-500 dark:from-primary-700 dark:to-secondary-700 rounded-2xl text-neutral-50 text-center px-8 py-16 shadow-2xl">
      
      <!-- Flame icon -->
      <div class="flex justify-center mb-8">
        <div class="w-24 h-24 flex items-center justify-center">
          <img 
            src="{base}/logo.svg" 
            alt="Spiritualized logo" 
            class="w-full h-full opacity-90 brightness-0 invert"
          />
        </div>
      </div>

      <!-- Main message -->
      <h1 class="text-3xl md:text-4xl font-light mb-4">
        {t.title}
      </h1>
      
      <p class="text-xl md:text-2xl font-light mb-8 opacity-90">
        {t.subtitle}
      </p>
      
      <div class="max-w-lg mx-auto mb-8 space-y-4">
        <p class="text-lg leading-relaxed opacity-90">
          {t.message}
        </p>
        
        <p class="text-lg italic font-light opacity-80">
          {t.blessing}
        </p>
      </div>

      <!-- Signature -->
      <div class="mb-6">
        <p class="text-lg font-light opacity-90">
          {t.signature}
        </p>
        <p class="text-sm opacity-75">
          {t.role}
        </p>
      </div>

      <!-- Response time note -->
      <p class="text-sm opacity-75 mb-8">
        {t.responseTime}
      </p>

      <!-- Action buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="{base}/"
          class="inline-block bg-white text-primary-700 px-8 py-3 rounded-lg font-medium hover:bg-neutral-50 transition-colors shadow-md"
        >
          {t.backHome}
        </a>
        <a 
          href="{base}/explore"
          class="inline-block bg-primary-600/50 dark:bg-primary-800/50 backdrop-blur text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700/60 dark:hover:bg-primary-700/60 transition-colors"
        >
          {t.explore}
        </a>
        <a 
          href="{base}/contact"
          class="inline-block bg-primary-600/50 dark:bg-primary-800/50 backdrop-blur text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700/60 dark:hover:bg-primary-700/60 transition-colors"
        >
          {t.backToContact}
        </a>
      </div>
    </div>

    <!-- Soft glow effect underneath -->
    <div class="mt-8 text-center">
      <p class="text-sm text-neutral-500 dark:text-neutral-400 italic">
        {currentLanguage === 'en' 
          ? 'You are held with care'
          : 'Du hålls med omsorg'}
      </p>
    </div>
  </div>
</div>
