import { useState } from 'react';

function AddExpenseModal({ onClose, onAdd }) {
  const [form, setForm] = useState({
    title: '',
    price: '',
    category: '',
    date: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    onAdd({
      ...form,
      price: Number(form.price),
    });

    setForm({ title: '', price: '', category: '', date: '' });
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
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
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
