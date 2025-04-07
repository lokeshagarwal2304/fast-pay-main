# 💸 Fast-Pay – A UPI-based Transaction App

Fast-Pay is a full-stack UPI transaction application built with **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It allows users to sign up, log in, view their account balance, initiate transactions, and visualize transaction history with graphs.

---

## 🔧 Tech Stack

- **Frontend:** React.js, Recharts
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **HTTP Client:** Axios

---

## 📁 Project Structure

```
fast-pay-main/
│
├── client/                 # React frontend
│   └── src/
│       └── components/
│           └── Transaction.js
│
├── backend/                # Express backend
│   ├── controllers/
│   │   └── authController.js
│   ├── models/
│   │   └── User.js
│   │   └── Transaction.js
│   ├── routes/
│   │   └── authRoutes.js
│   │   └── transactionRoutes.js
│   └── server.js
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/fast-pay.git
cd fast-pay-main
```

---

### 2. Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd ../client
npm install
```

---

### 3. Run MongoDB

Ensure MongoDB is running locally on port `27017`. You can start it with:

```bash
mongod
```

---

### 4. Start the App

**Backend:**
```bash
cd backend
node server.js
```

**Frontend:**
```bash
cd ../client
npm start
```

Visit the frontend at: [http://localhost:3000](http://localhost:3000)

---

## 🔐 Features

- ✅ User Signup & Login
- 💰 View account balance
- 📤 Send money to UPI ID
- 📈 Visualize transactions in charts
- 📋 Transaction history table

---

## 🔧 API Endpoints

### Auth Routes (`/api`)
- `POST /signup` — Create a new user
- `POST /login` — Log in with UPI ID and password
- `GET /user/:upi_id` — Get user info by UPI

### Transaction Routes (`/api`)
- `GET /transactions/:upi_id` — Get all transactions for a user
- `POST /transaction` — Initiate a new transaction

---

## ✨ Future Enhancements

- Add 2FA (Two-Factor Authentication)
- Password hashing with bcrypt
- JWT-based authentication
- Email notifications for transactions
- Advanced analytics dashboard

---

## 🤝 Contributing

Feel free to fork the repo, raise issues, or open pull requests to improve the app!

---

## 📄 License

MIT License

---

## 🙌 Author

Built with ❤️ by [Md Nazrul Haq]
