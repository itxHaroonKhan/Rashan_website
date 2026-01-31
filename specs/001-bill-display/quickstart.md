# Quickstart Guide: Rashan Grocery Website

## Development Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd rashan-grocery-website
   ```

2. **Install dependencies**
   ```bash
   cd my-app
   npm install
   ```

3. **Set up Sanity CMS**
   - Install Sanity CLI: `npm install -g @sanity/cli`
   - Create a new Sanity project or connect to existing one
   - Copy your project ID to `lib/sanity.ts`
   - Update environment variables:
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
     NEXT_PUBLIC_SANITY_DATASET=your-dataset
     SANITY_API_READ_TOKEN=your-read-token
     ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Sanity Studio: http://localhost:3333

## Sanity Schema Setup

1. **Define schemas** in `schemas/` directory:
   - `category.ts`: title, slug, image
   - `product.ts`: title, slug, price, priceWithoutDiscount, badge, image, category (reference), inventory, description

2. **Deploy schema** to Sanity:
   ```bash
   sanity deploy
   ```

## Running Tests

```bash
npm run test
```

## Building for Production

```bash
npm run build
npm start
```

## Key Features

- **Product browsing**: Navigate through categories and products
- **Cart functionality**: Add/remove items, adjust quantities
- **Real-time bill calculation**: Automatic updates to subtotals and total
- **Mobile-responsive**: Optimized for all screen sizes
- **Macedonian localization**: All UI labels in Macedonian