import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Transaction from "./Components/Transaction/Transaction";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section>
        <Transaction />
      </section>
    </div>
  );
}

export default App;
