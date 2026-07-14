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

Dynamics 365 model-driven apps power the daily work of millions of people, and over months the same complaint kept arriving from every direction. Too much wasted space, a header and summary that eat the screen, and users forced to scroll before they can see the information they came for. Five independent sources raised versions of it, three enterprise customers, Microsoft's field teams, and internal sales. The sharpest version came from a Fortune 500 CTO who compared Dynamics 365 unfavorably to their twenty-year-old legacy system and said users simply want to see more information on a single page.

We treated that repetition as a signal, not noise. The team traced the complaints to four structural issues, a fixed header and summary that consume up to 245px before the first field, spacing users cannot control, a confusing three-level disclosure pattern, and a summary banner with no information hierarchy. Grounded in a measured layout study rather than taste, I vibe coded a React prototype on Fluent controls that faithfully mimics today's production experience, then layered every proposed fix behind feature flags. Flipping a flag shows exactly what changes, on the same screen, with the same data. Building on the real component library was deliberate, it made the prototype fast enough for customer validation, and because it speaks the same language as production, the team's developers can lift validated patterns directly into the product instead of rebuilding from mockups. That turned a broad, hard-to-action stream of feedback into a concrete engineering scoping conversation, and the prototype was demoed directly with the customer who raised the loudest signal.

The prototype is live, you can [explore it yourself](https://cimaja.github.io/proto-D365/) (password protected), the same build featured in the [Lab](/lab).

## Key improvements

- Smarter scrolling, where the record header and summary collapse into a compact context bar as you scroll, reclaiming vertical space without losing orientation
- Tighter information density, with Comfortable, Cozy, and Compact presets backed by granular spacing controls, handing the "wasted space I can't control" complaint back to the user, surfaced in Personalization next to light and dark mode
- Simplified how the summary banner expands, two levels instead of three, straight from collapsed to full height, removing the confusing fixed-height intermediate state and the disruptive jump to a modal
- A redesigned summary banner with a real information hierarchy, title, status pill, the correct agent icon, and refresh and age indicators, consistent between collapsed and expanded states
- A banner designed to be future-proof, scaling from today's single-agent needs to multi-agent scenarios, and sharing it did its job, partner teams are now exploring plugging in multiple agents for different types of insights, from record summaries to coaching
- A refreshed shell with a light header, updated sitemap, and collapsible navigation, plus agentic grid search for asking questions about data in plain language

## Key responsibilities

- Owned the initiative end to end, from collecting and validating the evidence across five independent sources to diagnosing the four root causes and designing the fixes
- Vibe coded the prototype in React with Fluent controls, a faithful reproduction of the production experience with feature flags to compare current and future states live, built so validated patterns can move straight to engineering
- Grounded every change in measured space rather than taste, working from a layout study that quantified where the header pixels go across configurations
- Partnered with principal PMs across Power Apps and Dynamics 365 to keep grid and form surfaces consistent and sequence the fixes toward engineering
- Demoed the prototype directly with the enterprise customer whose feedback started the escalation

## Impact

- Turned five independent streams of customer feedback into one reviewable experience and a concrete, sequenced engineering scoping conversation
- The prototype was demoed with the escalating enterprise customer, closing the loop from complaint to working solution in three months
- Established feature-flag prototyping as a repeatable practice for validating experience changes before committing engineering investment
- Positioned density as a user choice, not a design decree, resolving the tension between modern spacing and enterprise information needs
- Shifted partner thinking by designing ahead of the need, the future-proof multi-agent banner has partner teams exploring new agent-powered insights that did not exist in anyone's plans before
