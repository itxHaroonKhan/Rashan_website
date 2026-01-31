---
id: 1
title: "Rashan Grocery Website Constitution"
stage: constitution
date_iso: "2026-01-09"
surface: agent
model: Qwen
feature: "rashan-grocery-website"
branch: "main"
user: hp
command: "/sp.constitution Create a Spec-Kit Plus sp.constitution for a Rashan (grocery) website."
labels:
  - "constitution"
  - "rashan"
  - "grocery"
  - "nextjs"
  - "sanity-cms"
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files_yaml:
  - ".specify/memory/constitution.md"
  - ".specify/templates/plan-template.md"
  - ".specify/templates/spec-template.md"
  - ".specify/templates/tasks-template.md"
tests_yaml: []
prompt_text: |
  /sp.constitution Create a Spec-Kit Plus sp.constitution for a Rashan (grocery) website.

  Requirements:

  1. **Purpose:** Show full bill to the user with product details.
  2. **Scope:**
     - Cart items
     - Quantity per item
     - Price per item
     - Total price
     - Product name, description, image
  3. **Frontend Display:**
     - Bill should be readable, clear, mobile-friendly
     - Product image on left, details on right
     - Quantity selector visible
     - Total amount at bottom
  4. **Technical:**
     - Next.js App Router
     - Fetch data from Sanity CMS (published products)
     - Client-side cart state (Context API or useState)
     - Auto-update totals when quantity changes
  5. **No unnecessary features:** 
     - Ignore login/auth
     - Ignore payment gateway
  6. **User Experience:**
     - Admin adds products in Sanity Studio
     - User sees live updated bill
     - Clear distinction between product price, subtotal, total
  7. **Output:** 
     - Structured sp.constitution file in Spec-Kit Plus format
     - Ready to implement in frontend Next.js code
  8. **Language:** Provide all instructions and placeholders in **Macedonian** for frontend text labels (e.g., "Product", "Quantity", "Total", "Price").

response_text: |
  Created a comprehensive constitution for the Rashan Grocery Website project with the following key elements:
  
  - Bill Transparency: Ensuring all product details, quantities, and prices are clearly visible
  - Mobile-First Design: Optimizing the bill display for mobile devices
  - Real-Time Updates: Immediate updates to cart totals when quantities change
  - Client-Side State Management: Managing cart state using Context API or useState
  - Content Management Integration: Fetching product data from Sanity CMS
  - Macedonian Localization: All UI text in Macedonian language
  
  Updated dependent templates to align with the new constitution:
  - plan-template.md: Added constitution check items
  - spec-template.md: Updated functional requirements
  - tasks-template.md: Modified user stories and tasks to reflect grocery website functionality
  
  The constitution is version 1.0.0, ratified on 2026-01-09, with all placeholder tokens properly filled.

outcome: |
  Successfully created and validated the Rashan Grocery Website constitution with all requirements met.
  Updated dependent templates to ensure consistency with the new principles.
  All placeholder tokens have been replaced with specific content for the grocery website project.
  Macedonian localization requirements have been incorporated as specified.

evaluation: |
  The constitution meets all specified requirements:
  ✓ Shows full bill with product details
  ✓ Covers cart items, quantity, price, and total
  ✓ Mobile-friendly design
  ✓ Next.js and Sanity CMS integration
  ✓ Client-side state management
  ✓ Real-time updates
  ✓ Macedonian localization
  ✓ Proper template updates
---