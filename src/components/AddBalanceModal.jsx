import { useState } from 'react';

function AddBalanceModal({ onClose, onAdd }) {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(amount);
    setAmount('');
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal-box">
        <h2>Add Balance</h2>

        <input
          type="number"
          placeholder="Income Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <button type="submit">Add Balance</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddBalanceModal;
