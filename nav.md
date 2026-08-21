# Nav Component Guide: Dual-Site Implementation

## Overview

The Nav component uses a **variant-based architecture** that allows it to serve both the Neon Pulse homepage and Nik Owen Jones' secondary page while maintaining a single source of truth. This approach eliminates code duplication while allowing each site to have its own navigation structure.

---

## Component Architecture

### How It Works

The Nav component accepts **four optional props** that control its behavior:

```astro
---
export interface Props {
  links?: Array<{ href: string; label: string }>;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: 'neon-pulse' | 'nik';
}
---
```

### Prop Breakdown

| Prop | Purpose | Default | Neon Pulse | Nik Owen Jones |
|------|---------|---------|------------|----------------|
| `variant` | Determines logo, home link, and styling | `'neon-pulse'` | `'neon-pulse'` | `'nik'` |
| `links` | Navigation menu items | Neon Pulse links | About, Gigs, Music, Gallery, Contact | About, Music, Live, Listen, Contact |
| `ctaLabel` | CTA button text | `'Book Now'` | `'Book Now'` | `'Listen'` |
| `ctaHref` | CTA button destination | `'#contact'` | `'#contact'` | `'#listen'` |

---

## Step-by-Step Implementation Guide

### Step 1: Understand the Variant Logic

The component uses the `variant` prop to determine:

```astro
const isNik = variant === 'nik';
const logoSrc = isNik ? '/images/nik-logo.png' : '/images/logo.png';
const logoAlt = isNik ? 'Nik Owen Jones logo' : 'Neon Pulse band logo';
```

**What this means:**
- When `variant="nik"` → loads Nik's logo and sets home link to `/nik-owen-jones/`
- When `variant="neon-pulse"` (or no variant) → loads Neon Pulse logo and sets home link to `#home`

### Step 2: Implement for Neon Pulse (Homepage)

**File: `src/pages/index.astro`**

```astro
---
import Layout from '../layouts/Layout.astro';
import Nav from '../components/Nav.astro';
// ... other imports
---

<Layout title="Neon Pulse | UK Rock & Pop Covers Band">
  <!-- Option A: Use defaults (recommended for simplicity) -->
  <Nav />
  
  <!-- Option B: Explicit props (if you need customization) -->
  <Nav
    variant="neon-pulse"
    links={[
      { href: '#about', label: 'About' },
      { href: '#gigs', label: 'Gigs' },
      { href: '#music', label: 'Music' },
      { href: '#gallery', label: 'Gallery' },
      { href: '#contact', label: 'Contact' },
    ]}
    ctaLabel="Book Now"
    ctaHref="#contact"
  />
  
  <main>
    <!-- ... page content -->
  </main>
  <Footer />
</Layout>
```

**Key Points:**
- Using `<Nav />` with no props applies all defaults
- The component automatically uses Neon Pulse links, CTA, and logo
- No need to specify `variant="neon-pulse"` since it's the default

### Step 3: Implement for Nik Owen Jones (Secondary Page)

**File: `src/pages/nik-owen-jones.astro`**

```astro
---
import Layout from '../layouts/Layout.astro';
import Nav from '../components/Nav.astro';
import { nikNavLinks } from '../data/nik-links';
// ... other imports
---

<Layout title="Nik Owen Jones | Electronic Music & Live Performance">
  <Nav
    variant="nik"
    links={nikNavLinks}
    ctaLabel="Listen"
    ctaHref="#listen"
  />
  
  <main>
    <!-- ... page content -->
  </main>
  <Footer />
</Layout>
```

**Key Points:**
- `variant="nik"` triggers Nik-specific behavior
- `links={nikNavLinks}` imports from centralized data file
- CTA changes to "Listen" pointing to `#listen` section

### Step 4: Centralize Navigation Data

**File: `src/data/nik-links.ts`**

```typescript
export interface NavLink {
  href: string;
  label: string;
}

export const nikNavLinks: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#music', label: 'Music' },
  { href: '#live', label: 'Live' },
  { href: '#listen', label: 'Listen' },
  { href: '#contact', label: 'Contact' },
];
```

**Benefits:**
- Single source of truth for Nik's navigation
- Easy to update in one place
- Type-safe with TypeScript
- Can be reused across multiple pages if needed

---

## Mobile Menu Behavior

### How It Works

The mobile menu is controlled by a button that toggles the `hidden` class:

```astro
<button
  id="mobile-menu-btn"
  class="md:hidden p-2 text-gray-300 hover:text-neon-blue"
  aria-label="Toggle menu"
  aria-expanded="false"
>
  <!-- hamburger icon -->
</button>

<div id="mobile-menu" class="md:hidden hidden mt-2 rounded-2xl ...">
  <ul class="flex flex-col p-4 gap-1">
    {navLinks.map((link) => (
      <li>
        <a href={link.href} class="block px-4 py-3 ...">
          {link.label}
        </a>
      </li>
    ))}
    <li class="pt-2">
      <a href={ctaHref} class="block text-center ...">
        {ctaLabel}
      </a>
    </li>
  </ul>
</div>
```

### Client-Side Script

```astro
<script>
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  
  btn?.addEventListener('click', () => {
    const isOpen = !menu?.classList.contains('hidden');
    menu?.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
  
  // Auto-close menu when a link is clicked
  menu?.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => menu.classList.add('hidden'));
  });
</script>
```

**Key Features:**
- Toggle button shows/hides mobile menu
- Menu auto-closes when any link is clicked
- Proper ARIA attributes for accessibility
- Works identically for both variants (uses the same `navLinks` variable)

---

## Advanced Usage Scenarios

### Scenario 1: Custom CTA for a Specific Page

If you need a different CTA on a one-off page:

```astro
<Nav
  variant="neon-pulse"
  ctaLabel="Get Tickets"
  ctaHref="/tickets"
/>
```

### Scenario 2: Different Links for a Sub-Page

If you create a sub-page with different navigation:

```astro
<Nav
  variant="neon-pulse"
  links={[
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]}
/>
```

### Scenario 3: No CTA Button

If you want to hide the CTA button entirely:

```astro
<Nav
  variant="nik"
  links={nikNavLinks}
  ctaLabel=""
  ctaHref="#"
/>
```

Then modify the Nav component to conditionally render:

```astro
{ctaLabel && (
  <a href={ctaHref} class="...">
    {ctaLabel}
  </a>
)}
```

---

## Best Practices

### 1. Use Defaults When Possible

For the Neon Pulse homepage, just use `<Nav />` with no props. This keeps your code clean and makes the default behavior explicit.

### 2. Centralize Repeated Data

If you find yourself copying the same `links` array across multiple pages, move it to a data file:

```typescript
// src/data/neon-pulse-links.ts
export const neonPulseNavLinks = [
  { href: '#about', label: 'About' },
  // ...
];
```

### 3. Keep Variants Simple

The `variant` prop should only control visual/branding differences (logo, home link). Use the other props for content differences (links, CTA).

### 4. Test Both Variants

When modifying the Nav component, always test:
- Neon Pulse homepage (desktop + mobile)
- Nik Owen Jones page (desktop + mobile)
- Edge cases (long link names, missing logo image)

### 5. Maintain Accessibility

The component includes:
- `aria-label` on the toggle button
- `aria-expanded` to indicate menu state
- Semantic HTML (`<nav>`, `<ul>`, `<li>`)
- Keyboard navigation (native browser behavior)

---

## Troubleshooting

### Issue: Mobile menu doesn't close after clicking a link

**Solution:** Ensure the client-side script is included in the component. The script must be inside the component's `<script>` tag (not in the Layout).

### Issue: Logo doesn't appear

**Solution:** Check that the logo file exists at the expected path:
- Neon Pulse: `/images/logo.png`
- Nik: `/images/nik-logo.png`

The component includes `onerror="this.style.display='none'"` to hide broken images gracefully.

### Issue: Wrong home link

**Solution:** Verify the `variant` prop is set correctly:
- `variant="nik"` → home link is `/nik-owen-jones/`
- `variant="neon-pulse"` or no variant → home link is `#home`

### Issue: Mobile menu doesn't toggle

**Solution:** Check browser console for JavaScript errors. The script uses `getElementById`, so ensure the IDs match exactly:
- Button: `id="mobile-menu-btn"`
- Menu: `id="mobile-menu"`

---

## Summary

The Nav component's dual-site architecture works through:

1. **Variant prop** → Controls branding (logo, home link)
2. **Links prop** → Controls navigation items
3. **CTA props** → Controls the call-to-action button
4. **Defaults** → Provides sensible fallbacks for Neon Pulse
5. **Client-side script** → Handles mobile menu toggle

This approach gives you:
- ✅ Single component for both sites
- ✅ Easy customization per page
- ✅ Centralized data management
- ✅ Consistent behavior across variants
- ✅ Minimal code duplication

By following this guide, you can maintain a clean, efficient navigation system that serves both Neon Pulse and Nik Owen Jones while keeping the codebase simple and maintainable.