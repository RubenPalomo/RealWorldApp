import React, { useState } from "react";
import "./Transaction.css";
import TransactionDetails from "./Components/TransactionDetails";

function Transaction(props) {
  let [transactions, setTransactions] = useState(props.transactionDetails);
  return (
    <div className="mainTransactionBlock">
      <div className="childBlock1">
        <div className="saldoBlock">
          <p className="saldoTitle">
            <u>SALDO TOTAL</u>
          </p>
          <p className="saldoAmount">1037827</p>
        </div>
        <div>
          <div className="childBlock1-1">
            <p>INGRESOS</p> <hr />
            <span>dinero</span>
          </div>
          <div className="childBlock1-2">
            <p>GASTOS</p> <hr />
            <span>dinero</span>
          </div>
        </div>
      </div>
      <div className="childBlock2">
        {transactions.map((transaction, index) => (
          <TransactionDetails
            key={index}
            transaction={transaction.transactionName}
            amount={transaction.amount}
          />
        ))}
      </div>
    </div>
  );
}

export default Transaction;
