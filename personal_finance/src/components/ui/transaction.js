import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function Transactions() {
  // Static array of transactions
  const transactions = [
    { id: 1, category: "shop", name: "Shopping", price: 300, date: "Nov 25" },
    { id: 2, category: "food", name: "Food", price: 150, date: "Nov 26" },
    { id: 3, category: "travel", name: "Travel", price: 500, date: "Nov 27" },
    { id: 4, category: "shop", name: "Shopping", price: 250, date: "Nov 28" },
    { id: 5, category: "food", name: "Food", price: 200, date: "Nov 29" },
    { id: 6, category: "travel", name: "Travel", price: 450, date: "Nov 30" },
  ];

  // State for selected category and filtered transactions
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter transactions based on selected category
  const filteredTransactions =
    selectedCategory === "all"
      ? transactions
      : transactions.filter((tx) => tx.category === selectedCategory);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div style={{ display: "flex", alignItems: "center" }}>
        <h2 className="text-lg font-semibold mb-4" style={{ marginRight: "16px" }}>
          Transactions
        </h2>
        <select
          name="cat"
          id="trans-cat"
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded-md p-2"
        >
          <option value="all">All</option>
          <option value="shop">Shop</option>
          <option value="food">Food</option>
          <option value="travel">Travel</option>
        </select>
      </div>

      {/* Display filtered transactions */}
      {filteredTransactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex justify-between items-center py-2 border-b last:border-b-0"
        >
          <div className="flex items-center">
            <ShoppingCart className="h-5 w-5 mr-3 text-gray-400" />
            <span>{transaction.name}</span>
          </div>
          <div className="text-right">
            <p>{transaction.date}</p>
            <p className="text-gray-500">R$ {transaction.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}