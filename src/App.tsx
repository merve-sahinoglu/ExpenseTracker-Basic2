import { MantineProvider, Container } from "@mantine/core";
import "@mantine/core/styles.css";
import MyForm from "./component/form/MyForm";
import ExpenseList from "./component/Grid/ExpenseList";
import { useState } from "react";

export default function App() {
  const [expenses, setExpences] = useState([
    {
      id: 1,
      description: "Bilgisayar",
      amount: 6,
      category: "Groceries",
    },
  ]);

  const onDelete = (id?: number) => {
    if (id === undefined) return;
    const newExpenceList = expenses.filter((x) => x.id !== id);
    setExpences(newExpenceList);
  };

  return (
    <MantineProvider>
      <Container>
        {
          <>
            <div>
              <MyForm
                onSubmit={(expence) =>
                  setExpences([
                    ...expenses,
                    {
                      ...expence,
                      id: expenses.length + 1,
                    },
                  ])
                }
              />
            </div>
            <div>
              <ExpenseList expenses={expenses} onDelete={onDelete} />
            </div>
          </>
        }
      </Container>
    </MantineProvider>
  );
}
