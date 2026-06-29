# Design System Reference

This document describes all design tokens and patterns used across the portfolio. Reference this when requesting visual changes.

## Colors

| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0c0c0f` | Page background |
| Card background | `#111116` | Terminal, elevated surfaces |
| Surface | `rgba(255,255,255,0.02)` | Card fills, step blocks |
| Surface hover | `rgba(255,255,255,0.03)` | Hovered card fills |
| Border | `rgba(255,255,255,0.06)` | Card borders, section dividers |
| Border hover | `rgba(255,255,255,0.1)` | Hovered borders |
| Section divider | `rgba(255,255,255,0.04)` | Horizontal rules between sections |
| Text primary | `#e0e0e0` | Body text |
| Text muted | `#888` | Secondary text |
| Text dim | `#555` | Tertiary text, labels |
| Text dimmer | `#444` | Faintest text |
| Purple accent | `#c084fc` | Company names, tool tags, metric labels, links |
| Purple bg | `rgba(147,51,234,0.08)` | Tool tag backgrounds |
| Purple border | `rgba(147,51,234,0.15)` | Tool tag borders |
| Purple hover | `rgba(147,51,234,0.2)` | Hovered tool tag borders, card accents |
| Green accent | `#10b981` | Impact metrics, KPI badges, terminal success |
| Green bg | `rgba(16,185,129,0.08)` | KPI badge backgrounds |
| Green border | `rgba(16,185,129,0.15)` | KPI badge borders |
| Nav background | `rgba(12,12,15,0.8)` | Navigation bar (with blur) |

## Typography

| Context | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Hero heading | Fraunces | clamp(44px, 5vw, 60px) | 700 | #fff |
| Section heading | Fraunces | 44px | 700 | #fff |
| Body text | Inter | 16px | 400 | #e0e0e0 |
| Story narrative | Inter | 19px | 400 | #999 |
| Card title | Inter | 15-17px | 600 | #fff |
| Card description | Inter | 13px | 400 | #666-#777 |
| Impact metric | JetBrains Mono | 36px | 600 | #10b981 |
| Tool tags | JetBrains Mono | 11px | 400 | #c084fc |
| KPI badges | JetBrains Mono | 11px | 400 | #10b981 |
| Experience date | JetBrains Mono | 13px | 400 | #555 |
| Terminal content | JetBrains Mono | 13px | 400 | #888 |
| Nav name | Inter | 14px | 500 | #e0e0e0 |
| Nav links | Inter | 13px | 400 | #888 (hover: #fff) |
| Footer | JetBrains Mono | 12px | 400 | #444 |
| Labels/uppercase | JetBrains Mono | 11px | 400 | #555 |
| Drop cap | Fraunces | 64px | 400 | #fff |

## Spacing

| Context | Value |
|---------|-------|
| Section padding (vertical) | 120px |
| Section padding (horizontal) | 60px (desktop), 40px (tablet), 20px (mobile) |
| Card padding | 32px |
| Card gap (grids) | 20-24px |
| Hero meta gap | 32px |
| Nav padding | 16px 48px |

## Borders and Radii

| Context | Border | Radius |
|---------|--------|--------|
| Cards | 1px solid rgba(255,255,255,0.06) | 16px |
| Terminal | 1px solid rgba(255,255,255,0.08) | 12px |
| Tool tags | 1px solid rgba(147,51,234,0.15) | 100px |
| KPI badges | 1px solid rgba(16,185,129,0.15) | 100px |
| Section dividers | border-top: 1px solid rgba(255,255,255,0.04) | n/a |
| Nav | border-bottom: 1px solid rgba(255,255,255,0.04) | n/a |

## Cards

All cards follow this pattern:
- Background: `rgba(255,255,255,0.02)`
- Border: `1px solid rgba(255,255,255,0.06)`
- Border radius: 16px
- Hover: border color shifts to accent color (purple for design cards, green for impact cards)
- Transition: 0.3s

## Tags and Badges

**Tool tags (purple):**
- Background: `rgba(147,51,234,0.08)`
- Border: `1px solid rgba(147,51,234,0.15)`
- Text: `#c084fc`
- Font: JetBrains Mono 11px
- Border radius: 100px
- Padding: 3px 10px

**KPI badges (green):**
- Background: `rgba(16,185,129,0.08)`
- Border: `1px solid rgba(16,185,129,0.15)`
- Text: `#10b981`
- Font: JetBrains Mono 11px
- Border radius: 100px
- Padding: 4px 12px

## Animations

| Animation | Duration | Easing | Notes |
|-----------|----------|--------|-------|
| Terminal line reveal | 0.05s | forwards | Each line delayed by 0.4s from previous |
| Terminal typing | 0.6s | steps(30) | Character-by-character |
| Terminal cursor blink | 0.8s | step-end | Infinite on last line only |
| Testimonial scroll | 180s | linear | Infinite loop, pauses on hover |
| Hover transitions | 0.3s | ease | Border color, background, transform |
| Project card lift | 0.3s | ease | translateY(-4px) on hover |
| Page transition | 0.3s | easeInOut | Fade + slide via Framer Motion |

## Responsive Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | < 768px | Single column, stack hero vertically, hide divider circle |
| Tablet | 768-1024px | 2-column grids, hero stays split or stacks |
| Desktop | > 1024px | Full multi-column layouts, 4-step workflow row |
