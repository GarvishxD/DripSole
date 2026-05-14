# 🚀 DripSole - Premium Ecommerce Store

A full-stack MERN ecommerce application for selling shoes, clothing, and accessories.

## 📋 Features

- ✅ 37+ Products (Shoes, Clothing, Accessories)
- ✅ Category-based filtering (Men, Women, Kids)
- ✅ User authentication with JWT
- ✅ Shopping cart functionality
- ✅ Order management
- ✅ Admin dashboard
- ✅ Responsive design
- ✅ MongoDB database integration

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router
- Axios
- CSS3

**Backend:**
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Mongoose ODM

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from template:
```bash
cp .env.example .env
```

4. Fill in your environment variables in `.env`:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
NODE_ENV=development
```

5. Seed the database:
```bash
node seedData.js
```

6. Start the backend server:
```bash
npm start
```

The server runs on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from template:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm start
```

The app opens at `http://localhost:3000`

## 🗄️ Database Schema

### Products
```
{
  _id: ObjectId,
  name: String,
  type: String (Shoes, Clothing, Accessories),
  category: String (men, women, children),
  price: Number,
  description: String,
  image: String (URL),
  sizes: [String],
  countInStock: Number,
  createdAt: Date
}
```

### Users
```
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  isAdmin: Boolean,
  createdAt: Date
}
```

### Orders
```
{
  _id: ObjectId,
  user: ObjectId (ref: User),
  items: [{
    product: ObjectId,
    quantity: Number,
    price: Number
  }],
  totalPrice: Number,
  status: String,
  createdAt: Date
}
```

## 📡 API Endpoints

### Products
- `GET /products` - Get all products (supports filters: type, category)
- `GET /products/:id` - Get single product
- `POST /products` - Create product (admin only)
- `PUT /products/:id` - Update product (admin only)
- `DELETE /products/:id` - Delete product (admin only)

### Authentication
- `POST /auth/register` - Register user
- `POST /auth/login` - Login user
- `GET /auth/user` - Get user profile

### Orders
- `POST /orders` - Create order
- `GET /orders/user` - Get user orders
- `GET /orders/admin` - Get all orders (admin only)
- `PUT /orders/:id` - Update order status (admin only)

## 🔒 Security

### Environment Variables
This project uses environment variables to store sensitive data:
- Database credentials
- JWT secrets
- API keys

**Never commit `.env` files to Git!**

All environment templates are provided in:
- `backend/.env.example`
- `frontend/.env.example`

### User Data Protection
- Passwords are hashed using bcryptjs
- JWT tokens for secure authentication
- Protected admin routes

## 📁 Project Structure

```
SHOE-ECOMMERCE/
├── backend/
│   ├── models/          # MongoDB schemas
│   ├── routes/          # API routes
│   ├── controllers/      # Business logic
│   ├── middleware/       # Auth & validation
│   ├── config/          # Database config
│   ├── seedData.js      # Initial data
│   ├── server.js        # Express app
│   ├── .env.example     # Env template
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── context/     # React context
│   │   ├── services/    # API calls
│   │   ├── utils/       # Helper functions
│   │   ├── App.js       # Main app
│   │   └── index.js
│   ├── public/          # Static files
│   ├── .env.example     # Env template
│   └── package.json
│
├── .gitignore           # Git ignore rules
└── README.md
```

## 🚀 Deployment

### Backend (Render.com)
1. Push code to GitHub
2. Connect GitHub to Render
3. Set environment variables in Render dashboard
4. Deploy

### Frontend (Vercel/Netlify)
1. Set `REACT_APP_API_BASE_URL` to your backend URL
2. Deploy to Vercel/Netlify
3. Done!

## 📝 Usage

1. **Browse Products**: Navigate through Shoes, Clothing, and Accessories
2. **Filter by Category**: Select Men, Women, or Kids
3. **Add to Cart**: Click "View Details" then add items
4. **Checkout**: Review cart and place order
5. **Track Orders**: View order history in "My Orders"
6. **Admin Panel**: Manage products and orders (admin only)

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Check MongoDB Atlas connection string
- Verify IP whitelist in MongoDB Atlas
- Ensure `.env` has correct MONGODB_URI

**CORS Errors:**
- Backend CORS is enabled for all origins
- Check API_BASE_URL in frontend `.env`

**Port Already in Use:**
```bash
# Kill process on port 5000 (Windows)
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Garvish**

- GitHub: [@GarvishxD](https://github.com/GarvishxD)
- Project: [DripSole](https://github.com/GarvishxD/DripSole)

## 🤝 Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## 📞 Support

For support, email or open an issue on GitHub.

---

**Made with ❤️ by Garvish**
