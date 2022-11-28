import React, { useState } from "react";
import "./TransactionDetails.css";

function TransactionDetails(props) {
  // if (props.transaction.length === 0) return <p>No hay na</p>;
  return (
    <div className="mainTransactionDetailsBlock">
      <div className="transactionChildBlock1">{props.transaction}</div>
      <div className="transactionChildBlock2">{props.amount} €</div>
    </div>
  );
}
export default TransactionDetails;
