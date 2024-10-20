import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import Wallet from './components/wallet';
import BudgetManager from './components/budget';
import Aside from './components/Aside';

function App() {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Aside />

        {/* Main Content Area */}
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/budget" element={<BudgetManager />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;