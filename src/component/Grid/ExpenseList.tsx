interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id?: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
// export default function MyGrid(props: GridDataList[]) {
//   return (
//     <DataTable
//       columns={[
//         { accessor: "description" },
//         { accessor: "amaunt" },
//         { accessor: "category" },
//       ]}
//       records={props}
//       rowContextMenu={{
//         items: (record) => [
//           // ...
//           {
//             key: "delete",
//             color: "red",
//             // 👇 hide this item for the 1st row
//             hidden: props.indexOf(record) === 0,
//             title: `Delete  ${record.description}`,
//             onClick: () => {
//               debugger;
//             },
//           },
//           // ...
//         ],
//       }}
//     />
//   );
// }
