# 💸 Fast-Pay – A MERN-Based UPI Transaction System

**Fast-Pay** is a full-stack UPI transaction application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It empowers users to securely sign up, log in, view account balances, initiate UPI-based transactions, and explore their financial activity through dynamic charts and transaction history.

---

## 🔧 Tech Stack – System ki Jaan ❤️

<div align="center">

<table>
  <tr>
    <td><strong>⚛️ Frontend</strong></td>
    <td>React.js, Recharts</td>
  </tr>
  <tr>
    <td><strong>🛠 Backend</strong></td>
    <td>Node.js, Express.js</td>
  </tr>
  <tr>
    <td><strong>🗃 Database</strong></td>
    <td>MongoDB (NoSQL)</td>
  </tr>
  <tr>
    <td><strong>🔗 HTTP Client</strong></td>
    <td>Axios</td>
  </tr>
</table>

</div>

---

## 📁 Project Architecture

```
fast-pay-main/
│
├── client/                     # React frontend
│   └── src/
│       └── components/
│           └── Transaction.js
│
├── backend/                    # Node + Express backend
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

### Step 1: Clone the Repository

```bash
git clone https://github.com/lokeshagarwal2304/fast-pay.git
cd fast-pay-main
```

### Step 2: Install Dependencies

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

### Step 3: MongoDB Setup

Make sure MongoDB is running locally on port `27017`:

```bash
mongod
```

### Step 4: Start the App

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

---

## 🔐 Features

- 🔑 Secure Sign Up & Login  
- 💳 View Live Account Balance  
- 💸 Send Instant UPI Payments  
- 📈 View Transaction Analytics  
- 📋 Maintain Complete Transaction History  

---

## 🔧 API Endpoints

### 🔒 Auth Routes (`/api`)
- `POST /signup` → Register user  
- `POST /login` → Login via UPI & password  
- `GET /user/:upi_id` → Fetch user info  

### 💰 Transaction Routes (`/api`)
- `GET /transactions/:upi_id` → User history  
- `POST /transaction` → New transaction  

---

## 🔮 Future Enhancements

- 🔐 Two-Factor Authentication  
- 🧂 Password Hashing with bcrypt  
- 🛡 JWT Auth Implementation  
- 📧 Transaction Email Notifications  
- 📊 Advanced Visual Dashboard  

---

## 🤝 Contribution

Pull requests and stars are welcome! Let’s build something cool together 😎

---

## 📄 License

MIT License

---

## 🙌 Contributors

| Name         | GitHub                             |
|--------------|-------------------------------------|
| Nazrul Haq   | [mdnazrulhaq](https://github.com/mdnazrulhaq) |

---

## ⚡ Final Thoughts

**Fast-Pay** isn’t just about money transfers...  
*kabhi kabhi toh bas "transaction ka bahaana hota hai, attention churaana hota hai"* 😘💸
