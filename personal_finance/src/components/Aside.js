import React from 'react';
import { Link } from 'react-router-dom';
import {  CreditCard, HelpCircle, LogOut, PieChart, Search, Settings, ShoppingCart } from 'lucide-react';
import profile from '../images/profile.png'
export default function Aside() {
    return (
    <aside className="w-64 bg-white p-6 flex flex-col">
        <div className="flex items-center mb-8">
          <img src={profile} alt="Profile" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h2 className="font-semibold">Henry Davidson</h2>
            <p className="text-sm text-gray-500">Designer</p>
          </div>
        </div>
        <nav className="flex-1">
          <a href="/dashboard" className="flex items-center py-2 px-4 bg-blue-50 text-blue-700 rounded-lg mb-2">
            <PieChart className="mr-3 h-5 w-5" />
            Dashboard
          </a>
          <a href="/wallet" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg mb-2">
            <CreditCard className="mr-3 h-5 w-5" />
            Wallet
          </a>
         
          <Link to="/budget" className="flex items-center py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg mb-2">
            <PieChart className="mr-3 h-5 w-5" />
            Budgets
          </Link>
         
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
      )
}
