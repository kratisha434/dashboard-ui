# 💰 Finance Dashboard UI

A clean, interactive, and responsive finance dashboard built to help users track, analyze, and understand their financial activity.

This project focuses on frontend architecture, UI/UX design, and state management using modern tools.

---

## 🚀 Live Features

### 📊 Dashboard Overview

* Summary cards for **Total Balance, Income, and Expenses**
* **Spending trend visualization** (line chart)
* **Category-wise expense breakdown** (pie chart)

### 💳 Transactions Management

* View all transactions with:

  * Date
  * Category
  * Amount
  * Type (Income / Expense)
* 🔍 Search transactions
* 🎯 Filter by type and category
* 🔄 Real-time updates

### 🔐 Role-Based UI (Simulated)

* **Viewer** → Read-only access
* **Admin** → Add, edit, delete transactions
* Role switching via dropdown

### 📈 Insights Section

* Highest spending category
* Total spent in that category
* Monthly comparison (current vs last month)

### 🌙 Dark Mode

* Toggle between light and dark mode
* Fully consistent UI across components

### 💾 Data Persistence

* Data stored in **localStorage**
* Survives page refresh

---

## 🎨 UI/UX Highlights

* Clean and modern design
* Fully responsive layout
* Smooth hover effects and transitions
* Graceful handling of:

  * Empty data
  * No transactions
* Minimal and intuitive interface

---

## 🛠 Tech Stack

* **React (Vite)** – Frontend framework
* **Tailwind CSS** – Styling
* **Recharts** – Data visualization
* **Framer Motion** – Animations
* **LocalStorage API** – Data persistence

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/finance-dashboard.git
cd finance-dashboard
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the project

```bash
npm run dev
```

---

## 🧠 Approach & Thought Process

This project was built with a focus on:

* **Clarity over complexity**
* Modular and reusable component structure
* Clean separation of concerns
* Efficient state handling using React hooks

### Key decisions:

* Used **mock data + localStorage** instead of backend for simplicity
* Implemented **role-based UI logic** on frontend
* Prioritized **readability and UX** over unnecessary complexity

---

## 📂 Folder Structure

```
src/
 ├── components/
 │    ├── SummaryCard.jsx
 │    ├── TransactionTable.jsx
 │    ├── ChartSection.jsx
 │    └── Insights.jsx
 │
 ├── pages/
 │    └── Dashboard.jsx
 │
 ├── data/
 │    └── mockData.js
 │
 └── App.jsx
```

---

## 📌 Assumptions

* No backend required (mock data used)
* Role-based access is simulated on frontend
* Transactions are simple and do not include advanced validations

---

## ✨ Future Improvements

* Backend integration (Node.js / Firebase)
* Authentication system
* Export transactions (CSV / PDF)
* Advanced analytics
* Budget tracking feature

---

## 🙌 Author

KRATISHA HIRAN

---

## ⭐ Final Note

This project is not about complexity, but about **how effectively a problem is understood and translated into a usable interface**.
