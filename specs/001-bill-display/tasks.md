---

description: "Task list template for feature implementation"
---

# Tasks: Bill Display for Rashan Grocery Website

**Input**: Design documents from `/specs/001-bill-display/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: The examples below include test tasks. Tests are OPTIONAL - only include them if explicitly requested in the feature specification.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure per implementation plan in my-app/
- [ ] T002 Initialize Next.js 14+ project with TypeScript dependencies
- [ ] T003 [P] Configure linting and formatting tools (ESLint, Prettier)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

Examples of foundational tasks (adjust based on your project):

- [ ] T004 Setup Sanity CMS project and configuration in my-app/lib/sanity.ts
- [ ] T005 [P] Create Sanity schema definitions for category and product in my-app/schemas/
- [ ] T006 [P] Configure Sanity client with useCdn=false in my-app/lib/sanity.ts
- [ ] T007 Create GROQ queries for fetching data in my-app/lib/queries.ts
- [ ] T008 Setup cart context for state management in my-app/lib/cart-context.ts
- [ ] T009 Create TypeScript type definitions for entities in my-app/types/index.ts
- [ ] T010 Setup global styles for mobile-first responsive design in my-app/app/globals.css

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - View Complete Shopping Bill (Priority: P1) 🎯 MVP

**Goal**: Allow users to view a complete bill with all cart items showing product details, quantities, individual prices, subtotals, and final total

**Independent Test**: User can add items to cart and see a properly formatted bill with all required information in Macedonian language

### Tests for User Story 1 (OPTIONAL - only if tests requested) ⚠️

> **NOTE: Write these tests FIRST, ensure they FAIL before implementation**

- [ ] T011 [P] [US1] Unit test for cart context state management in my-app/__tests__/cart-context.test.ts
- [ ] T012 [P] [US1] Component test for BillDisplay component in my-app/__tests__/BillDisplay.test.tsx

### Implementation for User Story 1

- [ ] T013 [P] [US1] Create Product type definition in my-app/types/sanity.ts
- [ ] T014 [P] [US1] Create CartItem and Bill type definitions in my-app/types/index.ts
- [ ] T015 [US1] Implement Sanity data fetching service in my-app/lib/sanity.ts
- [ ] T016 [US1] Create Cart context for state management in my-app/lib/cart-context.tsx
- [ ] T017 [US1] Create responsive BillDisplay component with product details in my-app/components/BillDisplay.tsx
- [ ] T018 [US1] Create CartItem component showing product details in my-app/components/CartItem.tsx
- [ ] T019 [US1] Create QuantitySelector component with increment/decrement buttons in my-app/components/QuantitySelector.tsx
- [ ] T020 [US1] Add Macedonian localization for UI labels in my-app/lib/i18n.ts
- [ ] T021 [US1] Create cart/bill page in my-app/app/cart/page.tsx
- [ ] T022 [US1] Implement subtotal calculation logic in my-app/lib/cart-utils.ts

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Adjust Item Quantities (Priority: P2)

**Goal**: Enable users to adjust product quantities in their cart with real-time updates to the displayed bill

**Independent Test**: User can change quantities and see immediate updates to item subtotals and the final total

### Tests for User Story 2 (OPTIONAL - only if tests requested) ⚠️

- [ ] T023 [P] [US2] Unit test for quantity update functionality in my-app/__tests__/cart-utils.test.ts
- [ ] T024 [P] [US2] Component test for QuantitySelector in my-app/__tests__/QuantitySelector.test.tsx

### Implementation for User Story 2

- [ ] T025 [P] [US2] Enhance Cart context with quantity update functionality in my-app/lib/cart-context.tsx
- [ ] T026 [US2] Implement real-time cart total calculation in my-app/lib/cart-utils.ts
- [ ] T027 [US2] Connect quantity update functionality to CartItem component in my-app/components/CartItem.tsx
- [ ] T028 [US2] Add quantity validation to prevent invalid values in my-app/lib/cart-utils.ts
- [ ] T029 [US2] Integrate quantity updates with BillDisplay component for real-time display updates in my-app/components/BillDisplay.tsx

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Mobile-Responsive Bill Display (Priority: P3)

**Goal**: Ensure the bill display is optimized for mobile devices with touch-friendly controls and readable layout

**Independent Test**: Bill display is properly formatted and usable on mobile screen sizes with touch-optimized controls

### Tests for User Story 3 (OPTIONAL - only if tests requested) ⚠️

- [ ] T030 [P] [US3] Responsive design test for BillDisplay component in my-app/__tests__/BillDisplay.responsive.test.tsx
- [ ] T031 [P] [US3] Touch interaction test for QuantitySelector in my-app/__tests__/QuantitySelector.touch.test.tsx

### Implementation for User Story 3

- [ ] T032 [P] [US3] Create responsive layout for BillDisplay component using CSS Grid/Flexbox in my-app/components/BillDisplay.tsx
- [ ] T033 [US3] Implement touch-friendly sizing for QuantitySelector buttons in my-app/components/QuantitySelector.tsx
- [ ] T034 [US3] Add mobile-specific styling for product images and text readability in my-app/app/globals.css
- [ ] T035 [US3] Optimize component layouts for various screen sizes in my-app/components/
- [ ] T036 [US3] Add media queries for responsive behavior in my-app/app/globals.css

**Checkpoint**: All user stories should now be independently functional

---

[Add more user story phases as needed, following the same pattern]

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T037 [P] Documentation updates in my-app/README.md including Macedonian translations
- [ ] T038 Code cleanup and refactoring for performance optimization
- [ ] T039 Performance optimization for real-time cart updates
- [ ] T040 [P] Additional unit tests for cart state management in my-app/__tests__/
- [ ] T041 Accessibility compliance for mobile-first design
- [ ] T042 Run quickstart.md validation with mobile device testing

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together (if tests requested):
Task: "Unit test for cart context state management in my-app/__tests__/cart-context.test.ts"
Task: "Component test for BillDisplay component in my-app/__tests__/BillDisplay.test.tsx"

# Launch all models for User Story 1 together:
Task: "Create Product type definition in my-app/types/sanity.ts"
Task: "Create CartItem and Bill type definitions in my-app/types/index.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence