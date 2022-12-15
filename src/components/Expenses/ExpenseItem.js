import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  let style = { listStyleType: "none" };
  return (
    <li style={style}>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__despcription">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
