---
id: 21
title: "Fix Theme Provider Server/Client Error"
stage: red
date_iso: "2026-01-09"
surface: agent
model: Qwen
feature: "bill-display"
branch: "001-bill-display"
user: hp
command: "Fix theme provider server/client error for Rashan Grocery Website"
labels:
  - "bug-fix"
  - "server-client-error"
  - "theme-provider"
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
  - "app/theme-provider-wrapper.tsx"
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
  - Creating a ThemeProviderWrapper client component
  - Moving the ThemeProvider to the client side
  - Properly separating server and client components
  - Maintaining all theme functionality while resolving the error

outcome: |
  Resolved the server/client error with theme provider.
  Theme toggle functionality now works properly.
  All components properly separated between server and client.

evaluation: |
  The fix successfully resolves the issue:
  ✓ Created ThemeProviderWrapper client component
  ✓ Moved ThemeProvider to client side
  ✓ Separated server and client components properly
  ✓ Maintained all theme functionality
  ✓ Resolved runtime error
  ✓ Theme toggle works correctly
---