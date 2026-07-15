---
title: "Reclaiming the Screen in Dynamics 365"
description: "Led a customer-driven refresh of form density, scrolling, and the summary banner in Dynamics 365, using a high-fidelity prototype with feature flags to validate every fix against today's production experience"
cover: "/images/projects/d365-model-driven-apps/main/cover.jpeg"
tags: ["Dynamics 365", "Model-Driven Apps", "Prototype"]
year: "2026"
order: 2
role: "Principal Design Manager"
company: "Microsoft"
videos:
  - src: "/images/projects/d365-model-driven-apps/video/video_2.mp4"
    thumbnail: "/images/projects/d365-model-driven-apps/video/thumbnail_2.jpg"
    type: "local"
    title: "Reclaiming the Screen, before and after"
    description: "The old experience, the evidence, and each fix in action, from smarter scrolling to density presets"
---

## Overview

Dynamics 365 model-driven apps power the daily work of millions of people, and the same feedback kept arriving from every direction. Too much wasted space, a header and summary that eat the screen, and users forced to scroll before they can see the information they came for. Enterprise customers compared the experience unfavorably to the legacy systems it replaced, and the ask was always the same, let people see more information on a single page.

We treated that repetition as a signal, not noise. I traced the feedback to four structural issues, a fixed header and summary that consume up to 245px before the first field, spacing users cannot control, a confusing three-level disclosure pattern, and a summary banner with no information hierarchy. Grounded in a measured layout study rather than taste, I vibe coded a React prototype on Fluent controls that faithfully mimics today's production experience, then layered every proposed fix behind feature flags. Flipping a flag shows exactly what changes, on the same screen, with the same data. Building on the real component library was deliberate, it made the prototype fast enough for customer validation, and because it speaks the same language as production, the team's developers can lift validated patterns directly into the product instead of rebuilding from mockups. That turned a broad, hard-to-action stream of feedback into a concrete engineering conversation grounded in evidence.

The prototype is live, you can [explore it yourself](https://cimaja.github.io/proto-D365/) (password protected), the same build featured in the [Lab](/lab).

## Key improvements

- Smarter scrolling, where the record header and summary collapse into a compact context bar as you scroll, reclaiming vertical space without losing orientation
- Tighter information density, with Comfortable, Cozy, and Compact presets backed by granular spacing controls, handing the "wasted space I can't control" complaint back to the user, surfaced in Personalization next to light and dark mode
- Simplified how the summary banner expands, two levels instead of three, straight from collapsed to full height, removing the confusing fixed-height intermediate state and the disruptive jump to a modal
- A redesigned summary banner with a real information hierarchy, title, status pill, the correct agent icon, and refresh and age indicators, consistent between collapsed and expanded states
- A banner designed to be future-proof, scaling from today's single-agent needs to tomorrow's multi-agent scenarios, where different agents bring different types of insights, from record summaries to coaching
- A refreshed shell with a light header, updated sitemap, and collapsible navigation, plus agentic grid search for asking questions about data in plain language

## Key responsibilities

- Owned the initiative end to end, from collecting and validating customer feedback to diagnosing the four root causes and designing the fixes
- Vibe coded the prototype in React with Fluent controls, a faithful reproduction of the production experience with feature flags to compare current and future states live, built so validated patterns can move straight to engineering
- Grounded every change in measured space rather than taste, working from a layout study that quantified where the header pixels go across configurations
- Partnered with product leadership to keep grid and form surfaces consistent and sequence the fixes toward engineering
- Used the prototype to validate the changes directly with enterprise customers

## Impact

- Turned sustained customer feedback into one reviewable experience and a concrete, sequenced engineering conversation
- Validated the fixes directly with the enterprise customers who raised the feedback
- Established feature-flag prototyping as a repeatable practice for validating experience changes before committing engineering investment
- Positioned density as a user choice, not a design decree, resolving the tension between modern spacing and enterprise information needs
- Designed the summary banner ahead of the need, ready for multi-agent scenarios before they exist in anyone's roadmap
