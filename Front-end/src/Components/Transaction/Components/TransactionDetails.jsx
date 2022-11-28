import React, { useState } from "react";
import "./TransactionDetails.css";

function TransactionDetails(props) {
  return (
    <div className="mainTransactionDetailsBlock">
      <div className="transactionChildBlock1">{props.transaction}</div>
      <div className="transactionChildBlock2">{props.amount} €</div>
    </div>
  );
}
export default TransactionDetails;
