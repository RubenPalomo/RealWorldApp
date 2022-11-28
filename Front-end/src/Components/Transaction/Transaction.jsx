import React, { useState } from "react";
import "./Transaction.css";
import TransactionDetails from "./Components/TransactionDetails";

function Transaction(props) {
  let [transactions, setTransactions] = useState(props.transactionDetails);
  let [income, setIncome] = useState(props.income);
  let [expenses, setExpenses] = useState(props.expenses);

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
            <p className="title">INGRESOS</p>
            <ul>
              {income.map((income, index) => (
                <li key={index}>{income} €</li>
              ))}
            </ul>
            {/* <span>dinero</span> */}
          </div>
          <div className="childBlock1-2">
            <p className="title">GASTOS</p>
            <ul>
              {expenses.map((expenses, index) => (
                <li key={index}>{expenses} €</li>
              ))}
            </ul>
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
