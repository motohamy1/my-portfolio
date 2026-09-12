---
name: Hippocamp — The Memory Vault
description: A nocturnal, intimate dark-velvet portfolio system where work is exhibited like glowing artifacts in a memory palace.
colors:
  vault-black: "#030306"
  vault-near-black: "#05050a"
  spotlight-cream: "#EFFBBB"
  parchment: "#EEEBE5"
  ember-rust: "#9D1F15"
  curtain-wine: "#722F37"
  shadow-forest: "#0A1A1D"
  exhibit-blush: "#FFD8D1"
  exhibit-sky: "#DCF5FF"
  exhibit-butter: "#FFEDCA"
  exhibit-peach: "#FFF0E5"
  tile-slate-teal: "#2C5364"
  tile-stone: "#ADA996"
  tile-pale-butter: "#FBF7BA"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw + 1rem, 3rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "normal"
  legacy-script:
    fontFamily: "'Brush Script MT', cursive"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "24px"
  pill: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "48px"
components:
  nav-pill:
    backgroundColor: "rgba(0,0,0,0.4)"
    textColor: "{colors.spotlight-cream}"
    rounded: "{rounded.pill}"
    height: "56px"
  nav-item-active:
    backgroundColor: "{colors.spotlight-cream}"
    textColor: "{colors.vault-black}"
    rounded: "{spacing.sm}"
    padding: "8px 16px"
  button-solid:
    backgroundColor: "{colors.vault-black}"
    textColor: "{colors.spotlight-cream}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
  card-project:
    backgroundColor: "{colors.spotlight-cream}"
    textColor: "#525252"
    rounded: "{rounded.lg}"
    padding: "24px"
  chip-contact:
    backgroundColor: "{colors.curtain-wine}"
    textColor: "{colors.spotlight-cream}"
    rounded: "{rounded.md}"
    padding: "16px"
  tile-skill:
    backgroundColor: "{colors.exhibit-blush}"
    textColor: "{colors.vault-black}"
    rounded: "{rounded.md}"
    size: "64px"
  accordion-service:
    backgroundColor: "{colors.vault-near-black}"
    textColor: "{colors.spotlight-cream}"
    rounded: "{rounded.xl}"
    height: "160px"
---

# Design System: Hippocamp — The Memory Vault

## 1. Overview

**Creative North Star: "The Memory Vault"**

A nocturnal, intimate gallery: the visitor descends into near-black space where their eye has adjusted to one warm light source. The site's own name is the concept — the hippocampus is the brain's memory organ, and this portfolio is a memory palace of everything built and learned. Sections are rooms; the Skills dome is the constellation of recall at the vault's center; project exhibits glow like artifacts under glass. Depth is ambient, not structural: colored glows in forest and near-black stand in for light falloff, and the pastel exhibit palette (blush, sky, butter, peach) is the warm reflection bouncing off the artifacts, not a separate candy shop.

This system explicitly rejects the three anti-references from PRODUCT.md: **generic AI-portfolio slop** (cream/beige minimal templates, hero-metric stat trios, `01 · About` eyebrows, icon-card grids), **corporate SaaS polish** (the "Hi, I'm ___" starter template, blue-gradient trust-face), and **gimmicky 3D-for-3D's-sake** (perpetual spinners, physics toys with no payoff). Motion here is choreography that guides attention through the palace — every reveal, tilt, and drag must degrade to a calm, fully-visible state under `prefers-reduced-motion`.

**Key Characteristics:**
- Near-black stage (`vault-black` → `vault-near-black` radial) with a single cream light source; contrast is dramatic, not washed.
- Warm pastel "exhibit" surfaces used sparingly as reflections of the light, never as page backgrounds.
- Tactile, playful components: drag, tilt, hover-expand — motion as affordance, each with a reduced-motion alternative.
- One deliberate display voice paired with Geist; a maximum of two families (the legacy script and stray serif are deprecated — see Typography).
- Generous nocturnal spacing: rooms breathe; nothing is crammed into the dark.

## 2. Colors

The palette is a candlelit vault: two near-blacks for the stage, one cream for the light, warm reds for ember accents, and four pastels for exhibit surfaces.

### Primary
- **Spotlight Cream** (#EFFBBB): the light source. Body text on dark, active-nav fill, hover target of dark surfaces. At 18.7:1 on vault-black it is the most legible thing in the room — keep it that way.
- **Ember Rust** (#9D1F15): the match strike. Reserved for the wordmark and large display numerals only. **Contrast caution:** 2.6:1 on vault-black fails AA even at large sizes — on dark it must lighten (target ≥3:1, e.g. ~#C9483A) or appear only on pastel exhibit surfaces where it clears 6:1.

### Secondary
- **Curtain Wine** (#722F37): contact icon chips and link hover states. Same caution: wine-on-black hover (2.1:1) is prohibited; hover shifts must stay ≥4.5:1 — use cream→ember on dark, or wine fills with cream text (8.4:1, compliant).

### Tertiary
- **Exhibit Pastels** (blush #FFD8D1, sky #DCF5FF, butter #FFEDCA, peach #FFF0E5): artifact surfaces — project cards, skill tiles, service accents. Each pairs with a deep ink of its own hue family (e.g. #5C2B29 on blush, #14532D on butter). White text on any pastel is prohibited; so is the stone-grey #ADA996 and pale-butter #FBF7BA with white ink (2.3:1 — fails).
- **Tile Slate-Teal** (#2C5364): the one dark exhibit tile; white text on it is compliant (6.6:1).

### Neutral
- **Vault Black** (#030306): page base. **Vault Near-Black** (#05050a): gradient crown at top of viewport, dome backdrop.
- **Shadow Forest** (#0A1A1D): colored ambient falloff for glows and borders, never text.
- **Parchment** (#EEEBE5): secondary paragraph tone inside hero panels.

### Named Rules
**The One Light Source Rule.** Cream is the only "white" in the system. Every light value on a dark surface descends from it; introducing a second cool white or gray text on black is forbidden.
**The Ember Rarity Rule.** Rust and wine together occupy ≤10% of any screen. Their power is the strike of a match in the dark; dilute them and the vault goes flat.
**The Pastel-Reflection Rule.** Exhibit pastels appear only as object surfaces (cards, tiles), never as page backgrounds — the page is always the dark.

## 3. Typography

**Display Font:** Geist, system-ui, sans-serif (weight 800 for section displays)
**Body Font:** Geist, system-ui, sans-serif (400/500)
**Label/Mono Font:** Geist Mono variable exists but is unused — deploy it only for metadata-style labels if the typeset pass chooses, otherwise delete.

**Character:** Geist carries everything today; the system is mid-migration. The legacy script ('Brush Script MT') and a stray Tailwind serif stack in the services accordion are documented as deprecated, not endorsed — the planned typeset pass will replace the script with one deliberately loaded display face (next/font), keeping Geist as body.

### Hierarchy
- **Display** (800, clamp(30px, 4vw+1rem, 48px), 1.15): section headings — "My services", "Skills, Tools & Tech", "Projects I've worked on", "Get in touch". Char-stagger reveal via SplitText; must remain visible (no opacity-gate) under reduced motion.
- **Headline** (800, text-3xl/4xl, 1.2): the hero value statement — currently a span; it is the page's single h1 and must be marked as one.
- **Title** (700, 20px, 1.3): project card titles, sub-section labels like "Web Development".
- **Body** (400, 16px, 1.6): descriptions; cap 65–75ch.
- **Body Small** (400, 14px, 1.6): card copy, contact hints. Ink must clear 4.5:1 on its surface (neutral-500 on cream fails at 4.3:1 — darken to neutral-600+).
- **Label** (700, 12px): button text, tooltips, tile captions.

### Named Rules
**The Two-Voice Ceiling.** Two families maximum: one display, one body. The legacy script counts against that budget until the typeset pass retires it; the services serif is an immediate violation to fix.
**The Readable-Light Rule.** Light text on the dark stage gets +0.05–0.1 line-height; cream type reads lighter than it is.

## 4. Elevation

The vault uses layered glow, not structural shadow: depth is ambient light falloff from the single source. Surfaces at rest are defined by their own color against the dark, and shadows appear as colored halos (forest/near-black tints) that suggest the object displaces darkness. There is no white-page elevation ladder here — do not import Material-style gray drop shadows onto a dark stage; they read as dirt.

### Shadow Vocabulary
- **Ambient Halo** (`box-shadow: 0 0 32px rgba(10,26,29,0.5)` style forest-tinted glows, as on hero panels): large feature surfaces at rest.
- **Lift Glow** (`shadow-emerald-500/[0.1]` family — tinted, wide, low-opacity): hover state on exhibit cards; the card leans toward the light.
- **Artifact Drop** (`0 10px 30px rgba(0,0,0,.35)`): the one true shadow, reserved for the dome's enlarged viewer overlay — the only moment an artifact leaves its shelf.
- **Nav Veil** (`shadow-lg` under `backdrop-blur-xl` on `bg-black/40`): the floating pill; blur is permitted here only, as the vault's glass case — not as a general card treatment.

### Named Rules
**The Light-Falloff Rule.** Shadows on this stage are tinted (forest, near-black) or invisible — never neutral gray. If it looks like a 2014 modal shadow, it's wrong.
**The One Artifact Rule.** Only the dome's opened tile gets a true dark drop shadow; everything else stays in ambient glow.

## 5. Components

### Buttons
- **Shape:** gently curved (12px) or full pill for nav; never over-rounded.
- **Primary (solid):** vault-black fill, cream text (label 12px bold), 8×16px padding — the inverted chip on cream exhibit cards.
- **Hover / Focus:** opacity shift or underline; focus-visible ring must be cream at ≥3:1 against the surface (browser default ring on black/60 is invisible — style it).

### Chips
- **Contact chip:** wine fill (#722F37), cream icon, 12px radius, 16px padding — an ember square marking each vault door.
- **Skill tile:** pastel fill, deep hue-matched ink, icon + label bold 14–16px; white ink on stone #ADA996 is prohibited (2.3:1).

### Cards / Containers
- **Corner Style:** 16px (project cards); 24px is the ceiling and only for hero panels and service rows.
- **Background:** exhibit pastels or cream on the dark stage; project cards are cream with neutral-600+ ink.
- **Shadow Strategy:** reference Elevation — Ambient Halo at rest, Lift Glow on hover, 3D tilt (±25° max, mouse only, disabled under reduced motion).
- **Border:** none on cards; the dark stage is the border.
- **Internal Padding:** 24px.

### Inputs / Fields
- None exist yet (no form). When added: cream text on vault-black field, 1px cream/20 stroke, 12px radius, ember-rust focus glow.

### Navigation
- **Style:** floating pill (desktop: full radius; mobile: 24px), `bg-black/40-60` + backdrop-blur, 1px cream/20 border.
- **Typography:** display face (legacy script today), 24px; active item = cream fill, vault-black ink, pill radius.
- **States:** hover scale 1.10 (200ms); active-section tracked by IntersectionObserver; mobile menu max-height collapse, 300ms, tap-to-close.

### Signature: The Dome Gallery
Pure CSS-3D sphere of skill tiles (35 segments, ~175 repeated tiles) on vault-near-black; drag with inertia (2× dampening), tap/Enter opens a tile to the Artifact Drop viewer, Esc closes. Tiles must carry their skill name in the accessible label and activate by keyboard — "Open image" ×175 is a bug, not a feature. Reduced motion: static dome, no inertia, instant open/close.

## 6. Do's and Don'ts

### Do:
- **Do** keep body text ≥4.5:1 and large text ≥3:1 on every surface — cream on vault-black (18.7:1) is the reference pair; check every pastel/ink combination before shipping.
- **Do** give every animation a `prefers-reduced-motion: reduce` branch: crossfade or instant state, content visible by default without JS.
- **Do** treat the dome, tilt, and hover-expand as affordances that also work by keyboard and tap — tactile and playful includes everyone.
- **Do** use exhibit pastels as object surfaces only, with their own deep hue-matched ink.
- **Do** keep ember/wine together under 10% of any screen (The Ember Rarity Rule).
- **Do** style focus-visible rings in cream at ≥3:1 — the dark stage eats defaults.

### Don't:
- **Don't** rebuild the hero as a "big number, small label, supporting stats" block — the **hero-metric template** is banned; the +3/+30/+1 trio must go.
- **Don't** ship **generic AI-portfolio slop**: cream/beige page backgrounds, `01 ·` eyebrows, icon + heading + text card grids repeated identically (the six-column contact grid is the current offender — restructure toward one action).
- **Don't** drift into **corporate SaaS polish**: sanitized blue gradients, "Hi, I'm ___ 👋" filler, trust-badge copy.
- **Don't** add **gimmicky 3D-for-3D's-sake**: no bounce/elastic easing (the `bounce.inOut` background tween is prohibited), no perpetual spinners, no motion without payoff.
- **Don't** use `ease: 'bounce.*'` or `elastic` anywhere; exponential ease-outs (power2–power4, expo) only.
- **Don't** put white text on pastels or stone-grey tiles, rust or wine text on near-black, or neutral-500 body on cream — all fail AA.
- **Don't** exceed 24px radius on cards (pill is for buttons/nav only); 32px+ is the codex tell.
- **Don't** pair a 1px border with a wide (≥16px blur) drop shadow on the same element as decoration.
- **Don't** gate section content visibility on scroll-triggered classes; headings must render visible without JS.
- **Don't** use `font-cursive` or `font-serif` for new content — the type system is two voices, pending the typeset pass.
- **Don't** introduce glassmorphism beyond the nav veil; the vault has one glass case.
