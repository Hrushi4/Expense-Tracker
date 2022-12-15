import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
