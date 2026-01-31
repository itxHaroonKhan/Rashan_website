# Rashan Grocery Website

An online grocery shopping website with cart and bill display functionality, built with Next.js and Sanity CMS.

## Features

- Browse products by category
- View detailed product information
- Add products to cart
- Adjust quantities in cart
- Real-time bill calculation with subtotals and total
- Responsive design for mobile and desktop

## Tech Stack

- Next.js 14+ with App Router
- TypeScript
- Sanity CMS for content management
- Tailwind CSS for styling
- React Context API for state management

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root of the `my-app` directory with your Sanity configuration:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=your-dataset
   NEXT_PUBLIC_SANITY_API_VERSION=2026-01-09
   NEXT_PUBLIC_SANITY_AUTH_TOKEN=your-auth-token
   # Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=50gs5yhs
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-01-09
NEXT_PUBLIC_SANITY_AUTH_TOKEN=skxPtUGEHr1LP73jnJLoVOqJTCKSEIOfl473kb4YWE2nsq2zaDSK5Yme9gC4yEFOchpedHrnBqU2XFwh5zjbnOgsPyrRx6AMdNt7BcILcifj1VZEeLVNBJgSy0We5J6Kt5LfTs9e4GisLFlcmdo1f7z49szQM282kC1PVnJmu4VwGZ2KI68L

   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
- `NEXT_PUBLIC_SANITY_DATASET`: Your Sanity dataset name (e.g., "production")
- `NEXT_PUBLIC_SANITY_API_VERSION`: The API version to use (format: YYYY-MM-DD)
- `NEXT_PUBLIC_SANITY_AUTH_TOKEN`: Your Sanity read token (with read permissions)

## Project Structure

- `app/` - Next.js App Router pages
- `components/` - Reusable UI components
- `lib/` - Utility functions and context providers
- `sanity/` - Sanity CMS configuration and schema definitions
- `types/` - TypeScript type definitions

## Sanity Schemas

The project uses two main Sanity schemas:

- `category` - Contains title, slug, and image
- `product` - Contains title, slug, price, priceWithoutDiscount, badge, image, category reference, inventory, and description

## API Routes

- `/api/products` - Fetch products by category ID

## Components

- `ProductCard` - Displays product information with add to cart functionality
- `CategoryCard` - Displays category information with navigation
- `CartItem` - Shows individual cart items with quantity selector
- `BillDisplay` - Shows complete bill with all items and totals
- `QuantitySelector` - Allows users to adjust item quantities
- `Navigation` - Header with cart item count indicator

## Pages

- `/` - Home page showing all categories
- `/categories/[slug]` - Category page showing products in a specific category
- `/products/[slug]` - Product detail page
- `/cart` - Cart/Bill page showing complete shopping bill
- `/checkout` - Simple confirmation page

## Internationalization

The project uses English labels for all UI elements. The labels are defined in `lib/i18n.ts` and can be easily modified or extended for additional languages.

## Styling

The project uses Tailwind CSS for styling with custom responsive classes defined in `app/globals.css` to ensure proper mobile-first design.
