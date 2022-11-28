import React, { useState } from "react";
import "./Transaction.css";
import TransactionDetails from "./components/TransactionDetails";

function Transaction(props) {
  let transactions = props.transactionDetails;
  let income = props.income;
  let expenses = props.expenses;
  console.log(transactions === 0);
  console.log(transactions);
  if (transactions.length === 0) {
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
              <p>No Data</p>
            </div>
            <div className="childBlock1-2">
              <p className="title">GASTOS</p>
              <p>No Data</p>
            </div>
          </div>
        </div>
        <div className="childBlock2">
          <div>
            <p>No Data</p>
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
