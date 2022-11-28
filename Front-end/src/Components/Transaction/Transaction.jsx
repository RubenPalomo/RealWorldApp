import React, { useState } from "react";
import "./Transaction.css";
import TransactionDetails from "./Components/TransactionDetails";

function Transaction(props) {
  let [transactions, setTransactions] = useState(props.transactionDetails);
  let [income, setIncome] = useState(props.income);
  let [expenses, setExpenses] = useState(props.expenses);

  if (transactions == 0) {
    return (
      <div className="mainTransactionBlock">
        <div className="childBlock1">
          <div className="saldoBlock">
            <p className="saldoTitle">
              <u>SALDO TOTAL</u>
            </p>
            <p className="saldoAmount">0 €</p>
          </div>
          <div>
            <div className="childBlock1-1">
              <p className="title">INGRESOS</p>
              <p>No hay na</p>
              {/* <span>dinero</span> */}
            </div>
            <div className="childBlock1-2">
              <p className="title">GASTOS</p>
              <p>No hay na</p>
            </div>
          </div>
        </div>
        <div className="childBlock2">
          <div>
            <p>No hay na</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mainTransactionBlock">
      <div className="childBlock1">
        <div className="saldoBlock">
          <p className="saldoTitle">
            <u>SALDO TOTAL</u>
          </p>
          <p className="saldoAmount">
            {income.reduce((a, b) => a + b, 0) -
              expenses.reduce((a, b) => a + b, 0)}
            &nbsp;€
          </p>
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
