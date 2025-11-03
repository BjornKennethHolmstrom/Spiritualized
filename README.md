# Spiritualized

> *A small refuge for hearts that need space to just be*

Spiritualized is a gentle online space exploring spirituality as permission—permission to rest, to hurt, to heal, and to simply exist without pressure to be "better" or "fixed."

**Live site:** [spiritualized.org](https://spiritualized.org)

## 🕯️ About

This site emerged from a lived understanding that spirituality isn't always about bliss and transcendence. Sometimes it's about surviving depression, finding meaning when the world feels too heavy, and discovering that "being" itself can be enough—even when it doesn't feel like it.

Spiritualized offers:
- Articles on spirituality for the overwhelmed soul
- Permission to be exactly as you are
- Practices that work even when you can't get out of bed
- A vision of society that values being as much as doing
- Connection to others who feel the world deeply

## 🌱 Core Philosophy

**Being is spiritualizing.** You don't need to "do" anything to be spiritual—you already are. This site is organized around five gentle pathways:

1. **The Great Permission** - You're allowed to be exactly as you are
2. **The Core Insight** - Being is spiritualizing
3. **Ways to Notice** - Not practice—just noticing
4. **Being Human** - Grief, action, and healing as expressions of being
5. **Being Together** - A society that allows being

## 🛠️ Tech Stack

- **Framework:** [SvelteKit](https://kit.svelte.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Content:** [mdsvex](https://mdsvex.pngwn.io/) (Markdown with Svelte)
- **Deployment:** Static site (GitHub Pages ready)
- **Forms:** [Formspree](https://formspree.io/)

## 🎨 Design

The visual identity centers on a "warm refuge" or "hearth" aesthetic:

- **Primary color:** Terracotta / Rose-Clay (the heart)
- **Secondary color:** Pale Hazy Gold (the spirit)  
- **Base:** Warm Cream / Parchment (home)
- **Dark mode:** "Sacred Void" theme with glowing embers
- **Logo:** Heart-shaped flame representing the hearth

## 📁 Project Structure

```
spiritualized/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── SEO.svelte
│   │   │   └── ShareButtons.svelte
│   │   ├── layouts/
│   │   │   └── ArticleLayout.svelte
│   │   ├── stores/
│   │   │   ├── languageStore.ts
│   │   │   └── themeStore.ts
│   │   └── i18n/
│   │       └── translations.ts
│   ├── routes/
│   │   ├── +layout.svelte
│   │   ├── +page.svelte (home)
│   │   ├── about/+page.svelte
│   │   ├── explore/+page.svelte
│   │   ├── contact/
│   │   │   ├── +page.svelte
│   │   │   └── thanks/+page.svelte
│   │   └── articles/
│   │       └── the-depressed-mystic/
│   │           ├── +page.svelte
│   │           ├── the-depressed-mystic-en.md
│   │           └── the-depressed-mystic-sv.md
│   └── app.css
├── static/
│   ├── logo.svg
│   └── logo-dark.svg
├── svelte.config.js
├── tailwind.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/BjornKennethHolmstrom/Spiritualized.git
cd Spiritualized

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the site.

### Building for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 🌍 Deployment

This site is configured for static deployment. The build output goes to the `build` directory.

### GitHub Pages

1. Build the site: `npm run build`
2. Deploy the `build` directory to GitHub Pages
3. Configure custom domain in repository settings

### Other Platforms

The static build works with:
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting service

## 🌐 Internationalization

The site is fully bilingual (English/Swedish):

- Language toggle in header
- Stores current selection in localStorage
- Article content available in both languages
- Fallback to English if translation missing

## ✍️ Adding Content

### Creating a New Article

1. Create article directory: `src/routes/articles/[article-name]/`
2. Add markdown files:
   - `[article-name]-en.md` (English)
   - `[article-name]-sv.md` (Swedish)
3. Create `+page.svelte` to wrap with ArticleLayout:

```svelte
<script lang="ts">
  import { language } from '$lib/stores/languageStore';
  import ArticleLayout from '$lib/layouts/ArticleLayout.svelte';
  import ArticleEn from './article-name-en.md';
  import ArticleSv from './article-name-sv.md';

  $: currentLanguage = $language;
  $: Article = currentLanguage === 'en' ? ArticleEn : ArticleSv;
  
  $: metadata = {
    title: "Article Title",
    subtitle: "Article subtitle",
    description: "SEO description",
    author: "Björn Kenneth Holmström",
    date: "2024-01-15",
    category: "Category Name",
    keywords: "keyword1, keyword2"
  };
</script>

<ArticleLayout {...metadata}>
  <svelte:component this={Article} />
</ArticleLayout>
```

4. Update `src/routes/explore/+page.svelte` to list the article

## 🎨 Customizing Theme

Edit color values in `src/app.css`:

```css
@theme {
  --color-primary-500: #c06c62;  /* Terracotta */
  --color-secondary-500: #d4b78a; /* Gold */
  --color-neutral-100: #f9f8f6;   /* Cream */
}
```

## 📞 Contact Form

Uses Formspree for form handling. Update the form action in `src/routes/contact/+page.svelte`:

```svelte
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

## 🔗 Related Projects

Spiritualized is part of a larger ecosystem:

- [**Nondualize**](https://nondualize.org) - Exploring non-dual awareness
- [**Spiralize**](https://spiralize.org) - Spiral Dynamics and consciousness development
- [**Communize**](https://communize.org) - Building community and commons
- [**Global Governance Frameworks**](https://globalgovernanceframeworks.org) - Systems for planetary coordination

## 📄 License

This work is licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

You are free to:
- Share — copy and redistribute the material
- Adapt — remix, transform, and build upon the material

Under the following terms:
- Attribution — give appropriate credit
- ShareAlike — distribute under the same license

## 🤝 Contributing

This is a personal project, but thoughtful suggestions are welcome. Feel free to:

- Open an issue for typos or bugs
- Suggest improvements to articles
- Share your experience with the content

## 💝 Support

If this site has been meaningful to you, the best support is:
- Share it with someone who might need it
- Let me know how it helped (via the contact form)
- Live with a more open heart

## 👤 Author

**Björn Kenneth Holmström**

- Website: [bjornkennethholmstrom.wordpress.com](https://bjornkennethholmstrom.wordpress.com/)
- Email: Available through the [contact form](https://spiritualized.org/contact)

---

*May this small refuge serve your heart well.* 🕯️
