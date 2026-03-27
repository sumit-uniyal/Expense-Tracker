import { useState } from 'react';

function AddExpenseModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    title: '',
    amount: '',
    category: '',
    date: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      title: form.title,
      amount: Number(form.amount),
      category: form.category,
      date: form.date,
    };

    onAdd(newExpense);

    setForm({ title: '', amount: '', category: '', date: '' });
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal-box">
        <h2>Add Expense</h2>

        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          required
        />

        <select
          name="category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        >
          <option value="">Select category</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Travel">Travel</option>
        </select>

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
        />

        <button type="submit">Add Expense</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddExpenseModal;
