## Live Link: 
https://e-commerce-fronted-one.vercel.app/

# E-commerce Backend API

This is the backend for an e-commerce platform built using **Express** and **MongoDB**. It provides a RESTful API for handling essential e-commerce functionalities such as product listings, user management, orders, and more.

## Features

- **User Authentication**: Registration, login, and JWT-based authentication.
- **Product Management**: Create, update, delete, and view product details.
- **Order Management**: Create and manage user orders.
- **Cart System**: Add, update, and remove products from a user's cart.
- **Admin Panel**: Admin-only routes for managing products, orders, and user data.

## Technologies

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Framework for building the server and handling routes.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM for MongoDB.
- **JWT**: For secure user authentication.
- **bcrypt**: For hashing user passwords.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (version 14.x or higher)
- **MongoDB** (running locally or via MongoDB Atlas)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/yourprojectname.git
    ```
2. Navigate to the project directory:
    ```bash
    cd yourprojectname
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:
   - Create a `.env` file in the root of the project.
   - Add the following variables:
      ```plaintext
      MONGODB_URI=your_mongodb_connection_string
      JWT_SECRET=your_jwt_secret
      ```
5. Start the server:
    ```bash
    npm start
    ```
   The server should be running on `http://localhost:4000`.

## API Endpoints

### User Authentication

- **POST /api/user/register** - Register a new user
- **POST /api/user/login** - Login and get a token

### Products

- **POST /api/product/add** - (Admin only) Create a new product
- **GET /api/product/list** - Get a list of all products
- **GET /api/product/single/** - Get a single product details
- **DELETE /api/product/remove** - (Admin only) Delete a product

### Orders

- **GET /api/order/list** - Get all orders (Admin) or user-specific orders
- **POST /api/order/status** - Update order status (Admin)
- **GET /api/order/userorders** - Orders of a user
- **POST /api/order/place** - Place order using COD
- **POST /api/order/stripe** - Place order using Stripe
- **POST /api/order/verifystripe** - Verify order payment of Stripe

### Cart

- **GET /api/cart/get** - Get user’s cart
- **POST /api/cart/add** - Add item to cart
- **PUT /api/cart/update** - Update quantity of cart item

## Contributing

Feel free to open issues or submit pull requests. Contributions are highly encouraged!

## License

This project is licensed under the MIT License.

## Contact

For any inquiries, please reach out to aaryadeep21122003@gmail.com .
