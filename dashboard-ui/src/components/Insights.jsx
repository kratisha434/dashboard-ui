const Insights = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md text-center">
        No insights available
      </div>
    );
  }

  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  let maxCategory = "N/A";
  let maxAmount = 0;

  for (let key in categoryMap) {
    if (categoryMap[key] > maxAmount) {
      maxAmount = categoryMap[key];
      maxCategory = key;
    }
  }

  const currentMonth = new Date().getMonth();
  const lastMonth = currentMonth - 1;

  let currentMonthExpense = 0;
  let lastMonthExpense = 0;

  transactions.forEach((t) => {
    const month = new Date(t.date).getMonth();

    if (t.type === "expense") {
      if (month === currentMonth) currentMonthExpense += t.amount;
      else if (month === lastMonth) lastMonthExpense += t.amount;
    }
  });

  let comparisonText = "No data for comparison";

  if (lastMonthExpense > 0) {
    const diff =
      ((currentMonthExpense - lastMonthExpense) /
        lastMonthExpense) *
      100;

    comparisonText =
      diff > 0
        ? `You spent ${diff.toFixed(1)}% more than last month`
        : `You spent ${Math.abs(diff).toFixed(1)}% less than last month`;
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md">
      <h2 className="font-semibold mb-2 dark:text-white">Insights</h2>

      <p>🏆 Highest spending: {maxCategory}</p>
      <p>💸 Amount spent: ₹ {maxAmount}</p>

      <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
        📊 {comparisonText}
      </div>
    </div>
  );
};

export default Insights;