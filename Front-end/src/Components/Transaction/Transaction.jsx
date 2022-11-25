import React from "react";
import "./Transaction.css";
import TransactionDetails from "./Components/TransactionDetails";

function Transaction() {
  ////////////////////////////////  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="mainTransactionBlock">
      <div className="childBlock1">
        <div className="saldoBlock">
          <p className="saldoTitle">SALDO TOTAL</p>
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
        <h1 className="noHayNa">NO HAY NA</h1>
        <TransactionDetails />
      </div>
    </div>
  );
}

export default Transaction;
