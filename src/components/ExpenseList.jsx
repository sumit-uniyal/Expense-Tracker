import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, handleDelete }) {
  return (
    <div className="expense-list">
      <h2>Recent Transactions</h2>

      {expenses.length === 0 ? (
        <p>No transactions!</p>
      ) : (
        expenses.map((exp) => (
          <ExpenseItem key={exp.id} exp={exp} handleDelete={handleDelete} />
        ))
      )}
    </div>
  );
}

export default ExpenseList;
