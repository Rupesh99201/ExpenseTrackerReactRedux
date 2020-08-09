import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import TransactionHistory from "./TransactionHistory";

export default function History() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <TransactionHistory key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
