import React from "react";
import Transaction from "../../components/Transaction/Transaction";

function Transactions(props) {
  // const transactions = [];
  const transactions = [
    { transactionName: "Transaction1", amount: 50 },
    { transactionName: "Transaction2", amount: 100 },
    { transactionName: "Transaction3", amount: 150 },
  ];
  const income = [200, 300, 400];
  const expenses = [20, 30, 40];
  // const expenses = [];
  props.functUseHeader(true);

  return (
    <div className="App">
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

export default Transactions;
