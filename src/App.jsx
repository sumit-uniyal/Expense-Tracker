import { useEffect, useState } from 'react';
import Wallet from './components/Wallet';
import ExpenseList from './components/ExpenseList';
import AddBalanceModal from './components/AddBalanceModal';
import AddExpenseModal from './components/AddExpenseModal';
import TopExpenses from './components/TopExpenses';
import './App.css';

function App() {
  const [balance, setBalance] = useState(5000);
  const [expenses, setExpenses] = useState([]);

  const [showBalanceModal, setShowBalanceModal] = useState(false);
  const [showExpenseModal, setShowExpenseModal] = useState(false);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const savedBalance = JSON.parse(localStorage.getItem('balance'));

    if (savedBalance !== null) setBalance(savedBalance);
    setExpenses(savedExpenses);
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('balance', JSON.stringify(balance));
  }, [expenses, balance]);

  const handleAddBalance = (amount) => {
    setBalance((prev) => prev + Number(amount));
  };

  const handleAddExpense = (expense) => {
    if (expense.price > balance) {
      alert('Insufficient balance!');
      return;
    }

    setExpenses((prev) => [...prev, { ...expense, id: Date.now() }]);
    setBalance((prev) => prev - expense.price);
  };

  const handleDelete = (id) => {
    const exp = expenses.find((e) => e.id === id);
    setExpenses((prev) => prev.filter((e) => e.id !== id));
    setBalance((prev) => prev + exp.price);
  };

  return (
    <div className="app">
      <h1>Expense Tracker</h1>

      <div className="top-section">
        <Wallet
          balance={balance}
          expenses={expenses}
          openBalanceModal={() => setShowBalanceModal(true)}
          openExpenseModal={() => setShowExpenseModal(true)}
        />

        <div className="circle-card">
          <div className="circle">100%</div>
          <div className="legend">
            <span className="food">Food</span>
            <span className="ent">Entertainment</span>
            <span className="travel">Travel</span>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <ExpenseList expenses={expenses} handleDelete={handleDelete} />
        <TopExpenses expenses={expenses} />
      </div>

      {showBalanceModal && (
        <AddBalanceModal
          onClose={() => setShowBalanceModal(false)}
          onAdd={handleAddBalance}
        />
      )}

      {showExpenseModal && (
        <AddExpenseModal
          onClose={() => setShowExpenseModal(false)}
          onAdd={handleAddExpense}
        />
      )}
    </div>
  );
}

export default App;
