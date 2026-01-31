<!-- SYNC IMPACT REPORT
Version change: N/A (initial creation) -> 1.0.0
Modified principles: N/A
Added sections: All principles and sections for Rashan Grocery Website
Removed sections: N/A
Templates requiring updates: ✅ updated - .specify/templates/plan-template.md, .specify/templates/spec-template.md, .specify/templates/tasks-template.md
Follow-up TODOs: None
-->

# Rashan Grocery Website Constitution
<!-- Example: Spec Constitution, TaskFlow Constitution, etc. -->

## Core Principles

### Bill Transparency
<!-- Example: I. Library-First -->
Every product detail, quantity, and price must be clearly visible to the user; The final bill must show all items with their individual prices, subtotals, and the total amount; No hidden costs or unclear charges
<!-- Example: Every feature starts as a standalone library; Libraries must be self-contained, independently testable, documented; Clear purpose required - no organizational-only libraries -->

### Mobile-First Design
<!-- Example: II. CLI Interface -->
The bill display must be optimized for mobile devices first; All elements must be readable and accessible on small screens; Touch-friendly controls for quantity adjustments
<!-- Example: Every library exposes functionality via CLI; Text in/out protocol: stdin/args → stdout, errors → stderr; Support JSON + human-readable formats -->

### Real-Time Updates
<!-- Example: III. Test-First (NON-NEGOTIABLE) -->
Cart totals must update immediately when quantities change; Product availability and prices must reflect real-time data from Sanity CMS; No manual refresh required for updates
<!-- Example: TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced -->

### Client-Side State Management
<!-- Example: IV. Integration Testing -->
Cart state must be managed on the client using Context API or useState; Data synchronization between components must be seamless; State persistence across page navigation
<!-- Example: Focus areas requiring integration tests: New library contract tests, Contract changes, Inter-service communication, Shared schemas -->

### Content Management Integration
<!-- Example: V. Observability, VI. Versioning & Breaking Changes, VII. Simplicity -->
All product data must be fetched from Sanity CMS; Admins must be able to add/update products through Sanity Studio; Published products only should appear in the cart
<!-- Example: Text I/O ensures debuggability; Structured logging required; Or: MAJOR.MINOR.BUILD format; Or: Start simple, YAGNI principles -->

### Macedonian Localization
All user-facing text must be in Macedonian language; Product names, descriptions, and UI labels must be properly localized; Currency display must follow Macedonian conventions

## Technical Requirements
<!-- Example: Additional Constraints, Security Requirements, Performance Standards, etc. -->

Next.js App Router for routing and server-side rendering; Sanity CMS for product content management; Client-side cart state management; Responsive design for all screen sizes; Auto-update functionality for cart totals
<!-- Example: Technology stack requirements, compliance standards, deployment policies, etc. -->

## Development Workflow
<!-- Example: Development Workflow, Review Process, Quality Gates, etc. -->

Component-based development approach; Proper TypeScript typing for all props and state; Accessibility compliance (WCAG standards); Performance optimization for fast loading; Testing for all interactive elements
<!-- Example: Code review requirements, testing gates, deployment approval process, etc. -->

## Governance
<!-- Example: Constitution supersedes all other practices; Amendments require documentation, approval, migration plan -->

All features must comply with the stated principles; Code reviews must verify adherence to mobile-first design; UI changes must be tested on multiple device sizes; Performance metrics must meet predefined thresholds

**Version**: 1.0.0 | **Ratified**: 2026-01-09 | **Last Amended**: 2026-01-09
<!-- Example: Version: 2.1.1 | Ratified: 2025-06-13 | Last Amended: 2025-07-16 -->