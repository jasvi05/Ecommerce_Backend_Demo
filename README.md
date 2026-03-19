<div align="center">

# E-Commerce Backend

### A scalable RESTful backend for an e-commerce platform — handling products, users, orders, and authentication with Node.js, Express, and MongoDB.

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-Framework-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-FB015B?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](#)

</div>

---

## Overview

This project is a **demo e-commerce backend** that implements the core server-side functionality required for an online store. Built with **Node.js and Express**, it follows industry-standard **MVC architecture** with dedicated layers for routing, business logic (controllers), data models, and middleware.

The backend exposes a clean **REST API** that can be consumed by any frontend framework (React, Vue, etc.) or tested via Postman/Thunder Client.

---

## Features

- **Product Management** — Create, read, update, and delete product listings
- **User Accounts** — Register and manage user profiles
- **Authentication** — Secure routes with JWT-based auth middleware
- **Order Management** — Place and track customer orders
- **Middleware Layer** — Request validation, error handling, and auth guards
- **MongoDB + Mongoose** — Flexible schema-based data persistence

---

## Project Structure

```
Ecommerce_Backend_Demo/
│
├── controllers/        # Business logic — handles request/response
│   ├── productController.js
│   ├── userController.js
│   └── orderController.js
│
├── middleware/         # Auth guards, error handlers, validators
│   └── authMiddleware.js
│
├── models/             # Mongoose schemas
│   ├── Product.js
│   ├── User.js
│   └── Order.js
│
├── routes/             # Express route definitions
│   ├── productRoutes.js
│   ├── userRoutes.js
│   └── orderRoutes.js
│
├── app.js              # Express app setup & middleware registration
├── package.json
└── .gitignore
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB (via Mongoose ODM) |
| **Authentication** | JSON Web Tokens (JWT) |
| **Architecture** | MVC (Model-View-Controller) |

---

## Request Lifecycle

```
HTTP Request
     │
     ▼
┌─────────────────────┐
│   app.js            │  ← Middleware chain (body parser, cors, etc.)
└────────┬────────────┘
         │
    ┌────┴────┐
    │  Routes │  ← Match URL + method → dispatch to controller
    └────┬────┘
         │
    ┌────┴──────────┐
    │  Middleware   │  ← Auth check (JWT verify) if protected route
    └────┬──────────┘
         │
    ┌────┴────────────┐
    │   Controllers   │  ← Execute business logic
    └────┬────────────┘
         │
    ┌────┴────┐
    │  Models │  ← Query / mutate MongoDB via Mongoose
    └────┬────┘
         │
    ┌────┴──────┐
    │  MongoDB  │
    └───────────┘
         │
         ▼
   JSON Response
```

---

## API Endpoints

### Users
| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/api/users/register` | Public | Register a new user |
| `POST` | `/api/users/login` | Public | Login and receive JWT token |
| `GET` | `/api/users/profile` | Protected | Get logged-in user profile |

### Products
| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/api/products` | Public | Fetch all products |
| `GET` | `/api/products/:id` | Public | Fetch a single product |
| `POST` | `/api/products` | Protected | Add a new product |
| `PUT` | `/api/products/:id` | Protected | Update a product |
| `DELETE` | `/api/products/:id` | Protected | Delete a product |

### Orders
| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/api/orders` | Protected | Place a new order |
| `GET` | `/api/orders/:id` | Protected | Get order by ID |
| `GET` | `/api/orders/myorders` | Protected | Get all orders for logged-in user |

> These are representative endpoints — verify exact routes in the `routes/` folder.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Installation

```bash
# Clone the repository
git clone https://github.com/jasvi05/Ecommerce_Backend_Demo.git
cd Ecommerce_Backend_Demo

# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key
```

### Run the Server

```bash
node app.js

# Server starts at:
# http://localhost:5000
```

> Use [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.com/) to test the API endpoints.

---

## Future Scope

- **Payment Integration** — Stripe or Razorpay payment gateway
- **Image Uploads** — Product images via Cloudinary / Multer
- **Search & Filters** — Query products by category, price, rating
- **Admin Panel** — Dashboard for order and inventory management
- **Deployment** — Host on Render or Railway with MongoDB Atlas

---

## Author

**Jasvi** — [@jasvi05](https://github.com/jasvi05)

> *This project demonstrates practical backend development skills — REST API design, MVC architecture, JWT authentication, Mongoose data modeling, and middleware-based request handling using Node.js and Express.*

---
