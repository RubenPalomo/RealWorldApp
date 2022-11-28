import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Transaction from "./components/Transaction/Transaction";

function App() {
  // const transactions = [];
  const transactions = [
    { transactionName: "Transaction1", amount: 50 },
    { transactionName: "Transaction2", amount: 100 },
    { transactionName: "Transaction3", amount: 150 },
  ];
  const income = [200, 300, 400];
  const expenses = [20, 30, 40];
  // const expenses = [];

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section>
        <Transaction
          transactionDetails={transactions}
          income={income}
          expenses={expenses}
        />
      </section>
    </div>
  );
}

export default App;
