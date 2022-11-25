import React from "react";
import "./Transaction.css";
import TransactionDetails from "./Components/TransactionDetails";
function Transaction() {
  return (
    <div className="mainTransactionBlock">
      <div className="childBlock1">
        <div>
          <p>SALDO TOTAL:</p>
          <p>1037827</p>
        </div>
        <div>
          <div className="childBlock1-1">INGRESOS</div>
          <div className="childBlock1-2">GASTOS</div>
        </div>
      </div>
      <div className="childBlock2">
        <TransactionDetails />
        <TransactionDetails />
        <TransactionDetails />
      </div>
    </div>
  );
}

export default Transaction;
