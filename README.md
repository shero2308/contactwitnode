# 📇 Contact Manager API

A RESTful API built with Node.js, Express, and MongoDB that allows authenticated users to manage their personal contacts. It supports full CRUD operations (Create, Read, Update, Delete) and uses JSON Web Tokens (JWT) for authentication.

---

## 🚀 Features

- User Authentication (Register/Login)
- JWT-based Authorization
- Create, Read, Update, Delete contacts
- Private access to user-specific contacts only
- Input validation and proper error handling

---

## 🛠 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Token)
- **Middleware**: express-async-handler
- **Development Tools**: Nodemon, Postman

---

## 📁 Project Structure

```
📦 contact-manager-api
├── controllers/
│   └── contactController.js
├── middleware/
│   ├── authMiddleware.js
│   └── errorHandler.js
├── models/
│   └── contactModel.js
├── routes/
│   ├── contactRoutes.js
│   └── userRoutes.js
├── config/
│   └── db.js
├── .env
├── server.js
└── package.json
```

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shero2308/contactwitnode
   cd contactwithnode
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root with the following:

   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the server**

   For development:
   ```bash
   npm run dev
   ```

   For production:
   ```bash
   npm start
   ```

---

## 🧪 API Endpoints

### Auth Routes
| Method | Endpoint         | Description              |
|--------|------------------|---------------------     |
| POST   | `/api/users/register` | Register new user   |
| POST   | `/api/users/login`    | Login and get token |
| GET    | `/api/users/current`  | Get all users       |

### Contact Routes (Protected)
| Method | Endpoint         | Description          |
|--------|------------------|----------------------|
| GET    | `/api/contact`       | Get all contacts     |
| GET    | `/api/contact/:id`   | Get single contact   |
| POST   | `/api/contact`       | Create new contact   |
| PUT    | `/api/contact/:id`   | Update contact       |
| DELETE | `/api/contact/:id`   | Delete contact       |

> 🔐 All contact routes require a valid JWT token in the `Authorization` header.

---

## 📮 Sample Request (Create Contact)

```http
POST /api/contact
Authorization: Bearer <your_token>
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
```

---

## 🙋‍♂️ Author

**Rakshit**  
📧 [rakshitkumar682@example.com]  
🌐 [https://github.com/shero2308]

---

## 📃 License

This project is licensed under the MIT License.