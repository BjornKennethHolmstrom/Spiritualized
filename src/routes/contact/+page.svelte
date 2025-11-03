<script lang="ts">
  import { fade } from 'svelte/transition';
  import { language } from '$lib/stores/languageStore';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';

  $: currentLanguage = $language;

  const translations = {
    en: {
      title: "Get in touch",
      subtitle: "Your message is welcome here",
      intro: "Whether you have a question, want to share your experience, or simply need someone to listen—this space is open to you.",
      form: {
        name: "Your name",
        namePlaceholder: "How should I address you?",
        email: "Your email",
        emailPlaceholder: "Where can I reach you?",
        message: "Your message",
        messagePlaceholder: "Share what's on your heart...",
        submit: "Send message",
        sending: "Sending..."
      },
      note: {
        title: "A gentle note",
        text: "I read every message personally. While I may not be able to respond to everyone immediately, please know that your words matter and are held with care.",
        responseTime: "Typical response time: 2-5 days"
      },
      otherWays: {
        title: "Other ways to connect",
        blog: {
          title: "Personal blog",
          description: "Read more of my thoughts and journey"
        },
        sites: {
          title: "Sister sites",
          description: "Explore the broader ecosystem"
        }
      }
    },
    sv: {
      title: "Hör av dig",
      subtitle: "Ditt meddelande är välkommet här",
      intro: "Oavsett om du har en fråga, vill dela din upplevelse, eller helt enkelt behöver någon som lyssnar—detta utrymme är öppet för dig.",
      form: {
        name: "Ditt namn",
        namePlaceholder: "Hur ska jag tilltala dig?",
        email: "Din e-post",
        emailPlaceholder: "Var kan jag nå dig?",
        message: "Ditt meddelande",
        messagePlaceholder: "Dela vad som finns i ditt hjärta...",
        submit: "Skicka meddelande",
        sending: "Skickar..."
      },
      note: {
        title: "En mild notering",
        text: "Jag läser varje meddelande personligen. Även om jag kanske inte kan svara alla omedelbart, vet att dina ord betyder något och hålls med omsorg.",
        responseTime: "Vanlig svarstid: 2-5 dagar"
      },
      otherWays: {
        title: "Andra sätt att koppla samman",
        blog: {
          title: "Personlig blogg",
          description: "Läs mer om mina tankar och resa"
        },
        sites: {
          title: "Systersajter",
          description: "Utforska det bredare ekosystemet"
        }
      }
    }
  };

  $: t = translations[currentLanguage];
  
  $: seoTitle = currentLanguage === 'en'
    ? 'Contact | Spiritualized'
    : 'Kontakt | Spiritualized';
    
  $: seoDescription = currentLanguage === 'en'
    ? 'Reach out to share your experience, ask questions, or simply connect. Every message is held with care.'
    : 'Hör av dig för att dela din upplevelse, ställa frågor eller bara koppla samman. Varje meddelande hålls med omsorg.';

  let isSubmitting = false;
  let thankYouUrl = '';

  // Build the absolute thank you URL based on current location
  if (typeof window !== 'undefined') {
    const origin = window.location.origin;
    thankYouUrl = `${origin}${base}/contact/thanks`;
  }

  function handleSubmit() {
    isSubmitting = true;
    // The form will submit naturally to Formspree
    // Formspree will handle the redirect based on the _next field
  }
</script>

<SEO 
  title={seoTitle}
  description={seoDescription}
  keywords="contact spiritualized, get in touch, spiritual support, message"
  type="website"
/>

<svelte:head>
  <title>{seoTitle}</title>
  <meta name="description" content={seoDescription}>
</svelte:head>

<div class="min-h-screen" in:fade>
  <div class="max-w-4xl mx-auto px-4 py-16">
    <!-- Header -->
    <div class="text-center mb-12">
      <div class="flex justify-center mb-6">
        <img 
          src="{base}/logo.svg" 
          alt="Spiritualized logo" 
          class="w-20 h-20 opacity-80"
        />
      </div>
      <h1 class="text-4xl md:text-5xl font-light mb-4 text-primary-700 dark:text-primary-300">
        {t.title}
      </h1>
      <p class="text-xl text-neutral-600 dark:text-neutral-400 font-light">
        {t.subtitle}
      </p>
    </div>

    <div class="prose-custom mb-8">
      <p class="text-lg text-center leading-relaxed">
        {t.intro}
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <!-- Contact Form (2 columns) -->
      <div class="md:col-span-2">
        <form 
          action="https://formspree.io/f/myzbvbod"
          method="POST"
          on:submit={handleSubmit}
          class="bg-neutral-50 dark:bg-slate-800 rounded-lg p-8 border border-primary-200 dark:border-primary-800"
        >
          <!-- Name Field -->
          <div class="mb-6">
            <label 
              for="name" 
              class="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300"
            >
              {t.form.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={t.form.namePlaceholder}
              class="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 transition-all"
            />
          </div>

          <!-- Email Field -->
          <div class="mb-6">
            <label 
              for="email" 
              class="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300"
            >
              {t.form.email}
            </label>
            <input
              type="email"
              id="email"
              name="_replyto"
              required
              placeholder={t.form.emailPlaceholder}
              class="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 transition-all"
            />
          </div>

          <!-- Message Field -->
          <div class="mb-6">
            <label 
              for="message" 
              class="block text-sm font-medium mb-2 text-neutral-700 dark:text-neutral-300"
            >
              {t.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="8"
              placeholder={t.form.messagePlaceholder}
              class="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-600 transition-all resize-vertical"
            ></textarea>
          </div>

          <!-- Hidden redirect field for Formspree - use absolute URL -->
          {#if thankYouUrl}
            <input type="hidden" name="_next" value={thankYouUrl} />
          {/if}
          
          <!-- Submit Button -->
          <button
            type="submit"
            disabled={isSubmitting}
            class="w-full bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-neutral-50 font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t.form.sending : t.form.submit}
          </button>
        </form>
      </div>

      <!-- Sidebar (1 column) -->
      <div class="space-y-6">
        <!-- Gentle Note -->
        <div class="bg-secondary-50 dark:bg-slate-800 rounded-lg p-6 border border-secondary-200 dark:border-secondary-800">
          <h3 class="text-lg font-medium mb-3 text-primary-700 dark:text-primary-300">
            {t.note.title}
          </h3>
          <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-3 leading-relaxed">
            {t.note.text}
          </p>
          <p class="text-xs text-neutral-600 dark:text-neutral-400 italic">
            {t.note.responseTime}
          </p>
        </div>

        <!-- Other Ways to Connect -->
        <div class="bg-neutral-50 dark:bg-slate-800 rounded-lg p-6 border border-neutral-200 dark:border-slate-700">
          <h3 class="text-lg font-medium mb-4 text-primary-700 dark:text-primary-300">
            {t.otherWays.title}
          </h3>
          
          <div class="space-y-4">
            <!-- Personal Blog -->
            <a 
              href="https://bjornkennethholmstrom.wordpress.com/"
              target="_blank"
              rel="noopener"
              class="block group"
            >
              <div class="flex items-start gap-3">
                <span class="text-secondary-500 text-xl mt-0.5">✦</span>
                <div>
                  <h4 class="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                    {t.otherWays.blog.title}
                  </h4>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">
                    {t.otherWays.blog.description}
                  </p>
                </div>
              </div>
            </a>

            <!-- Sister Sites -->
            <a 
              href="{base}/about"
              class="block group"
            >
              <div class="flex items-start gap-3">
                <span class="text-secondary-500 text-xl mt-0.5">✦</span>
                <div>
                  <h4 class="font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors">
                    {t.otherWays.sites.title}
                  </h4>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400">
                    {t.otherWays.sites.description}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
