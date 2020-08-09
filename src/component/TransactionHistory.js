import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function TransactionHistory({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li
        className={transaction.amount < 0 ? "minus" : "plus"}
        id={transaction.id}
      >
        {transaction.text}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </li>
    </div>
  );
}
