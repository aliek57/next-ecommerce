# Basic E-commerce Next.js

This is a simple e-commerce built to show the difference between client and server components on Next.js App Router.

## Structure and Features 

### Server-Side Rendering

- **Home Page (`app/page.tsx`)**:
    - This page is a **server component**. It fetches the list of products directly from the internal API (`/api/products`) before being rendered. This approach improves SEO and initial page load time.

### Client-Side Rendering

- **Cart Page (`app/cart/page.tsx`)**:
    - This page is a **client component (`"use client"`)**. It uses the browser's `localStorage` to manage the shopping cart. The cart state is persisted, and user interactions (adding, removing, updating quantity) are handled on the client side.
- **Add to Cart Button (`components/AddToCartButton.tsx`)**:
    - This is a client component that uses the cart context to add a product. It demonstrates how interactions that depend on user state should be managed on the client side.

## Key Features

- **Product Viewing**: Displays a list of products on the home page.
- **Product Detail Page**: Each product has its own dynamic page (`/products/[id]`) that shows its details.
- **Cart Management**: Allows adding, removing, and updating the quantity of products in the shopping cart.
- **Data Persistence**: The cart content is saved in `localStorage`, which means items are not lost upon page reload.
- **Internal API**: A simple API (`/api/products/route.ts`) provides the product data.

## How to Run the Project

Follow the steps below to run the project locally:

### Prerequisites
Make sure you have Node.js installed.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/aliek57/next-ecommerce.git
   ```

2. Navigate to the project directory:
   ```
   cd tnext-ecommerce
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Application

To start the development server, run:
```
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Purpose 

The goal of this project is to provide a practical example of how to build a web application using Next.js. It is intentionally simple to focus on concepts.

---

Feel free to clone this project to modify and study! (:
