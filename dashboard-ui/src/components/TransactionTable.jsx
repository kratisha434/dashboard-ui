const TransactionTable = ({ transactions, role, onDelete, onEdit }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-md overflow-x-auto">
      <table className="w-full text-left">
        
        <thead>
          <tr className="text-gray-500 dark:text-gray-300 bg-gray-50 dark:bg-gray-700">
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4">
                No transactions found
              </td>
            </tr>
          ) : (
            transactions.map((t) => (
              <tr
                key={t.id}
                className="border-t hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td>{t.date}</td>
                <td>{t.category}</td>
                <td>₹ {t.amount}</td>

                <td
                  className={
                    t.type === "income"
                      ? "text-green-500"
                      : "text-red-400"
                  }
                >
                  {t.type}
                </td>

                <td className="flex gap-2">
                  {role === "admin" && (
                    <>
                      <button
                        onClick={() => onEdit(t)}
                        className="text-blue-500 hover:underline"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => onDelete(t.id)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;