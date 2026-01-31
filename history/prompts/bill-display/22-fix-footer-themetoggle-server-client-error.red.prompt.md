---
id: 22
title: "Fix Footer ThemeToggle Server/Client Error"
stage: red
date_iso: "2026-01-09"
surface: agent
model: Qwen
feature: "bill-display"
branch: "001-bill-display"
user: hp
command: "Fix Footer ThemeToggle server/client error for Rashan Grocery Website"
labels:
  - "bug-fix"
  - "server-client-error"
  - "footer"
  - "theme-toggle"
  - "nextjs"
  - "react"
links:
  spec: null
  plan: null
  tasks: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - "components/Footer.tsx"
  - "app/client-layout.tsx"
  - "app/layout.tsx"
tests_yaml: []
prompt_text: |
  ## Error Type
  Runtime Error

  ## Error Message
  Attempted to call useTheme() from the server but useTheme is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.


    at ThemeToggle (components\ThemeToggle.tsx:5:42)
    at RootLayout (app\layout.tsx:40:13)

  ## Code Frame
    3 |
    4 | const ThemeToggle = () => {
    > 5 |   const { theme, toggleTheme } = useTheme();
      |                                          ^
    6 |
    7 |   return (
    8 |     <button

  Next.js version: 16.1.1 (Turbopack)

response_text: |
  Successfully fixed the server/client error by:
  - Making Footer component a client component with 'use client' directive
  - Creating a ClientLayout component to wrap client-side components
  - Properly organizing the component hierarchy to ensure ThemeProvider context is available
  - Maintaining all theme functionality while resolving the error

outcome: |
  Resolved the server/client error with Footer's ThemeToggle.
  Theme toggle functionality now works properly in both Navigation and Footer.
  All components properly organized between server and client.

evaluation: |
  The fix successfully resolves the issue:
  ✓ Made Footer a client component
  ✓ Created ClientLayout to properly wrap client components
  ✓ Organized component hierarchy correctly
  ✓ Maintained all theme functionality
  ✓ Resolved runtime error
  ✓ Theme toggle works in both Navigation and Footer
---