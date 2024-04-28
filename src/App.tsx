import "./App.css";
import AddItems from "./AddItems";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

function App() {
  const [category, setCategory] = useState("");
  const [expanse, setExpense] = useState([
    { id: 1, description: "milk", amount: 100, category: "Gecroecries" },
    { id: 2, description: "juice", amount: 100, category: "Gecroecries" },
    { id: 3, description: "movie", amount: 100, category: "Entertainment" },
    { id: 4, description: "hammer", amount: 100, category: "Utilities" },
  ]);
  const expenses = category
    ? expanse.filter((item) => item.category === category)
    : expanse;
  return (
    <>
      <AddItems
        onSubmit={(exp) =>
          setExpense([...expanse, { ...exp, id: expanse.length + 1 }])
        }
      />
      <ExpenseFilter onSelect={(category) => setCategory(category)} />

      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpense(expanse.filter((e) => e.id != id))}
      />
    </>
  );
}

export default App;
