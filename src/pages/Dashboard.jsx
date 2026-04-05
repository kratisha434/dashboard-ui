import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SummaryCard from "../components/SummaryCard";
import TransactionTable from "../components/TransactionTable";
import ChartSection from "../components/ChartSection";
import Insights from "../components/Insights";
import transactionsData from "../data/mockData";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [role, setRole] = useState("viewer");
  const [darkMode, setDarkMode] = useState(false);

  // Load data
  useEffect(() => {
    const saved = localStorage.getItem("transactions");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.length > 0) setTransactions(parsed);
      else setTransactions(transactionsData);
    } else {
      setTransactions(transactionsData);
    }
  }, []);

  // Save data
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);

  // Filtering
  const filteredTransactions = transactions.filter((t) => {
    const matchesSearch = t.category
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesType = filter === "all" || t.type === filter;

    const matchesCategory =
      categoryFilter === "all" || t.category === categoryFilter;

    return matchesSearch && matchesType && matchesCategory;
  });

  const categories = ["all", ...new Set(transactions.map((t) => t.category))];

  // Summary
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expenses;

  // Actions
  const handleDelete = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const handleAdd = () => {
    const newTransaction = {
      id: Date.now(),
      date: "2026-04-10",
      amount: 1000,
      category: "Misc",
      type: "expense",
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const handleEdit = (t) => {
    const amt = prompt("Amount:", t.amount);
    const cat = prompt("Category:", t.category);
    const type = prompt("Type (income/expense):", t.type);

    if (!amt || !cat || !type) return;

    setTransactions(
      transactions.map((item) =>
        item.id === t.id
          ? { ...item, amount: Number(amt), category: cat, type }
          : item
      )
    );
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 dark:text-white min-h-screen p-6">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Finance Dashboard</h1>

          {/* 🌙 Toggle */}
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* ROLE */}
        <div className="flex items-center gap-3">
          <label>Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="p-2 border rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SummaryCard title="Total Balance" amount={balance} />
          <SummaryCard title="Income" amount={income} />
          <SummaryCard title="Expenses" amount={expenses} />
        </div>

        {/* CHARTS */}
        <ChartSection transactions={transactions} />

        {/* INSIGHTS */}
        <Insights transactions={transactions} />

        {/* FILTERS */}
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-400 transition"
          />

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="p-2 border rounded-lg bg-white dark:bg-gray-800 dark:text-white"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="p-2 border rounded-lg bg-white dark:bg-gray-800 dark:text-white"
          >
            {categories.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {/* ADD BUTTON */}
        {role === "admin" && (
          <button
            onClick={handleAdd}
            className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded-lg"
          >
            + Add Transaction
          </button>
        )}

        {/* TABLE */}
        <TransactionTable
          transactions={filteredTransactions}
          role={role}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </motion.div>
    </div>
  );
};

export default Dashboard;