import {
  Bell,
  CreditCard,
  HelpCircle,
  LogOut,
  PieChart,
  Search,
  Settings,
  ShoppingCart,
} from "lucide-react";
import Transactions from "./ui/transaction"; // Adjust the path if needed
import { useState } from "react";
import EarningsChart from "./ui/monthly_earnings";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Main Content */}
      <div className="flex flex-col flex-1 lg:sm-64">
        <header className="flex justify-between items-center p-6 bg-white shadow-lg lg:hidden">
          <button
            className="text-gray-500 focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </header>

        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold">Dashboard</h1>
            <div className="flex items-center">
              <div className="relative mr-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="p-2 bg-white rounded-full shadow-md">
                <Bell className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Credit Card */}
          <div className="col-span-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex justify-between mb-4">
              <p className="text-lg">4328 4388 4161 8183</p>
              <img
                src="/placeholder.svg?height=30&width=50"
                alt="Mastercard"
                className="h-8"
              />
            </div>
            <p className="mb-4">Henry davidson</p>
            <p>12/24</p>
          </div>

          {/* Wallet */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Wallet</h2>
            <p className="text-3xl font-bold mb-4">&#8377; 4,523.98</p>
            <div className="flex justify-between text-sm">
              <p className="text-green-500">↑ &#8377; 3,030.98 Income</p>
              <p className="text-red-500">↓ &#8377; 223.98 Expense</p>
            </div>
          </div>

          {/* Transactions Section - Replace with the Transactions component */}
          <Transactions />

          <EarningsChart></EarningsChart>

          

          

          {/* Earnings */}
          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-4">Earnings</h2>
            <div className="relative w-48 h-48">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeDasharray="75, 100"
                />
              </svg>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <p className="text-3xl font-bold">&#8377; 4,523.98</p>
                <p className="text-green-500">+2.35%</p>
              </div>
            </div>
            <div className="flex justify-between w-full mt-4">
            <table border="1" cellpadding="10">
  <thead>
    <tr>
      <th>Savings Goal</th>
      <th>Current Amount (₹)</th>
      <th>Goal Amount (₹)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Emergency Fund</td>
      <td>2000</td>
      <td>5000</td>
    </tr>
    <tr>
      <td>Vacation</td>
      <td>1500</td>
      <td>3000</td>
    </tr>
    <tr>
      <td>New Car</td>
      <td>5000</td>
      <td>15000</td>
    </tr>
  </tbody>
</table>

            </div>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
}
