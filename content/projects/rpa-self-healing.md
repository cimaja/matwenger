---
title: "RPA Self-healing with Copilot"
description: "Designed a self-healing system for Power Automate Desktop that automatically repairs broken UI selectors during runtime using Copilot, enabling reliable automation even when application interfaces change"
cover: "/images/projects/rpa-self-healing/main/cover.jpg"
tags: ["AI", "RPA", "Vision"]
year: "2024"
role: "Senior Design Manager"
company: "Microsoft"
videos:
  - src: "/images/projects/rpa-self-healing/video/video_0_with_audio.mp4"
    thumbnail: "/images/projects/rpa-self-healing/video/video_0_with_audio.png"
    type: "local"
    title: "Power Automate Self-healing System"
    description: "Introducing AI-powered self-healing for cloud flows"
gallery:
  - src: "/images/projects/rpa-self-healing/gallery/img_1.jpg"
    alt: "A desktop flow pauses when a UI element cannot be found"
  - src: "/images/projects/rpa-self-healing/gallery/img_2.jpg"
    alt: "Copilot analyzes the UI while preparing a selector repair"
  - src: "/images/projects/rpa-self-healing/gallery/img_3.jpg"
    alt: "The suggested selector is presented for review and application"
  - src: "/images/projects/rpa-self-healing/gallery/img_4.jpg"
    alt: "The selector update is being applied"
  - src: "/images/projects/rpa-self-healing/gallery/img_5.jpg"
    alt: "Confirmation that the selector was updated"
  - src: "/images/projects/rpa-self-healing/gallery/img_6.jpg"
    alt: "The desktop flow continues with the repaired selector"
caseStudy:
  headline:
    title: 'When the UI changes,'
    emphasis: keep work moving.
  introduction: >-
    Helping desktop automations recover when an interface changes. I led the
    design of a Copilot experience that identifies broken selectors, proposes
    repairs and helps people keep their flows running.
  leadMedia:
    kind: video
    index: 1
    caption: Self-healing with Copilot · Repairing a desktop automation
  overview:
    - label: The challenge
      title: A small change can break a flow.
      body: >-
        UI and web automations depend on selectors. When an application changes,
        an automation can lose the element it needs.
    - label: My contribution
      title: Make recovery understandable.
      body: >-
        I designed the experience for reviewing and applying Copilot’s
        suggestions, working with engineering on attended and unattended
        scenarios.
    - label: The outcome
      title: 'Repair, then continue.'
      body: >-
        Copilot uses the old selector and UI hierarchy to locate the right
        element. Repaired selectors can be saved for future runs.
  experience:
    title: Find the break.
    emphasis: Find a way through.
    description: >-
      A repair sequence in Power Automate for desktop, from an invalid selector
      to a running flow.
    steps:
      - label: Detect
        title: Recognize the interruption.
        body: >-
          A desktop flow encounters an element it can no longer locate. The
          failed selector becomes the starting point for recovery.
        image: 1
        caption: The automation pauses when the expected UI element cannot be found.
      - label: Review
        title: Make the repair visible.
        body: >-
          Copilot analyzes the interface and suggests an updated selector. The
          attended experience gives the person a place to review and apply the
          suggestion.
        image: 3
        caption: The proposed selector is presented for review before it is applied.
      - label: Continue
        title: Get the flow moving again.
        body: >-
          With the selector updated, the flow can resume. The repair can also be
          kept for future runs.
        image: 6
        caption: The desktop flow continues with the repaired selector.
  decisions:
    title: Recovery people
    emphasis: can understand.
    description: >-
      The design makes an automated repair legible while supporting different
      ways of running desktop flows.
    items:
      - title: Explain what Copilot is repairing.
        body: >-
          The review interface brings the suggested selector into the
          foreground, helping people understand the change before applying it.
        image: 2
        caption: >-
          Copilot analyzes the available UI information while preparing a
          repair.
      - title: Design for both operating modes.
        body: >-
          I partnered with engineering on attended and unattended automation.
          The experience had to support a person at the desktop as well as flows
          running without supervision.
      - title: Keep successful repairs useful.
        body: >-
          Allowing repaired selectors to be saved reduces the need to repeat the
          same manual maintenance on later runs.
        image: 5
        caption: Confirmation that the selector update has been applied.
  outcomes:
    title: Less maintenance.
    emphasis: More continuity.
    description: >-
      The work established a foundation for repairing UI automations as
      applications change.
    items:
      - label: Reliability
        title: Recover from interface changes.
        body: >-
          The flow can locate and repair invalid selectors during runtime,
          reducing interruptions caused by UI changes.
      - label: Maintenance
        title: Reduce repeated fixes.
        body: >-
          Saved repairs reduce the need for manual selector updates on
          subsequent runs.
      - label: Operating modes
        title: Support unattended work.
        body: The approach covers both attended and unattended automation scenarios.
---

## Overview

The Self-healing with Copilot feature in Power Automate for desktop is designed to enhance the reliability of UI and web automation by automatically locating and repairing UI elements during runtime. This feature leverages Copilot to identify and fix invalid selectors, ensuring that automation processes can continue smoothly even when UI elements change. It works in both attended and unattended modes, providing old selectors and UI hierarchy to Copilot for accurate repairs. Additionally, users can save the repaired selectors for future use, ensuring ongoing automation success.

Key capabilities include:

* Automatic detection of invalid UI selectors during runtime
* Real-time repair of broken selectors using Copilot
* Support for both attended and unattended automation
* Intelligent analysis of UI hierarchy for accurate repairs
* Ability to save and reuse repaired selectors

## Key Responsibilities

* Led the design and implementation of the AI-powered self-healing system for Power Automate Desktop
* Created an intuitive interface for reviewing and applying Copilot's repair suggestions
* Collaborated with engineering teams to implement feature for attended and unattended modes

## Impact

The Self-healing with Copilot feature has transformed UI automation reliability:

* Significantly reduced automation failures due to UI changes
* Enabled continuous operation in both attended and unattended scenarios
* Decreased maintenance time for UI automation flows
* Improved automation reliability across different applications
* Reduced the need for manual selector updates
* Enhanced user confidence in long-running automation processes
* Established a foundation for self-healing UI automation
