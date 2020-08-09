import React from "react";
import "./App.css";

import { Header } from "./component/Header";
import BalanceComponet from "./component/BalanceComponet";
import IncomeExpense from "./component/IncomeExpense";
import History from "./component/History";
import Transaction from "./component/Transaction";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Header />
        <div className="container">
          <BalanceComponet />
          <IncomeExpense />
          <History />
          <Transaction />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
