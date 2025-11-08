<script lang="ts">
  import { fade } from 'svelte/transition';
  import { language } from '$lib/stores/languageStore';
  import { base } from '$app/paths';
  import SEO from '$lib/components/SEO.svelte';

  $: currentLanguage = $language;

  const translations = {
    en: {
      title: "About Spiritualized",
      subtitle: "A small refuge for hearts that need space to just be",
      intro: {
        paragraphs: [
          "Spiritualized is not a traditional spiritual teaching site. It's more like a quiet room with a candle—a small online temple where you're allowed to rest, to hurt, to heal, and to simply exist without pressure to be 'better' or 'fixed.'",
          "This site emerged from a lived understanding that spirituality isn't always about bliss and transcendence. Sometimes it's about surviving depression, finding meaning when the world feels too heavy, and discovering that 'being' itself can be enough—even when it doesn't feel like it.",
          "Here, we explore spirituality as permission: permission to be incapacitated, permission to grieve, permission to not have answers. We believe that a society that truly honors the human heart must first provide the ground on which people can simply be."
        ]
      },
      purpose: {
        title: "Our purpose",
        subtitle: "To help bring the human heart together",
        description: "In a world that often feels fractured and overwhelming, Spiritualized exists as a gentle gathering place—a hearth where sensitive souls can find:",
        points: [
          "Validation that your sensitivity is not a weakness",
          "Practices that work even when you can't get out of bed",
          "Permission to be 'unproductive' and still worthy",
          "A vision of society that values being as much as doing",
          "Connection to others who feel the world deeply"
        ]
      },
      philosophy: {
        title: "Our philosophy",
        points: [
          "Completely free and open—no paywalls, no tracking",
          "Honest about struggle, not just enlightenment",
          "Spirituality that engages with the world, not escapes it",
          "Being is spiritualizing—you don't need to 'do' anything",
          "Community and basic dignity as spiritual imperatives"
        ]
      },
      relatedSites: {
        title: "Part of a larger ecosystem",
        subtitle: "Spiritualized is the heart center of a connected web of projects exploring human consciousness and collective flourishing:",
        sites: [
          {
            name: "Spiritualized",
            tagline: "Being",
            description: "A refuge for exploring spirituality as 'being,' offering permission to rest, heal, and honor what is already here.",
            url: "https://spiritualized.org",
            logoFile: "logo.svg",
            current: true
          },
          {
            name: "Nondualize",
            tagline: "Awakening",
            description: "Exploring non-dual awareness—the recognition of the unified nature of reality and the dissolution of separation.",
            url: "https://nondualize.org",
            logoFile: "logo-nondualize.svg"
          },
          {
            name: "Spiralize",
            tagline: "Becoming",
            description: "Mapping developmental stages of consciousness and values evolution through Spiral Dynamics.",
            url: "https://spiralize.org",
            logoFile: "logo-spiralize.svg"
          },
          {
            name: "Communize",
            tagline: "Belonging",
            description: "Building community and creating commons—from inner integration to planetary stewardship.",
            url: "https://communize.org",
            logoFile: "logo-communize.svg"
          },
          {
            name: "Global Governance Frameworks",
            tagline: "Systemizing",
            description: "Designing governance frameworks for planetary coordination and collective action on global challenges.",
            url: "https://globalgovernanceframeworks.org",
            logoFile: "logo-ggf.svg"
          },
          {
            name: "Existence Map",
            tagline: "Exploring",
            description: "A multidimensional map of consciousness, reality, and mystery—a doorway where mysticism and metaphysics intersect.",
            url: "https://existencemap.org",
            logoFile: "logo-existencemap.svg"
          }
        ],
        integration: "Together, these sites form a complete path: from the permission to simply be, through awakening and understanding, into community and global coordination. Spiritualized is where it all begins—with the human heart."
      },
      story: {
        title: "The journey behind this site",
        paragraphs: [
          "Spiritualized is created by Björn Kenneth Holmström, who knows firsthand what it means to feel too sensitive for this world.",
          "The path that led here included depression, hospitalization, losing interest in conventional life, and a deep wish to find meaning in simply being—not just in doing. It included living on the margins, both by choice and by circumstance, and the slow discovery that this 'failure' to function in a broken system might actually be a kind of clarity.",
          "What emerged from that darkness was a vision: that the healing of the world begins with giving people permission to be human. That an Adaptive Universal Basic Income isn't just economics—it's a spiritual imperative. That building sites like this one, even from a place of ongoing struggle, is sacred work.",
          "This site is offered with the understanding that we're all figuring this out together. The person writing these words is not 'healed' or 'enlightened'—just someone trying to create something meaningful while navigating the same overwhelming world we all share."
        ],
        linkText: "Visit my website"
      }
    },
    sv: {
      title: "Om Spiritualized",
      subtitle: "En liten fristad för hjärtan som behöver utrymme att bara vara",
      intro: {
        paragraphs: [
          "Spiritualized är inte en traditionell andlig undervisningssida. Det är mer som ett tyst rum med ett ljus—ett litet online-tempel där du får vila, värka, hela och helt enkelt existera utan press att bli 'bättre' eller 'fixad.'",
          "Denna sajt föddes ur en levd förståelse att andlighet inte alltid handlar om lycka och transcendens. Ibland handlar det om att överleva depression, hitta mening när världen känns för tung, och upptäcka att 'varande' i sig kan vara nog—även när det inte känns så.",
          "Här utforskar vi andlighet som tillåtelse: tillåtelse att vara arbetsoförmögen, tillåtelse att sörja, tillåtelse att inte ha svar. Vi tror att ett samhälle som verkligen hedrar det mänskliga hjärtat först måste ge grunden där människor helt enkelt kan vara."
        ]
      },
      purpose: {
        title: "Vårt syfte",
        subtitle: "Att hjälpa till att föra det mänskliga hjärtat samman",
        description: "I en värld som ofta känns splittrad och överväldigande existerar Spiritualized som en mild samlingsplats—en härd där känsliga själar kan finna:",
        points: [
          "Validering att din känslighet inte är en svaghet",
          "Praktiker som fungerar även när du inte kan lämna sängen",
          "Tillåtelse att vara 'improduktiv' och ändå värdefull",
          "En vision av samhälle som värderar varande lika mycket som görande",
          "Kontakt med andra som känner världen djupt"
        ]
      },
      philosophy: {
        title: "Vår filosofi",
        points: [
          "Helt gratis och öppet—inga betalväggar, ingen spårning",
          "Ärligt om kamp, inte bara upplysning",
          "Andlighet som engagerar sig i världen, inte flyr från den",
          "Varande är spiritualisering—du behöver inte 'göra' något",
          "Gemenskap och grundläggande värdighet som andliga imperativ"
        ]
      },
      relatedSites: {
        title: "Del av ett större ekosystem",
        subtitle: "Spiritualized är hjärtcentrum i ett sammankopplat nätverk av projekt som utforskar mänskligt medvetande och kollektivt välmående:",
        sites: [
          {
            name: "Spiritualized",
            tagline: "Varande",
            description: "En fristad för att utforska andlighet som 'varande,' som erbjuder tillåtelse att vila, hela och hedra vad som redan är här.",
            url: "https://spiritualized.org",
            logoFile: "logo.svg",
            current: true
          },
          {
            name: "Nondualize",
            tagline: "Uppvaknande",
            description: "Utforska icke-dual medvetenhet—erkännandet av verklighetens enhetliga natur och upplösningen av separation.",
            url: "https://nondualize.org",
            logoFile: "logo-nondualize.svg"
          },
          {
            name: "Spiralize",
            tagline: "Blivande",
            description: "Kartlägga utvecklingsstadier av medvetande och värdesutveckling genom Spiral Dynamics.",
            url: "https://spiralize.org",
            logoFile: "logo-spiralize.svg"
          },
          {
            name: "Communize",
            tagline: "Tillhörighet",
            description: "Bygga gemenskap och skapa allmänningar—från inre integration till planetärt förvaltarskap.",
            url: "https://communize.org",
            logoFile: "logo-communize.svg"
          },
          {
            name: "Global Governance Frameworks",
            tagline: "Systematisering",
            description: "Designa styrningsramverk för planetär samordning och kollektiv handling på globala utmaningar.",
            url: "https://globalgovernanceframeworks.org",
            logoFile: "logo-ggf.svg"
          },
          {
            name: "Existence Map",
            tagline: "Utforskande",
            description: "En multidimensionell karta över medvetande, verklighet och mystik—en dörr där mystik och metafysik möts.",
            url: "https://existencemap.org",
            logoFile: "logo-existencemap.svg"
          },
        ],
        integration: "Tillsammans bildar dessa sajter en komplett väg: från tillåtelsen att bara vara, genom uppvaknande och förståelse, in i gemenskap och global samordning. Spiritualized är där allt börjar—med det mänskliga hjärtat."
      },
      story: {
        title: "Resan bakom denna sajt",
        paragraphs: [
          "Spiritualized skapas av Björn Kenneth Holmström, som vet av egen erfarenhet vad det betyder att känna sig för känslig för denna värld.",
          "Vägen som ledde hit inkluderade depression, sjukhusvistelser, att tappa intresset för konventionellt liv, och en djup önskan att finna mening i att bara vara—inte bara i att göra. Det inkluderade att leva i marginalen, både av eget val och omständigheter, och den långsamma upptäckten att detta 'misslyckande' att fungera i ett trasigt system faktiskt kan vara en sorts klarhet.",
          "Det som växte fram ur mörkret var en vision: att världens helande börjar med att ge människor tillåtelse att vara mänskliga. Att en adaptiv universell basinkomst inte bara är ekonomi—det är ett andligt imperativ. Att bygga sajter som denna, även från en plats av pågående kamp, är heligt arbete.",
          "Denna sajt erbjuds med förståelsen att vi alla försöker lista ut detta tillsammans. Personen som skriver dessa ord är inte 'helad' eller 'upplyst'—bara någon som försöker skapa något meningsfullt samtidigt som hen navigerar samma överväldigande värld som vi alla delar."
        ],
        linkText: "Besök min webbplats"
      }
    }
  };

  $: pageTranslations = translations[currentLanguage];

  $: title = currentLanguage === 'en'
    ? 'About Spiritualized | A Refuge for Being'
    : 'Om Spiritualized | En fristad för varande';
    
  $: description = currentLanguage === 'en'
    ? 'Learn about Spiritualized—a small online temple where sensitive souls can rest, heal, and find permission to simply be.'
    : 'Lär dig om Spiritualized—ett litet online-tempel där känsliga själar kan vila, hela och få tillåtelse att bara vara.';

  $: seoTitle = currentLanguage === 'en'
    ? 'About Spiritualized'
    : 'Om Spiritualized';
    
  $: seoDescription = currentLanguage === 'en'
    ? 'Learn about Spiritualized, a refuge for hearts that need space to heal. Part of an ecosystem with Nondualize, Spiralize, Communize, and Global Governance Frameworks.'
    : 'Lär dig om Spiritualized, en fristad för hjärtan som behöver utrymme att hela.';
</script>

<SEO 
  title={seoTitle}
  description={seoDescription}
  keywords="about spiritualized, spiritual refuge, depression and spirituality, being, permission to rest, Björn Kenneth Holmström"
  type="website"
/>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description}>
</svelte:head>

<div class="min-h-screen" in:fade>
  <div class="max-w-4xl mx-auto px-4 py-16">
    <!-- Header with gentle flame imagery -->
    <div class="text-center mb-16">
      <div class="flex justify-center mb-6">
        <img 
          src="{base}/logo.svg" 
          alt="Spiritualized logo" 
          class="w-24 h-24 opacity-80"
        />
      </div>
      <h1 class="text-4xl md:text-5xl font-light mb-4 text-primary-700 dark:text-primary-300">
        {pageTranslations.title}
      </h1>
      <p class="text-xl text-neutral-600 dark:text-neutral-400 font-light">
        {pageTranslations.subtitle}
      </p>
    </div>

    <!-- Content -->
    <div class="prose-custom">
      <!-- Introduction -->
      {#each pageTranslations.intro.paragraphs as paragraph}
        <p class="text-lg leading-relaxed mb-6">
          {paragraph}
        </p>
      {/each}

      <!-- Purpose Section -->
      <div class="mt-16 mb-12">
        <h2 class="text-3xl font-light mb-3 text-primary-700 dark:text-primary-300">
          {pageTranslations.purpose.title}
        </h2>
        <p class="text-lg font-light text-neutral-600 dark:text-neutral-400 italic mb-4">
          {pageTranslations.purpose.subtitle}
        </p>
        <p class="text-lg mb-4">
          {pageTranslations.purpose.description}
        </p>
        <ul class="space-y-2 ml-6">
          {#each pageTranslations.purpose.points as point}
            <li class="flex items-start">
              <span class="text-secondary-500 mr-3 mt-1">✦</span>
              <span class="text-lg">{point}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Philosophy Section -->
      <div class="mt-12 p-8 bg-neutral-100 dark:bg-slate-800 rounded-lg border border-primary-200 dark:border-primary-800">
        <h2 class="text-2xl font-light mb-6 text-primary-700 dark:text-primary-300">
          {pageTranslations.philosophy.title}
        </h2>
        <ul class="space-y-3">
          {#each pageTranslations.philosophy.points as point}
            <li class="flex items-start">
              <span class="text-secondary-500 mr-3">•</span>
              <span class="text-lg">{point}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Related Sites Section -->
      <div class="mt-16 pt-8 border-t border-neutral-300 dark:border-slate-700">
        <h2 class="text-3xl font-light mb-3 text-primary-700 dark:text-primary-300">
          {pageTranslations.relatedSites.title}
        </h2>
        <p class="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
          {pageTranslations.relatedSites.subtitle}
        </p>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          {#each pageTranslations.relatedSites.sites as site}
            <div class="bg-neutral-50 dark:bg-slate-800 rounded-lg p-6 border-2 {site.current ? 'border-primary-400 dark:border-primary-600' : 'border-neutral-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700'} transition-all">
              <div class="flex items-start gap-4 mb-3">
                <img src="{base}/{site.logoFile}" alt="{site.name} logo" class="w-12 h-12 flex-shrink-0 opacity-90" />
                <div class="flex-1">
                  <h3 class="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{site.name}</h3>
                  <p class="text-sm font-medium text-secondary-600 dark:text-secondary-400">{site.tagline}</p>
                </div>
              </div>
              <p class="text-sm text-neutral-700 dark:text-neutral-300 mb-3 leading-relaxed">
                {site.description}
              </p>
              {#if site.current}
                <span class="inline-block text-sm text-primary-700 dark:text-primary-300 font-medium">
                  {currentLanguage === 'en' ? 'You are here' : 'Du är här'}
                </span>
              {:else}
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 font-medium transition-colors"
                >
                  {currentLanguage === 'en' ? 'Visit site →' : 'Besök sajt →'}
                </a>
              {/if}
            </div>
          {/each}
        </div>
        
        <p class="text-sm text-neutral-600 dark:text-neutral-400 italic leading-relaxed">
          {pageTranslations.relatedSites.integration}
        </p>
      </div>

      <!-- Author/Story Section -->
      <div class="mt-16 pt-8 border-t border-neutral-300 dark:border-slate-700">
        <h2 class="text-3xl font-light mb-6 text-primary-700 dark:text-primary-300">
          {pageTranslations.story.title}
        </h2>
        {#each pageTranslations.story.paragraphs as paragraph}
          <p class="text-lg leading-relaxed mb-6">
            {paragraph}
          </p>
        {/each}
        <div class="mt-8">
          <a
            href="https://bjornkennethholmstrom.org/"
            target="_blank"
            rel="noopener"
            class="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-neutral-50 rounded-lg transition-colors font-medium"
          >
            {pageTranslations.story.linkText}
          </a>
        </div>
      </div>

      <!-- Closing blessing -->
      <div class="mt-16 text-center py-8">
        <p class="text-lg text-neutral-600 dark:text-neutral-400 italic font-light">
          {currentLanguage === 'en' 
            ? 'May this small refuge serve your heart well.'
            : 'Må denna lilla fristad tjäna ditt hjärta väl.'}
        </p>
      </div>
    </div>
  </div>
</div>
