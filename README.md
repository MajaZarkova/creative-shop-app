# CreativeShopApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.6.
Creative Shop is an online shop where you can sell and buy fashion clothes.

## Development server

Run 'cd server' then 'npm start' to start the backend server.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Making requests to the backend API

We are using custom made Express-js server for the application to make requests agains. The source code for the backend server can be find witin this repo in the server folder.

## Functionality overview

The application is an online shop site. It uses a custom API for all requests, including authentication.

**General functionality:**

  - Authenticate users via JWT (login/register pages + logout button on settings page)
  - CRUD Products
  - CR** Orders on products (no updating and deleting required)
  - GET and display lists of products
  - Product Details

**The general page breakdown looks like this:**

  - Home page (URL: /home )
      - List of 5 most recent products
  - Login/Register pages (URL: /login, /register )
      - Uses JWT auhtentication
  - About page (URL: /about )
  - Create Page (URL: /create, only accessible to logged in user )
      - Create Form 
      - Input fields with data validation
      - Create button
      - Cancel button
  - Products page (URL: /products )
      - List of all the products for sale
      - Search input (filtering the products by name or category )
      - Ready to use filters by category
  - Details Page (URL: /products/:productId )
      - Delete product button (only shown to products's owner )
      - Edit product button (only shown to products's owner )
      - Order product button (only shown to logged in user that's not the owner )
      - Login button (only shown to not logged in user)
  - Edit Page (URL /edit/:producId, only accessible to products's owner )
      - Already filled form with product information
      - Input fields with data validation
      - Save button
      - Cancel button
  - Profile page (URL: /profile, only accessible to logged in user )
      - Show basic user info
      - List of orders the user had made by now
      - List of products the user had listed for sale
