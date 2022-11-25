import React from "react";
import "./Home.scss";

function Home() {
  const nomCliente = "Maria Conde Castillo";
  const cant = 12000;
  const inc = 400;
  const out = 300;
  let res;
  if (inc - out < 0) {
    res = "balance negative";
  } else {
    res = "balance positive";
  }

  return (
    <div className="container">
      <div className="divClient">
        <h2 className="client">{nomCliente}</h2>
        <div className="money">${cant}</div>
      </div>
      <div className={res}>
        <div className="text1">Balance:</div>
        <div>{inc - out}</div>
      </div>
      <div className="income">
        <div className="text">Income:</div>
        <div>{inc}</div>
      </div>
      <div className="expenses">
        <div className="text">Income:</div>
        <div>-{out}</div>
      </div>

      <div className="transaction">
        <table className="tableTransactions">
          <tr>
            <th className="titulo">CANTIDAD</th>
            <th className="titulo">ASUNTO</th>
          </tr>
          <tr>
            <td className="cantidad">Cantidad</td>
            <td className="asunto">Asunto</td>
          </tr>
          <tr>
            <td className="cantidad">Cantidad</td>
            <td className="asunto">Asunto</td>
          </tr>
          <tr>
            <td className="cantidad">Cantidad</td>
            <td className="asunto">Asunto</td>
          </tr>
          <tr>
            <td className="cantidad">Cantidad</td>
            <td className="asunto">Asunto</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Home;
