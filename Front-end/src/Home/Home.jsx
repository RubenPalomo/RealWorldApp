import React from 'react';
import './Home.scss';

function Home() {
  const inc = 200;
  const out = 300;

  return (
    <div>
      <div className="divParent">
        <div className="divChild">
          <h2 className="nombreCliente">Maria Conde Castillo</h2>
          <div className="showMoney">$12000</div>
        </div>
        <div className="divChild">
          <div className="balance showMoney">{inc - out}</div>
          <div className="divParent incomeExpense">
            <div className="divChild balance income showMoney">{inc}</div>
            <div className="divChild balance expenses showMoney">-{out}</div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
