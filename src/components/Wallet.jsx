function Wallet({ balance, openBalanceModal, openExpenseModal, expenses }) {
  const totalExpense = expenses.reduce((acc, e) => acc + e.price, 0);

  return (
    <div className="wallet-container">
      <div className="card">
        <h2>Wallet Balance: ${balance.toFixed(2)}</h2>
        <button type="button" onClick={openBalanceModal}>
          + Add Income
        </button>
      </div>

      <div className="card">
        <h2>Expenses: ${totalExpense.toFixed(2)}</h2>
        <button type="button" onClick={openExpenseModal}>
          + Add Expense
        </button>
      </div>
    </div>
  );
}

export default Wallet;
