import "./BurgerMenuItems.scss";

function BurgerMenuItems() {
  return (
    <div className="menu-items">
      <li>
        <a href="/home">Home</a>
      </li>
      <li>
        <a href="/user">My Account</a>
      </li>
      <li>
        <a href="/transactions">Bank Accounts</a>
      </li>
      <li>
        <a href="/notifications">Notifications</a>
      </li>
      <li>
        <a href="/logout">Logout</a>
      </li>
    </div>
  );
}

export default BurgerMenuItems;
