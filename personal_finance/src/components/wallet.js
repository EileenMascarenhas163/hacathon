import { Bell, ChevronDown, CreditCard, Key, LogOut, Menu, Search, Send, Settings, Users } from 'lucide-react'
import React from 'react';

export default function Wallet() {
  return (
    <div className="flex h-screen bg-gray-100">

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="relative">
            <input type="text" placeholder="Search" className="pl-10 pr-4 py-2 border rounded-full w-64" />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-white rounded-full"><Bell size={20} /></button>
            <button className="p-2 bg-white rounded-full"><Menu size={20} /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Balance Section */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Balance</h2>
              <div className="flex items-center">
                <span className="mr-2">S/</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
            <p className="text-3xl font-bold mb-4">$ 7,610.00</p>
            <div className="flex space-x-4 text-sm text-gray-600">
              <span>+ $ 2,394.00</span>
              <span>- $ 990.00</span>
            </div>
          </div>

          {/* Card Section */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
            <div className="flex justify-between items-center mb-12">
              <span className="text-xl font-bold">iuPayme</span>
              <CreditCard size={24} />
            </div>
            <p className="text-2xl font-bold mb-4">$ 7,610.00</p>
            <div className="flex justify-between items-end">
              <span className="text-sm">**** **** **** 2365</span>
              <span className="text-sm">09/24</span>
            </div>
          </div>

          {/* Transaction Section */}
          <div className="col-span-2 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Transactions</h2>
            <div className="flex justify-between items-center mb-4">
              <button className="px-4 py-2 bg-gray-100 rounded-full text-sm">Send</button>
              <button className="px-4 py-2 bg-white border rounded-full text-sm">Apply for</button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pay to</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="4CDE-EFGH-HGAS-7E6X-ZDES" />
              </div>
              <div className="flex space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="$ 555" />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Reason</label>
                  <select className="w-full p-2 border rounded">
                    <option>Select</option>
                  </select>
                </div>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg flex items-center justify-center">
                <Send size={20} className="mr-2" /> Send
              </button>
            </form>
          </div>

          {/* Information Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Information</h2>
              <button><Settings size={20} /></button>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Contacts</span><span>Jonas</span></li>
              <li className="flex justify-between"><span>e-Address</span><ChevronDown size={16} /></li>
              <li className="flex justify-between"><span>Wallet ID</span><span className="text-gray-400">48d5e5884a4..</span></li>
            </ul>
          </div>

          {/* Security Section */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Security</h2>
              <button><ChevronDown size={20} /></button>
            </div>
            <ul className="space-y-2">
              <li className="flex justify-between items-center">
                <div className="flex items-center">
                  <Users size={20} className="mr-2" />
                  <span>2FA enabled</span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" checked readOnly />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </li>
              <li className="flex items-center">
                <Key size={20} className="mr-2" />
                <span>Key</span>
                <button className="ml-auto text-blue-500">Change</button>
              </li>
            </ul>
          </div>
        </div>
      </main>

    </div>
  )
}