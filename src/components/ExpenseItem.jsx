function ExpenseItem({ exp, handleDelete }) {
  return (
    <div className="expense-item">
      <div>
        <p>{exp.title}</p>
        <small>{exp.date}</small>
      </div>

      <div>
        <span>${exp.price.toFixed(2)}</span>
        <button onClick={() => handleDelete(exp.id)}>❌</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
