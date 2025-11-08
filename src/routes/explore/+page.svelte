<!-- src/routes/explore/+page.svelte -->
<script lang="ts">
  import { fade } from 'svelte/transition';
  import { language } from '$lib/stores/languageStore';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';

  $: currentLanguage = $language;

  const translations = {
    en: {
      title: "Explore",
      subtitle: "Pathways for the journey of being",
      intro: "Spiritualized is organized around five gentle pathways. Each section invites you to rest in a different aspect of what it means to simply be. There's no order, no requirement—just meet yourself where you are.",
      comingSoon: "Coming soon",
      readArticle: "Read article",
      sections: [
        {
          number: "1",
          title: "The Great Permission",
          tagline: "You're allowed to be exactly as you are",
          description: "This is where we start—with permission. Permission to be overwhelmed, depressed, incapacitated, or simply tired. Permission to not have answers. These articles meet you in the darkness and say: you're not broken, you're here.",
          icon: "🕯️",
          color: "primary",
          articles: [
            {
              title: "The Depressed Mystic",
              subtitle: "Finding spirituality when you can't get out of bed",
              available: true,
              url: "/articles/the-depressed-mystic"
            },
            {
              title: "You're Not Broken (You're Just Here)",
              subtitle: "De-pathologizing sensitivity and overwhelm",
              available: false
            },
            {
              title: "The Spirituality of 'Doing Nothing'",
              subtitle: "Why rest and 'unproductive' states are sacred",
              available: false
            }
          ]
        },
        {
          number: "2",
          title: "The Core Insight",
          tagline: "Being is spiritualizing",
          description: "What does it mean to say 'being is enough'? These articles explore the radical simplicity at the heart of this site: you don't need to become spiritual—you already are. Existence itself is the practice.",
          icon: "✨",
          color: "secondary",
          articles: [
            {
              title: "The Totality in a Twig",
              subtitle: "Why nothing is 'too small' to matter",
              available: true,
              url: "/articles/the-totality-in-a-twig"
            },
            {
              title: "The 'Isness' That Is Always Here",
              subtitle: "What we mean by 'being'",
              available: false
            },
            {
              title: "'Being' vs. 'Thinking'",
              subtitle: "How the mind creates the illusion of separation",
              available: false
            }
          ]
        },
        {
          number: "3",
          title: "Ways to Notice",
          tagline: "Not practice—just noticing",
          description: "These aren't spiritual 'practices' you need to master. They're simple ways to notice what's already here: your breath, a sound, the weight of a blanket. No energy required. No judgment allowed.",
          icon: "👁️",
          color: "primary",
          articles: [
            {
              title: "Zero-Energy Noticing",
              subtitle: "For when you're too tired to 'do' anything",
              available: true,
              url: "/articles/zero-energy-noticing"
            },
            {
              title: "Common Loops the Mind Creates",
              subtitle: "Working with (not against) mental patterns",
              available: false
            },
            {
              title: "This Isn't Work, It's Noticing",
              subtitle: "Removing the pressure from spiritual life",
              available: false
            }
          ]
        },
        {
          number: "4",
          title: "Being Human",
          tagline: "Grief, action, and healing as expressions of being",
          description: "If 'being' is enough, why does the world hurt so much? These articles explore how our pain, our service, and our healing aren't separate from spirituality—they're expressions of it.",
          icon: "🌱",
          color: "secondary",
          articles: [
            {
              title: "If 'Being' is Enough, Why Does the World Hurt?",
              subtitle: "Eco-anxiety and grief as connection",
              available: false
            },
            {
              title: "Sacred Service",
              subtitle: "Action that arises from being, not obligation",
              available: false
            },
            {
              title: "Healing Isn't a Goal",
              subtitle: "It's a noticing",
              available: false
            }
          ]
        },
        {
          number: "5",
          title: "Being Together",
          tagline: "A society that allows being",
          description: "What would a world look like that truly honored the human heart? These articles explore the social, economic, and communal structures that would allow all people to simply be—without terror, without shame.",
          icon: "🤝",
          color: "primary",
          articles: [
            {
              title: "The Spiritual Imperative of AUBI",
              subtitle: "Why basic income is about being, not just economics",
              available: false
            },
            {
              title: "'Being is Enough'",
              subtitle: "Worth beyond productivity",
              available: false
            },
            {
              title: "Community as Shared Being",
              subtitle: "The feeling of 'isness' together",
              available: false
            }
          ]
        }
      ]
    },
    sv: {
      title: "Utforska",
      subtitle: "Vägar för varandets resa",
      intro: "Spiritualized är organiserad kring fem milda vägar. Varje sektion bjuder in dig att vila i en olika aspekt av vad det betyder att bara vara. Det finns ingen ordning, inget krav—möt bara dig själv där du är.",
      comingSoon: "Kommer snart",
      readArticle: "Läs artikel",
      sections: [
        {
          number: "1",
          title: "Den stora tillåtelsen",
          tagline: "Du får vara precis som du är",
          description: "Det är här vi börjar—med tillåtelse. Tillåtelse att vara överväldigad, deprimerad, arbetsoförmögen, eller bara trött. Tillåtelse att inte ha svar. Dessa artiklar möter dig i mörkret och säger: du är inte trasig, du är här.",
          icon: "🕯️",
          color: "primary",
          articles: [
            {
              title: "Den deprimerade mystikern",
              subtitle: "Att finna andlighet när du inte kan lämna sängen",
              available: true,
              url: "/articles/the-depressed-mystic"
            },
            {
              title: "Du är inte trasig (du är bara här)",
              subtitle: "Att avpatologisera känslighet och överväldigande",
              available: false
            },
            {
              title: "Andligheten i att 'göra ingenting'",
              subtitle: "Varför vila och 'improduktiva' tillstånd är heliga",
              available: false
            }
          ]
        },
        {
          number: "2",
          title: "Kärninsikten",
          tagline: "Varande är spiritualisering",
          description: "Vad betyder det att säga 'varande är nog'? Dessa artiklar utforskar den radikala enkelheten i hjärtat av denna sajt: du behöver inte bli andlig—du är redan det. Existensen i sig är praktiken.",
          icon: "✨",
          color: "secondary",
          articles: [
            {
              title: "Totaliteten i en kvist",
              subtitle: "Varför ingenting är 'för litet' för att betyda något",
              available: true,
              url: "/articles/the-totality-in-a-twig"
            },
            {
              title: "'Isigheten' som alltid är här",
              subtitle: "Vad vi menar med 'varande'",
              available: false
            },
            {
              title: "'Varande' vs. 'tänkande'",
              subtitle: "Hur sinnet skapar illusionen av separation",
              available: false
            }
          ]
        },
        {
          number: "3",
          title: "Sätt att uppmärksamma",
          tagline: "Inte praktik—bara uppmärksamhet",
          description: "Detta är inte andliga 'praktiker' du behöver bemästra. De är enkla sätt att uppmärksamma vad som redan är här: din andning, ett ljud, tyngden av ett täcke. Ingen energi krävs. Ingen bedömning tillåts.",
          icon: "👁️",
          color: "primary",
          articles: [
            {
              title: "Noll-energi uppmärksamhet",
              subtitle: "För när du är för trött för att 'göra' något",
              available: true,
              url: "/articles/zero-energy-noticing"
            },
            {
              title: "Vanliga loopar sinnet skapar",
              subtitle: "Att arbeta med (inte mot) mentala mönster",
              available: false
            },
            {
              title: "Detta är inte arbete, det är uppmärksamhet",
              subtitle: "Att ta bort pressen från andligt liv",
              available: false
            }
          ]
        },
        {
          number: "4",
          title: "Att vara människa",
          tagline: "Sorg, handling och helande som uttryck för varande",
          description: "Om 'varande' är nog, varför gör världen så ont? Dessa artiklar utforskar hur vår smärta, vår tjänst och vår helande inte är separata från andlighet—de är uttryck för den.",
          icon: "🌱",
          color: "secondary",
          articles: [
            {
              title: "Om 'varande' är nog, varför gör världen ont?",
              subtitle: "Eko-ångest och sorg som koppling",
              available: false
            },
            {
              title: "Helig tjänst",
              subtitle: "Handling som uppstår från varande, inte skyldighet",
              available: false
            },
            {
              title: "Helande är inte ett mål",
              subtitle: "Det är en uppmärksamhet",
              available: false
            }
          ]
        },
        {
          number: "5",
          title: "Att vara tillsammans",
          tagline: "Ett samhälle som tillåter varande",
          description: "Hur skulle en värld se ut som verkligen hedrade det mänskliga hjärtat? Dessa artiklar utforskar de sociala, ekonomiska och gemensamma strukturer som skulle tillåta alla människor att bara vara—utan terror, utan skam.",
          icon: "🤝",
          color: "primary",
          articles: [
            {
              title: "Det andliga imperativet av AUBI",
              subtitle: "Varför basinkomst handlar om varande, inte bara ekonomi",
              available: false
            },
            {
              title: "'Varande är nog'",
              subtitle: "Värde bortom produktivitet",
              available: false
            },
            {
              title: "Gemenskap som delat varande",
              subtitle: "Känslan av 'isighet' tillsammans",
              available: false
            }
          ]
        }
      ]
    }
  };

  $: t = translations[currentLanguage];
  
  $: seoTitle = currentLanguage === 'en'
    ? 'Explore | Spiritualized'
    : 'Utforska | Spiritualized';
    
  $: seoDescription = currentLanguage === 'en'
    ? 'Explore five pathways of being: permission, insight, noticing, humanity, and community. Articles and reflections for the overwhelmed soul.'
    : 'Utforska fem vägar för varande: tillåtelse, insikt, uppmärksamhet, mänsklighet och gemenskap. Artiklar och reflektioner för den överväldigade själen.';
</script>

<SEO 
  title={seoTitle}
  description={seoDescription}
  keywords="spiritual pathways, being, depression spirituality, mindfulness, permission, healing"
  type="website"
/>

<svelte:head>
  <title>{seoTitle}</title>
  <meta name="description" content={seoDescription}>
</svelte:head>

<div class="min-h-screen" in:fade>
  <div class="max-w-5xl mx-auto px-4 py-16">
    
    <!-- Header -->
    <div class="text-center mb-16">
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
      <p class="text-xl text-neutral-600 dark:text-neutral-400 font-light max-w-3xl mx-auto">
        {t.subtitle}
      </p>
    </div>

    <!-- Introduction -->
    <div class="prose-custom max-w-3xl mx-auto mb-16">
      <p class="text-lg text-center leading-relaxed">
        {t.intro}
      </p>
    </div>

    <!-- Sections -->
    <div class="space-y-16">
      {#each t.sections as section}
        <section class="relative">
          <!-- Section Header -->
          <div class="mb-8">
            <div class="flex items-center gap-4 mb-4">
              <span class="text-4xl">{section.icon}</span>
              <div class="flex-1">
                <div class="flex items-baseline gap-3">
                  <span class="text-sm font-medium text-neutral-400 dark:text-neutral-500">
                    {section.number}
                  </span>
                  <h2 class="text-3xl font-light text-{section.color}-700 dark:text-{section.color}-300">
                    {section.title}
                  </h2>
                </div>
                <p class="text-lg text-{section.color}-600 dark:text-{section.color}-400 font-light italic mt-1">
                  {section.tagline}
                </p>
              </div>
            </div>
            <p class="text-neutral-700 dark:text-neutral-300 leading-relaxed ml-16">
              {section.description}
            </p>
          </div>

          <!-- Articles Grid -->
          <div class="ml-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each section.articles as article}
              {#if article.available}
                <!-- Available Article -->
                <a
                  href="{base}{article.url}"
                  class="block group bg-neutral-50 dark:bg-slate-800 rounded-lg p-6 border-2 border-{section.color}-200 dark:border-{section.color}-800 hover:border-{section.color}-400 dark:hover:border-{section.color}-600 transition-all"
                >
                  <h3 class="font-medium text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-{section.color}-600 dark:group-hover:text-{section.color}-300 transition-colors">
                    {article.title}
                  </h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {article.subtitle}
                  </p>
                  <span class="inline-flex items-center text-sm text-{section.color}-600 dark:text-{section.color}-400 font-medium">
                    {t.readArticle} →
                  </span>
                </a>
              {:else}
                <!-- Coming Soon -->
                <div class="bg-neutral-50 dark:bg-slate-800 rounded-lg p-6 border border-neutral-200 dark:border-slate-700 opacity-60">
                  <h3 class="font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                    {article.title}
                  </h3>
                  <p class="text-sm text-neutral-600 dark:text-neutral-400 mb-4 leading-relaxed">
                    {article.subtitle}
                  </p>
                  <span class="inline-block text-xs text-neutral-500 dark:text-neutral-400 italic">
                    {t.comingSoon}
                  </span>
                </div>
              {/if}
            {/each}
          </div>
        </section>
      {/each}
    </div>

    <!-- Closing Note -->
    <div class="mt-20 text-center">
      <div class="max-w-2xl mx-auto p-8 bg-secondary-50 dark:bg-slate-800 rounded-lg border border-secondary-200 dark:border-secondary-800">
        <p class="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
          {currentLanguage === 'en'
            ? "This site is growing slowly, with care. Each article is written when it's ready—not on a schedule. If you'd like to be notified when new content appears, or simply want to share what resonates with you, feel free to reach out."
            : "Denna sajt växer långsamt, med omsorg. Varje artikel skrivs när den är redo—inte på ett schema. Om du vill bli meddelad när nytt innehåll dyker upp, eller helt enkelt vill dela vad som resonerar med dig, hör gärna av dig."}
        </p>
        <a
          href="{base}/contact"
          class="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-neutral-50 rounded-lg transition-colors font-medium"
        >
          {currentLanguage === 'en' ? 'Get in touch' : 'Hör av dig'}
        </a>
      </div>
    </div>
  </div>
</div>
