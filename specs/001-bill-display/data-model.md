# Data Model: Bill Display for Rashan Grocery Website

## Entities

### Product
Represents a grocery item in the Sanity CMS

**Fields**:
- `_id`: Unique identifier (string, required)
- `_type`: Document type ('product', string, required)
- `title`: Product name (string, required)
- `slug`: URL-friendly identifier (Slug, required, auto-generated from title)
- `price`: Current selling price (number, required)
- `priceWithoutDiscount`: Original price before discount (number, optional)
- `badge`: Special offer indicator (string, optional)
- `image`: Product image asset (Image, required)
- `category`: Reference to associated category (Reference to Category, required)
- `inventory`: Available stock count (number, required)
- `description`: Product description (Text, required)

**Validation rules**:
- `price` must be greater than 0
- `inventory` must be >= 0
- `title` must not be empty

### Category
Represents a product category in the Sanity CMS

**Fields**:
- `_id`: Unique identifier (string, required)
- `_type`: Document type ('category', string, required)
- `title`: Category name (string, required)
- `slug`: URL-friendly identifier (Slug, required, auto-generated from title)
- `image`: Category image asset (Image, optional)

**Validation rules**:
- `title` must not be empty

### CartItem
Represents a product in the user's cart (client-side only)

**Fields**:
- `productId`: Reference to the product (string, required)
- `title`: Product name (string, required)
- `description`: Product description (string, required)
- `price`: Product price (number, required)
- `priceWithoutDiscount`: Original product price (number, optional)
- `badge`: Special offer indicator (string, optional)
- `imageUrl`: Product image URL (string, required)
- `categoryId`: Reference to category (string, required)
- `quantity`: Selected quantity (number, required, minimum 1)

**State transitions**:
- Quantity can be increased or decreased
- Item can be removed from cart

### Bill
Represents the complete shopping bill (client-side only)

**Fields**:
- `items`: Array of CartItem objects (array, required)
- `subtotals`: Array of calculated subtotals per item (array of numbers, computed)
- `total`: Sum of all subtotals (number, computed)

**Validation rules**:
- `total` must equal the sum of all subtotals
- `items` array must not be empty for a valid bill