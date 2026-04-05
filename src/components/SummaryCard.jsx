

const SummaryCard = ({ title, amount }) => {
  const color =
    title === "Income"
      ? "text-green-600"
      : title === "Expenses"
      ? "text-red-500"
      : "text-blue-600";

  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-5 rounded-2xl shadow-md hover:shadow-xl transition">
      <h2 className="text-gray-500 dark:text-gray-300 text-sm">{title}</h2>
      <p className={`text-2xl font-bold mt-2 ${color}`}>
        {amount === 0 ? "No data" : `₹ ${amount}`}
      </p>
    </div>
  );
};

export default SummaryCard;