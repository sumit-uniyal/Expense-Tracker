function TopExpenses({ expenses }) {
  const data = { Food: 0, Entertainment: 0, Travel: 0 };

  expenses.forEach((e) => {
    data[e.category] += Number(e.amount);
  });

  return (
    <div className="top-expenses">
      <h2>Top Expenses</h2>

      {Object.keys(data).map((key) => (
        <div key={key} className="bar-row">
          <span>{key}</span>
          <div className="bar">
            <div className="fill" style={{ width: `${data[key]}px` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopExpenses;
