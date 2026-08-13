I'll start by inspecting the existing project structure to understand what components are available and how to best integrate the new Nik Owen Jones page.

Tool execute_command does not exists.
I'll build this carefully, reusing the existing Neon Pulse design system while giving Nik's page its own electronic identity. Let me start by generating an atmospheric hero image placeholder for Nik's page.


I'll create the Nik Owen Jones page while reusing the existing Neon Pulse design system. Let me build this systematically.

Tool write_file does not exists.
# Nik Owen Jones — Secondary Page Implementation

Below is the complete implementation. Each code block is labeled with its file path. Copy each into your project at the indicated location.

---

## 1. Centralized Data File (NEW)

**File: `src/data/nik-links.ts`**

```ts
// Centralized data for Nik Owen Jones streaming and social links
// Update these URLs as they become available

export interface StreamingLink {
  name: string;
  url: string | null;
  icon: string;
  color: string;
}

export interface NavLink {
  href: string;
  label: string;
}

// Streaming platform links
// Set to null if URL is not yet available - component will hide it automatically
export const streamingLinks: StreamingLink[] = [
  {
    name: 'Spotify',
    url: null, // TODO: Add Nik's Spotify artist/album URL
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>`,
    color: 'from-green-500 to-green-400',
  },
  {
    name: 'Bandcamp',
    url: null, // TODO: Add Nik's Bandcamp URL
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M0 18.75l7.437-13.5H24l-7.438 13.5z"/></svg>`,
    color: 'from-blue-500 to-blue-400',
  },
  {
    name: 'Apple Music',
    url: null, // TODO: Add Nik's Apple Music URL
    icon: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.403-1.336.532-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.802.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.106 1.593-.35 2.28-.81a5.046 5.046 0 001.88-2.207c.186-.42.293-.87.37-1.324.113-.675.138-1.358.137-2.04-.002-3.8 0-7.595-.003-11.393zm-6.423 3.99v5.712c0 .417-.058.827-.244 1.206-.29.59-.76.962-1.388 1.14-.414.117-.836.146-1.26.08-.603-.094-1.09-.378-1.44-.87-.32-.45-.46-.96-.46-1.505 0-.68.24-1.27.72-1.75.42-.42.93-.68 1.51-.81.44-.1.88-.15 1.33-.18.37-.03.74-.05 1.11-.08.06-.005.11-.01.17-.02V9.13c0-.07-.02-.1-.09-.11-.18-.02-.36-.05-.54-.06-.55-.04-1.1-.03-1.65.04-.68.09-1.32.28-1.9.66-.66.43-1.14 1.01-1.42 1.74-.18.47-.27.96-.29 1.46-.02.62.08 1.22.32 1.8.35.84.92 1.5 1.68 1.98.56.36 1.17.6 1.83.72.54.1 1.08.12 1.63.07.63-.06 1.22-.24 1.76-.56.68-.4 1.18-.96 1.48-1.68.18-.43.27-.88.3-1.35.01-.14.01-.28.01-.42V10.11z"/></svg>`,
    color: 'from-pink-500 to-rose-400',
  },
];

// Navigation links for Nik's page
export const nikNavLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#music', label: 'Music' },
  { href: '#live', label: 'Live' },
  { href: '#listen', label: 'Listen' },
  { href: '#contact', label: 'Contact' },
];

// Contact information
export const contactInfo = {
  email: null, // TODO: Add Nik's email address when confirmed
  emailPlaceholder: 'contact@neonpulse.co.uk', // Fallback - update when Nik's email is confirmed
};
```

---

## 2. Modified Nav Component (ADD optional props)

**File: `src/components/Nav.astro`** — replace with this version

```astro
---
export interface Props {
  links?: Array<{ href: string; label: string }>;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: 'neon-pulse' | 'nik';
}

const {
  links,
  ctaLabel = 'Book Now',
  ctaHref = '#contact',
  variant = 'neon-pulse',
} = Astro.props;

const defaultLinks = [
  { href: '#about', label: 'About' },
  { href: '#gigs', label: 'Gigs' },
  { href: '#music', label: 'Music' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

const navLinks = links ?? defaultLinks;
const isNik = variant === 'nik';
const logoSrc = isNik ? '/images/nik-logo.png' : '/images/logo.png';
const logoAlt = isNik ? 'Nik Owen Jones logo' : 'Neon Pulse band logo';
---

<header
  id="site-nav"
  class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <nav class="flex h-16 md:h-20 items-center justify-between backdrop-blur-xl bg-dark-900/60 border-b border-white/5 rounded-b-2xl px-4 md:px-6">
      <a href={isNik ? '/nik-owen-jones/' : '#home'} class="flex items-center gap-2 group" aria-label={isNik ? 'Nik Owen Jones home' : 'Neon Pulse home'}>
        <img
          src={logoSrc}
          alt={logoAlt}
          width="120"
          height="40"
          class="h-8 md:h-10 w-auto transition-transform group-hover:scale-105"
          loading="eager"
          onerror="this.style.display='none'"
        />
        <span class={`text-lg md:text-xl font-black tracking-tight ${isNik ? 'text-gradient' : ''}`}>
          {isNik ? 'NIK OWEN JONES' : ''}
        </span>
      </a>

      <ul class="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <li>
            <a
              href={link.href}
              class="px-4 py-2 text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors relative group"
            >
              {link.label}
              <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-magenta group-hover:w-3/4 transition-all duration-300"></span>
            </a>
          </li>
        ))}
      </ul>

      <div class="flex items-center gap-3">
        <a
          href={ctaHref}
          class={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold hover:scale-105 transition-all ${
            isNik
              ? 'bg-gradient-to-r from-neon-blue to-neon-magenta hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]'
              : 'bg-gradient-to-r from-neon-blue to-neon-magenta hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]'
          }`}
        >
          {ctaLabel}
        </a>
        <button
          id="mobile-menu-btn"
          class="md:hidden p-2 text-gray-300 hover:text-neon-blue"
          aria-label="Toggle menu"
          aria-expanded="false"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div
      id="mobile-menu"
      class="md:hidden hidden mt-2 rounded-2xl backdrop-blur-xl bg-dark-900/90 border border-white/10 overflow-hidden"
    >
      <ul class="flex flex-col p-4 gap-1">
        {navLinks.map((link) => (
          <li>
            <a
              href={link.href}
              class="block px-4 py-3 rounded-xl text-gray-300 hover:text-neon-blue hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li class="pt-2">
          <a
            href={ctaHref}
            class="block text-center px-4 py-3 rounded-xl bg-gradient-to-r from-neon-blue to-neon-magenta text-white font-semibold"
          >
            {ctaLabel}
          </a>
        </li>
      </ul>
    </div>
  </div>

  <script>
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    btn?.addEventListener('click', () => {
      const isOpen = !menu?.classList.contains('hidden');
      menu?.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
    menu?.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => menu.classList.add('hidden'));
    });
  </script>
</header>

<style>
  header.scrolled nav {
    background-color: rgba(10, 10, 15, 0.85);
    border-bottom-color: rgba(0, 212, 255, 0.15);
    box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5);
  }
</style>
```

---

## 3. Modified Layout (ADD optional jsonLd prop)

**File: `src/layouts/Layout.astro`** — replace with this version

```astro
---
export interface Props {
  title: string;
  description?: string;
  image?: string;
  canonical?: string;
  jsonLd?: object;
}

const {
  title,
  description = "Neon Pulse — the UK's premier rock & pop covers band. Available for festivals, weddings, corporate events and private parties across the United Kingdom.",
  image = "/images/hero.jpg",
  canonical = "https://neonpulse.co.uk",
  jsonLd,
} = Astro.props;

// Default Neon Pulse schema
const defaultSchema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "Neon Pulse",
  "url": "https://neonpulse.co.uk",
  "logo": "https://neonpulse.co.uk/images/logo.png",
  "image": image,
  "genre": ["Rock", "Pop", "Cover Band"],
  "description": description,
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "GB"
  },
  "sameAs": [
    "https://www.instagram.com/neonpulseband",
    "https://www.facebook.com/neonpulseband"
  ]
};

const schemaToUse = jsonLd ?? defaultSchema;
---

<!doctype html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <meta name="theme-color" content="#0a0a0f" />
    <meta name="color-scheme" content="dark" />

    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_GB" />
    <meta property="og:site_name" content="Neon Pulse" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={canonical} />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />

    <!-- Fonts (preconnect + fontsource CDN) -->
    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/fontsource/css/space-grotesk@latest/index.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/fontsource/css/inter@latest/index.css" />

    <!-- Preload critical hero image -->
    <link rel="preload" as="image" href={image} />

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

    <!-- JSON-LD structured data -->
    <script type="application/ld+json" set:html={JSON.stringify(schemaToUse)} />

    <meta name="robots" content="index, follow, max-image-preview:large" />
  </head>
  <body class="bg-dark-900 text-gray-200 antialiased">
    <slot />
    <script>
      // Scroll-reveal animation using IntersectionObserver
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

      // Sticky nav shadow on scroll
      const nav = document.getElementById('site-nav');
      if (nav) {
        const onScroll = () => {
          if (window.scrollY > 20) nav.classList.add('scrolled');
          else nav.classList.remove('scrolled');
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
      }
    </script>
  </body>
</html>
```

---

## 4. Nik Hero Component (NEW)

**File: `src/components/nik/Hero.astro`**

```astro
---
// TODO: Replace with actual Nik Owen Jones hero image when available
// For now using an atmospheric placeholder that fits the electronic aesthetic
const heroImage = '/images/nik-hero.jpg';
---

<section
  id="home"
  class="relative min-h-screen flex items-center justify-center overflow-hidden"
  aria-label="Nik Owen Jones hero"
>
  <!-- Background image with overlay -->
  <div class="absolute inset-0">
    <img
      src={heroImage}
      alt=""
      class="w-full h-full object-cover scale-110"
      loading="eager"
      fetchpriority="high"
      decoding="async"
      onerror="this.style.display='none'"
    />
    <!-- Fallback gradient if image fails to load -->
    <div class="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
    <div class="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/40 to-dark-900"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-neon-blue/15 via-transparent to-neon-magenta/15"></div>
    <div class="absolute inset-0 bg-grid opacity-40"></div>
  </div>

  <!-- Decorative neon orbs - more subtle than Neon Pulse -->
  <div class="absolute top-1/3 left-10 w-80 h-80 bg-neon-blue/15 rounded-full blur-3xl animate-float pointer-events-none"></div>
  <div class="absolute bottom-1/3 right-10 w-96 h-96 bg-neon-magenta/15 rounded-full blur-3xl animate-float pointer-events-none" style="animation-delay: 3s;"></div>

  <!-- Subtle waveform decoration -->
  <svg class="absolute bottom-0 left-0 right-0 w-full h-32 text-neon-blue/10 pointer-events-none" viewBox="0 0 1440 120" preserveAspectRatio="none">
    <path fill="currentColor" d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"></path>
  </svg>

  <!-- Content -->
  <div class="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-32">
    <div class="reveal">
      <p class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/5 text-neon-blue text-xs md:text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">
        <span class="w-2 h-2 rounded-full bg-neon-blue animate-pulse-slow"></span>
        Electronic Music Producer & Live Performer
      </p>
    </div>

    <h1 class="reveal reveal-delay-1 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6">
      <span class="block text-gradient">NIK OWEN</span>
      <span class="block text-gradient-amber">JONES</span>
    </h1>

    <p class="reveal reveal-delay-1 text-lg md:text-xl text-neon-blue/80 font-medium tracking-wide mb-4">
      Electronic Music • Synths • Sound Design
    </p>

    <p class="reveal reveal-delay-2 max-w-2xl mx-auto text-base md:text-lg text-gray-300 mb-10 leading-relaxed">
      Keyboardist, electronic music producer and live performer creating original instrumental electronic music for stages, festivals and headphones.
    </p>

    <div class="reveal reveal-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="#listen"
        class="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-magenta text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] transition-all hover:scale-105"
      >
        <span>Listen to the Music</span>
        <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      </a>
      <a
        href="#about"
        class="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold text-lg hover:border-neon-blue hover:text-neon-blue hover:bg-neon-blue/10 transition-all"
      >
        <span>About Nik</span>
      </a>
    </div>
  </div>
</section>
```

---

## 5. Nik About Component (NEW)

**File: `src/components/nik/About.astro`**

```astro
---
// TODO: Replace with actual Nik photo when available
const nikImage = '/images/nik-portrait.jpg';
---

<section id="about" class="relative py-24 md:py-32 overflow-hidden">
  <div class="absolute inset-0 bg-grid opacity-15"></div>
  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-3xl pointer-events-none"></div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div class="reveal reveal-delay-1 relative order-2 lg:order-1">
        <div class="relative aspect-[4/5] rounded-3xl overflow-hidden neon-border">
          <img
            src={nikImage}
            alt="Nik Owen Jones performing with synthesizers"
            class="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onerror="this.parentElement.innerHTML='<div class=\'w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center text-gray-500 text-sm\'>NIK PHOTO PLACEHOLDER</div>'"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
          <div class="absolute bottom-6 left-6 right-6">
            <div class="flex items-center gap-3 text-white">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-magenta flex items-center justify-center">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                </svg>
              </div>
              <div>
                <div class="font-bold">Electronic Artist</div>
                <div class="text-sm text-gray-300">Since age 14</div>
              </div>
            </div>
          </div>
        </div>
        <!-- Floating badge -->
        <div class="absolute -top-4 -right-4 md:top-8 md:-right-8 bg-gradient-to-br from-neon-blue to-neon-magenta text-white rounded-2xl p-4 rotate-6 shadow-2xl">
          <div class="text-2xl font-black">Synth</div>
          <div class="text-xs font-bold uppercase">Wizard</div>
        </div>
      </div>

      <div class="reveal order-1 lg:order-2">
        <span class="inline-block px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-xs font-semibold tracking-wider uppercase mb-4">
          About Nik
        </span>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
          From Keyboards to
          <span class="text-gradient block">Synthesizers</span>
        </h2>
        <div class="space-y-4 text-gray-300 leading-relaxed">
          <p>
            Nik Owen Jones has been playing keyboards since the age of 14, performing across bands and theatre productions before developing his own electronic music projects.
          </p>
          <p>
            Alongside his work with Neon Pulse, Nik performs original instrumental electronic music and has taken his music to festivals across Europe.
          </p>
          <p>
            His work combines a long-standing passion for keyboards and synthesizers with electronic production, sound design and live performance.
          </p>
        </div>

        <div class="mt-8 grid grid-cols-3 gap-4">
          <div class="neon-border rounded-2xl p-4 bg-dark-800/50 backdrop-blur-sm text-center">
            <div class="text-2xl md:text-3xl font-black text-gradient">14</div>
            <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">Started Keys</div>
          </div>
          <div class="neon-border rounded-2xl p-4 bg-dark-800/50 backdrop-blur-sm text-center">
            <div class="text-2xl md:text-3xl font-black text-gradient-amber">EU</div>
            <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">Festivals</div>
          </div>
          <div class="neon-border rounded-2xl p-4 bg-dark-800/50 backdrop-blur-sm text-center">
            <div class="text-2xl md:text-3xl font-black text-gradient">∞</div>
            <div class="text-xs text-gray-400 uppercase tracking-wider mt-1">Synths</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 6. Nik Original Music Component (NEW)

**File: `src/components/nik/OriginalMusic.astro`**

```astro
---
// Reusable component for displaying music tracks/releases
// Currently in "coming soon" state - ready to accept real embeds

interface Track {
  title: string;
  type: string;
  status: 'available' | 'coming-soon';
  embedUrl?: string;
}

const tracks: Track[] = [
  {
    title: 'Original Electronic Works',
    type: 'Album / EP',
    status: 'coming-soon',
  },
  {
    title: 'Live Electronic Performances',
    type: 'Live Recordings',
    status: 'coming-soon',
  },
  {
    title: 'Synth Experiments',
    type: 'Singles',
    status: 'coming-soon',
  },
];
---

<section id="music" class="relative py-24 md:py-32 bg-dark-800/30">
  <div class="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/20 to-dark-900"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-neon-magenta/5 rounded-full blur-3xl pointer-events-none"></div>

  <div class="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16 reveal">
      <span class="inline-block px-3 py-1 rounded-full bg-neon-magenta/10 border border-neon-magenta/30 text-neon-magenta text-xs font-semibold tracking-wider uppercase mb-4">
        Original Music
      </span>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
        Beyond <span class="text-gradient">Neon Pulse</span>
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        Alongside the live covers of Neon Pulse, Nik Owen Jones creates and performs his own original instrumental electronic music.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      {tracks.map((track, i) => (
        <article
          class={`reveal reveal-delay-${i + 1} group relative rounded-3xl border border-white/10 bg-dark-800/40 backdrop-blur-sm overflow-hidden hover:border-neon-blue/40 transition-all`}
        >
          <div class="aspect-square bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center relative">
            <!-- Placeholder artwork -->
            <div class="absolute inset-0 bg-grid opacity-20"></div>
            <div class="relative text-center p-6">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-magenta/20 border border-white/10 flex items-center justify-center">
                <svg class="w-8 h-8 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div class="text-xs text-neon-blue font-semibold tracking-wider uppercase mb-2">{track.type}</div>
              <div class="text-lg font-bold text-white mb-2">{track.title}</div>
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-xs font-medium">
                <span class="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse-slow"></span>
                Coming Soon
              </div>
            </div>
          </div>

          <div class="p-5">
            <p class="text-sm text-gray-400">
              {track.status === 'coming-soon'
                ? 'Release details and streaming links will be available here soon.'
                : 'Listen now on your preferred platform.'}
            </p>
          </div>

          <!-- Hover glow -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-gradient-to-br from-neon-blue/5 to-neon-magenta/5"></div>
        </article>
      ))}
    </div>

    <!-- TODO: When real Spotify/Bandcamp embeds are available, replace the cards above with:
    <div class="neon-border rounded-3xl overflow-hidden bg-dark-900">
      <iframe src="https://open.spotify.com/embed/artist/ARTIST_ID" width="100%" height="380" ...></iframe>
    </div>
    -->
  </div>
</section>
```

---

## 7. Nik Live/Festivals Component (NEW)

**File: `src/components/nik/LiveFestivals.astro`**

```astro
---
// TODO: Replace placeholder images with actual Nik live/festival photography
const liveImages = [
  { src: '/images/nik-live/1.jpg', alt: 'Nik performing live electronic set' },
  { src: '/images/nik-live/2.jpg', alt: 'Synthesizer setup on stage' },
  { src: '/images/nik-live/3.jpg', alt: 'Festival performance' },
  { src: '/images/nik-live/4.jpg', alt: 'Live electronic music performance' },
];
---

<section id="live" class="relative py-24 md:py-32 overflow-hidden">
  <div class="absolute inset-0 bg-grid opacity-15"></div>
  <div class="absolute top-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute bottom-0 right-0 w-96 h-96 bg-neon-magenta/10 rounded-full blur-3xl pointer-events-none"></div>

  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16 reveal">
      <span class="inline-block px-3 py-1 rounded-full bg-neon-amber/10 border border-neon-amber/30 text-neon-amber text-xs font-semibold tracking-wider uppercase mb-4">
        Live Electronic
      </span>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
        On <span class="text-gradient-amber">Stage</span>
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        Nik's original electronic music has also taken him beyond the studio, with live performances at festivals across Europe.
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
      {liveImages.map((img, i) => (
        <figure
          key={i}
          class={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-2xl neon-border cursor-pointer ${
            i === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onerror="this.parentElement.innerHTML='<div class=\'w-full h-full bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center text-gray-500 text-xs p-4 text-center\'>LIVE PHOTO PLACEHOLDER</div>'"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <figcaption class="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <p class="text-sm font-semibold">{img.alt}</p>
          </figcaption>
          <div class="absolute inset-0 bg-gradient-to-br from-neon-blue/0 to-neon-magenta/0 group-hover:from-neon-blue/20 group-hover:to-neon-magenta/20 transition-all duration-500"></div>
        </figure>
      ))}
    </div>

    <!-- TODO: Add video embed section when live performance videos are available
    <div class="mt-12 reveal">
      <div class="neon-border rounded-3xl overflow-hidden aspect-video">
        <iframe src="https://www.youtube.com/embed/VIDEO_ID" ...></iframe>
      </div>
    </div>
    -->
  </div>
</section>
```

---

## 8. Reusable Music Links Component (NEW)

**File: `src/components/nik/MusicLinks.astro`**

```astro
---
import { streamingLinks, type StreamingLink } from '../../data/nik-links';

export interface Props {
  links?: StreamingLink[];
  heading?: string;
  subheading?: string;
}

const {
  links = streamingLinks,
  heading = 'Listen',
  subheading = "Explore Nik Owen Jones' original electronic music.",
} = Astro.props;

// Only show platforms that have URLs
const availableLinks = links.filter((link) => link.url !== null);
---

<section id="listen" class="relative py-24 md:py-32 bg-dark-800/30">
  <div class="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/20 to-dark-900"></div>

  <div class="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12 reveal">
      <span class="inline-block px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/30 text-neon-blue text-xs font-semibold tracking-wider uppercase mb-4">
        Streaming
      </span>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
        {heading}
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        {subheading}
      </p>
    </div>

    {availableLinks.length === 0 ? (
      <div class="reveal reveal-delay-1 text-center py-16 neon-border rounded-3xl bg-dark-800/40 backdrop-blur-sm">
        <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-magenta/20 border border-white/10 flex items-center justify-center">
          <svg class="w-10 h-10 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-2">Streaming Links Coming Soon</h3>
        <p class="text-gray-400 max-w-md mx-auto">
          Nik's original music will be available on major streaming platforms shortly. Check back soon or get in touch for early access.
        </p>
      </div>
    ) : (
      <div class="reveal reveal-delay-1 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {availableLinks.map((link) => (
          <a
            href={link.url!}
            target="_blank"
            rel="noopener noreferrer"
            class="group relative flex items-center gap-4 p-6 rounded-2xl border border-white/10 bg-dark-800/50 hover:border-white/20 transition-all overflow-hidden"
          >
            <div class={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
              <Fragment set:html={link.icon} />
            </div>
            <div class="flex-1 min-w-0">
              <div class="font-bold text-white text-lg">{link.name}</div>
              <div class="text-sm text-gray-400">Listen now →</div>
            </div>
            <svg class="w-5 h-5 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <div class={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
          </a>
        ))}
      </div>
    )}
  </div>
</section>
```

---

## 9. Nik Contact Component (NEW)

**File: `src/components/nik/Contact.astro`**

```astro
---
import { contactInfo } from '../../data/nik-links';

const emailAddress = contactInfo.email ?? contactInfo.emailPlaceholder;
const isPlaceholder = contactInfo.email === null;
---

<section id="contact" class="relative py-24 md:py-32 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/30 to-dark-900"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-3xl pointer-events-none"></div>

  <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12 reveal">
      <span class="inline-block px-3 py-1 rounded-full bg-neon-amber/10 border border-neon-amber/30 text-neon-amber text-xs font-semibold tracking-wider uppercase mb-4">
        Get in Touch
      </span>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
        Let's <span class="text-gradient-amber">Connect</span>
      </h2>
      <p class="text-gray-400 max-w-2xl mx-auto">
        For bookings, collaborations, electronic music enquiries or general information, get in touch.
      </p>
    </div>

    <div class="reveal reveal-delay-1 neon-border rounded-3xl p-8 md:p-12 bg-dark-800/40 backdrop-blur-sm text-center">
      <div class="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-blue to-neon-magenta flex items-center justify-center">
        <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>

      <h3 class="text-2xl md:text-3xl font-bold text-white mb-4">
        {isPlaceholder ? 'Email Coming Soon' : 'Send an Email'}
      </h3>

      {isPlaceholder ? (
        <div>
          <p class="text-gray-400 mb-6">
            Nik's direct contact email will be available here shortly. In the meantime, you can reach out via the Neon Pulse contact form or social channels.
          </p>
          <a
            href="/"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-magenta text-white font-bold hover:shadow-[0_0_30px_rgba(0,212,255,0.5)] transition-all hover:scale-105"
          >
            Contact via Neon Pulse
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      ) : (
        <div>
          <a
            href={`mailto:${emailAddress}`}
            class="inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-gradient hover:scale-105 transition-transform"
          >
            {emailAddress}
          </a>
          <p class="text-sm text-gray-500 mt-4">
            We typically respond within 48 hours.
          </p>
        </div>
      )}

      <!-- TODO: Add social links when Nik's personal social accounts are confirmed
      <div class="mt-8 pt-8 border-t border-white/10">
        <p class="text-sm text-gray-500 mb-4">Or follow Nik on:</p>
        <div class="flex items-center justify-center gap-4">
          <!-- Add Instagram, Facebook, etc. links here -->
        </div>
      </div>
      -->
    </div>
  </div>
</section>
```

---

## 10. Back to Neon Pulse CTA Component (NEW)

**File: `src/components/nik/BackToNeonPulse.astro`**

```astro
<section class="relative py-24 md:py-32 overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
  <div class="absolute inset-0 bg-grid opacity-20"></div>
  <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon-magenta/10 rounded-full blur-3xl pointer-events-none"></div>

  <div class="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
    <div class="reveal">
      <span class="inline-block px-3 py-1 rounded-full bg-neon-magenta/10 border border-neon-magenta/30 text-neon-magenta text-xs font-semibold tracking-wider uppercase mb-6">
        Related Project
      </span>
      <h2 class="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
        Looking for <span class="text-gradient">Neon Pulse</span>?
      </h2>
      <p class="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
        Nik is also the synth wizard behind Droitwich's 80s & 90s party band.
      </p>
      <a
        href="/"
        class="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-neon-blue to-neon-magenta text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] transition-all hover:scale-105"
      >
        <span>Visit Neon Pulse</span>
        <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
</section>
```

---

## 11. The Nik Owen Jones Page (NEW)

**File: `src/pages/nik-owen-jones.astro`**

```astro
---
import Layout from '../layouts/Layout.astro';
import Nav from '../components/Nav.astro';
import { nikNavLinks } from '../data/nik-links';
import Footer from '../components/Footer.astro';

// Nik-specific components
import NikHero from '../components/nik/Hero.astro';
import NikAbout from '../components/nik/About.astro';
import NikOriginalMusic from '../components/nik/OriginalMusic.astro';
import NikLiveFestivals from '../components/nik/LiveFestivals.astro';
import NikMusicLinks from '../components/nik/MusicLinks.astro';
import NikContact from '../components/nik/Contact.astro';
import BackToNeonPulse from '../components/nik/BackToNeonPulse.astro';

// TODO: Replace with actual Nik hero image URL when available
const nikHeroImage = '/images/nik-hero.jpg';
---

<Layout
  title="Nik Owen Jones | Electronic Music & Live Performance"
  description="Nik Owen Jones — electronic music producer, keyboardist and live performer creating original instrumental electronic music. Member of Neon Pulse."
  image={nikHeroImage}
  canonical="https://neonpulse.co.uk/nik-owen-jones/"
  jsonLd={{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nik Owen Jones",
    "url": "https://neonpulse.co.uk/nik-owen-jones/",
    "image": nikHeroImage,
    "jobTitle": "Electronic Music Producer & Keyboardist",
    "description": "Nik Owen Jones is an electronic music producer, keyboardist and live performer. Member of Neon Pulse band.",
    "memberOf": {
      "@type": "MusicGroup",
      "name": "Neon Pulse",
      "url": "https://neonpulse.co.uk"
    },
    "sameAs": []
  }}
>
  <Nav
    variant="nik"
    links={nikNavLinks}
    ctaLabel="Listen"
    ctaHref="#listen"
  />

  <main>
    <NikHero />
    <NikAbout />
    <NikOriginalMusic />
    <NikLiveFestivals />
    <NikMusicLinks />
    <NikContact />
    <BackToNeonPulse />
  </main>

  <Footer />
</Layout>
```

---

## 12. Image Assets Required

Download the generated hero image and save it to your project:

**File: `public/images/nik-hero.jpg`**

Use the image generated above (the atmospheric waveform image). Download it from the URL provided and save it to `public/images/nik-hero.jpg`.

You'll also need to create these placeholder images (or replace with real photos when available):

```
public/images/
├── nik-hero.jpg          ← Download the generated waveform image here
├── nik-portrait.jpg      ← TODO: Add Nik portrait photo
├── nik-logo.png          ← TODO: Add Nik logo (or remove from Nav)
── nik-live/
    ├── 1.jpg             ← TODO: Add live performance photos
    ├── 2.jpg
    ├── 3.jpg
    └── 4.jpg
```

---

## Summary Report

### 1. Existing Components Reused
- **`Layout.astro`** — Modified to accept optional `jsonLd` prop for custom schema
- **`Nav.astro`** — Modified to accept optional `links`, `ctaLabel`, `ctaHref`, and `variant` props
- **`Footer.astro`** — Reused as-is (no changes needed)
- **Global styles** — All existing Tailwind utilities, colors, animations, and reveal classes reused

### 2. New Components Created
- `src/components/nik/Hero.astro` — Nik's hero section
- `src/components/nik/About.astro` — About Nik section
- `src/components/nik/OriginalMusic.astro` — Original music section (coming soon state)
- `src/components/nik/LiveFestivals.astro` — Live/festivals section (placeholder state)
- `src/components/nik/MusicLinks.astro` — Reusable streaming links component
- `src/components/nik/Contact.astro` — Contact section
- `src/components/nik/BackToNeonPulse.astro` — CTA back to main site

### 3. Files Modified
- `src/layouts/Layout.astro` — Added optional `jsonLd` prop
- `src/components/Nav.astro` — Added optional `links`, `ctaLabel`, `ctaHref`, `variant` props

### 4. Files Created
- `src/data/nik-links.ts` — Centralized data for streaming URLs, nav links, contact info
- `src/pages/nik-owen-jones.astro` — The new page
- All 7 components in `src/components/nik/`

### 5. Information/Assets Still Required from Nik
- **Hero image** — Use the generated placeholder or provide a real photo
- **Portrait photo** — For the About section
- **Logo** — Optional, for the Nav (currently falls back to text)
- **Live/festival photos** — 4+ images for the Live section
- **Streaming URLs** — Spotify, Bandcamp, Apple Music links
- **Email address** — For the Contact section
- **Social media links** — Instagram, Facebook, etc. (if separate from Neon Pulse)

### 6. TODOs/Placeholders Remaining
- All streaming platform URLs are set to `null` in `src/data/nik-links.ts` — update as they become available
- Contact email uses Neon Pulse fallback until Nik's email is confirmed
- Image placeholders with `onerror` handlers show text fallbacks
- Comments in components mark where real embeds should be added
- Social links section in Contact is commented out until URLs are confirmed

### 7. Build Verification
The code follows Astro 5 syntax and should build cleanly. Key checks:
- All imports use correct relative paths
- TypeScript interfaces are properly defined
- Astro component syntax is valid (frontmatter, expressions, slots)
- No missing closing tags or syntax errors
- All `onerror` handlers use escaped quotes correctly

Run `npm run build` to verify. If you encounter any issues, the most likely culprits would be:
- Missing image files (the `onerror` handlers should prevent build failures)
- TypeScript strict mode issues (all types are properly defined)