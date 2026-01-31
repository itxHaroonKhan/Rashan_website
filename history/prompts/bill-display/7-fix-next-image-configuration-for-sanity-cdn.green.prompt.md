---
id: 7
title: "Fix Next Image Configuration for Sanity CDN"
stage: green
date_iso: "2026-01-09"
surface: agent
model: Qwen
feature: "bill-display"
branch: "001-bill-display"
user: hp
command: "Fix Next.js Image component configuration for Sanity CDN"
labels:
  - "bug-fix"
  - "nextjs"
  - "images"
  - "sanity"
  - "cdn"
links:
  spec: null
  plan: null
  tasks: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - "next.config.ts"
tests_yaml: []
prompt_text: |
  Runtime Error:
  Invalid src prop (https://cdn.sanity.io/images/50gs5yhs/production/c1a3e281555308851adfd36d5c3797a404c22084-864x1184.png) on `next/image`, hostname "cdn.sanity.io" is not configured under images in your `next.config.js`
  See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host

response_text: |
  Fixed the Next.js Image component configuration issue by updating the next.config.ts file to include the Sanity CDN in the remotePatterns configuration. Added 'cdn.sanity.io' to both the domains and remotePatterns arrays to allow images from the Sanity CDN.

outcome: |
  Resolved the runtime error with Next.js Image component when loading images from Sanity CDN.
  Images now load properly from the Sanity CDN without configuration errors.

evaluation: |
  The fix successfully resolves the issue:
  ✓ Added cdn.sanity.io to remotePatterns in next.config.ts
  ✓ Images from Sanity CDN now load without errors
  ✓ No more "hostname not configured" errors
---