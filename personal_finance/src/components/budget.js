"use client"

import React, { useState, useEffect } from 'react'
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Calendar } from './ui/calendar'
import { Progress } from './ui/progress'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Slider } from './ui/slider'
import { AlertCircle } from 'lucide-react'

// Mock data (replace with real data in a production app)
const expenseData = [
  { name: 'Food', value: 300 },
  { name: 'Rent', value: 1000 },
  { name: 'Utilities', value: 200 },
  { name: 'Entertainment', value: 150 },
]

const budgetData = [
  { category: 'Food', budget: 400, spent: 300 },
  { category: 'Rent', budget: 1000, spent: 1000 },
  { category: 'Utilities', budget: 250, spent: 200 },
  { category: 'Entertainment', budget: 200, spent: 150 },
]

const initialSavingsGoals = [
  { name: 'Emergency Fund', target: 5000, current: 2000 },
  { name: 'Vacation', target: 3000, current: 1500 },
  { name: 'New Car', target: 15000, current: 5000 },
]

const initialBills = [
  { name: 'Rent', amount: 1000, dueDate: '2023-07-01' },
  { name: 'Electricity', amount: 100, dueDate: '2023-07-15' },
  { name: 'Internet', amount: 50, dueDate: '2023-07-20' },
]

export default function FinancialDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expenses, setExpenses] = useState(expenseData)
  const [budgets, setBudgets] = useState(budgetData)
  const [savingsGoals, setSavingsGoals] = useState(initialSavingsGoals)
  const [bills, setBills] = useState(initialBills)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [financialWellnessScore, setFinancialWellnessScore] = useState(0)

  useEffect(() => {
    // Calculate financial wellness score
    const totalBudget = budgets.reduce((sum, item) => sum + item.budget, 0)
    const totalSpent = budgets.reduce((sum, item) => sum + item.spent, 0)
    const budgetAdherence = 1 - (totalSpent / totalBudget)
    
    const totalSavingsTarget = savingsGoals.reduce((sum, goal) => sum + goal.target, 0)
    const totalSavingsCurrent = savingsGoals.reduce((sum, goal) => sum + goal.current, 0)
    const savingsProgress = totalSavingsCurrent / totalSavingsTarget

    const score = Math.round((budgetAdherence * 50) + (savingsProgress * 50))
    setFinancialWellnessScore(score)
  }, [budgets, savingsGoals])

  const handleBudgetChange = (category, value) => {
    setBudgets(budgets.map(item => 
      item.category === category ? { ...item, budget: value } : item
    ))
  }

  const handleSavingsGoalChange = (name, current) => {
    setSavingsGoals(savingsGoals.map(goal => 
      goal.name === name ? { ...goal, current } : goal
    ))
  }

  const handleAddBill = (name, amount, dueDate) => {
    setBills([...bills, { name, amount, dueDate }])
  }

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

    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Financial Dashboard</h1>
      
      {/* Financial Wellness Score */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Financial Wellness Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <Progress value={financialWellnessScore} className="w-3/4 bg-gradient-to-r from-blue-500 to-blue-600" />
            <span className="text-2xl font-bold">{financialWellnessScore}</span>
          </div>
        </CardContent>
      </Card>

      {/* Expense Tracking */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Expense Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie dataKey="value" data={expenses} fill="#1F51FF" label />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Budget Management */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Budget Management</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={budgets}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="budget" fill="#1F51FF"/>
              <Bar dataKey="spent" fill="#1F51FF" />
            </BarChart>
          </ResponsiveContainer>
          {budgets.map((item) => (
            <div key={item.category} className="mt-4">
              <Label>{item.category}</Label>
              <Slider
                defaultValue={[item.budget]}
                max={item.budget * 2}
                step={10}
                onValueChange={(value) => handleBudgetChange(item.category, value[0])}
              />
              {item.spent > item.budget && (
                <p className="text-red-500 flex items-center mt-1">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  Budget exceeded
                </p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Savings Goals */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Savings Goals</CardTitle>
        </CardHeader>
        <CardContent>
          {savingsGoals.map((goal) => (
            <div key={goal.name} className="mb-4">
              <Label>{goal.name}</Label>
              <Progress value={(goal.current / goal.target) * 100} className="mb-2" />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>&#8377;{goal.current}</span>
                <span>&#8377;{goal.target}</span>
              </div>
              <Input
                type="number"
                value={goal.current}
                onChange={(e) => handleSavingsGoalChange(goal.name, Number(e.target.value))}
                className="mt-2"
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Bill Payment Calendar */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Bill Payment Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-lg font-semibold mb-2">Upcoming Bills</h3>
              {bills.map((bill) => (
                <div key={bill.name} className="flex justify-between items-center mb-2">
                  <span>{bill.name}</span>
                  <span>&#8377;{bill.amount}</span>
                  <span>{new Date(bill.dueDate).toLocaleDateString()}</span>
                </div>
              ))}
              <div className="mt-4">
                <h4 className="text-md font-semibold mb-2">Add New Bill</h4>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  const formData = new FormData(e.currentTarget)
                  handleAddBill(
                    formData.get('name'),
                    Number(formData.get('amount')),
                    formData.get('dueDate')
                  )
                }}>
                  <Input name="name" placeholder="Bill Name" className="mb-2" />
                  <Input name="amount" type="number" placeholder="Amount" className="mb-2" />
                  <Input name="dueDate" type="date" className="mb-2" />
                  <Button type="submit">Add Bill</Button>
                </form>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </div>

    </div>

  )
}