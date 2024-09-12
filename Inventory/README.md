# Inventory Management Project Plan
# Folder Structure For Both Client and Server

mern-inventory/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── orderController.js
│   │   └── supplierController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── userModel.js
│   │   ├── productModel.js
│   │   ├── orderModel.js
│   │   └── supplierModel.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── orderRoutes.js
│   │   └── supplierRoutes.js
│   ├── .env
│   ├── server.js
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Navbar.js
│       │   ├── ProductForm.js
│       │   └── Dashboard.js
│       ├── context/
│       │   └── AuthContext.js
│       ├── pages/
│       │   ├── LoginPage.js
│       │   ├── RegisterPage.js
│       │   └── HomePage.js
│       ├── App.js
│       ├── index.js
│       ├── App.css
├── .gitignore
├── README.md
├── package.json