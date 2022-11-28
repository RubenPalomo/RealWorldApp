import React from "react";
import "./Notifications.scss";

function Notifications(props) {
  props.functUseHeader(true);

  return (
    <div>
      <div className="containerNotif">
        <div className="notifications">
          <h1>Notifications</h1>
        </div>
        <div className="notList">
          <table className="">
            <tr>
              <th className="">CANTIDAD</th>
              <th className="">ASUNTO</th>
            </tr>
            <tr>
              <td className="">Cantidad</td>
              <td className="">Asunto</td>
            </tr>
            <tr>
              <td className="">Cantidad</td>
              <td className="">Asunto</td>
            </tr>
            <tr>
              <td className="">Cantidad</td>
              <td className="">Asunto</td>
            </tr>
            <tr>
              <td className="">Cantidad</td>
              <td className="">Asunto</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
