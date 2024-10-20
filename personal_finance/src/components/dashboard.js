import React from 'react';
import { Bell, CreditCard, HelpCircle, LogOut, PieChart, Search, Settings, ShoppingCart } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 flex flex-col">
        <div className="flex items-center mb-8">
          <img src="/placeholder.svg?height=48&width=48" alt="Profile" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h2 className="font-semibold">Gadiel Machado</h2>
            <p className="text-sm text-gray-500">Designer</p>
          </div>
        </div>
        <nav className="flex-1">
          <a href="#" className="flex items-center py-2 px-4 bg-blue-50 text-blue-700 rounded-lg mb-2">
            <PieChart className="mr-3 h-5 w-5" />
            Dashboard
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg mb-2">
            <CreditCard className="mr-3 h-5 w-5" />
            Wallet
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg mb-2">
            <ShoppingCart className="mr-3 h-5 w-5" />
            Transactions
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg mb-2">
            <PieChart className="mr-3 h-5 w-5" />
            Revenue analytics
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg mb-2">
            <Search className="mr-3 h-5 w-5" />
            Search
          </a>
        </nav>
        <div className="mt-auto">
          <a href="#" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg mb-2">
            <Settings className="mr-3 h-5 w-5" />
            Setting
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg mb-2">
            <HelpCircle className="mr-3 h-5 w-5" />
            Help
          </a>
          <a href="#" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg">
            <LogOut className="mr-3 h-5 w-5" />
            Log Out
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
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
              <img src="/placeholder.svg?height=30&width=50" alt="Mastercard" className="h-8" />
            </div>
            <p className="mb-4">Marcel Dias</p>
            <p>12/24</p>
          </div>

          {/* Wallet */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Wallet</h2>
            <p className="text-3xl font-bold mb-4">$ 4,523.98</p>
            <div className="flex justify-between text-sm">
              <p className="text-green-500">↑ $ 3,030.98 Income</p>
              <p className="text-red-500">↓ $ 223.98 Expense</p>
            </div>
          </div>

          {/* Transactions */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Transactions</h2>
            {[...Array(9)].map((_, i) => (
              <div key={i} className="flex justify-between items-center py-2 border-b last:border-b-0">
                <div className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-3 text-gray-400" />
                  <span>Shopping</span>
                </div>
                <div className="text-right">
                  <p>Nov 25</p>
                  <p className="text-gray-500">R$ 300</p>
                </div>
              </div>
            ))}
          </div>

          {/* Monthly earnings */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Monthly earnings</h2>
            <div className="h-48 flex items-end">
              {/* This is a placeholder for the chart. In a real application, you'd use a charting library. */}
              <div className="flex-1 bg-blue-500 h-3/4 rounded-t-lg"></div>
              <div className="flex-1 bg-blue-500 h-1/2 rounded-t-lg mx-1"></div>
              <div className="flex-1 bg-blue-500 h-2/3 rounded-t-lg"></div>
              <div className="flex-1 bg-blue-500 h-1/3 rounded-t-lg mx-1"></div>
              <div className="flex-1 bg-blue-500 h-5/6 rounded-t-lg"></div>
              <div className="flex-1 bg-blue-500 h-2/3 rounded-t-lg mx-1"></div>
              <div className="flex-1 bg-blue-500 h-1/2 rounded-t-lg"></div>
            </div>
          </div>

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
                <p className="text-3xl font-bold">$ 4,523.98</p>
                <p className="text-green-500">+2.35%</p>
              </div>
            </div>
            <div className="flex justify-between w-full mt-4">
              <p>Earnings</p>
              <p>Goals</p>
            </div>
          </div>
        </div>
        </main>
    </div>
  )
}
