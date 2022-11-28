import "./App.scss";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { useState } from "react";

function App() {
  const [useHeader, functUseHeader] = useState(true);
  return (
    <div className="App">
      <Header className="header" useHeader={useHeader}></Header>
      <Body className="body" functUseHeader={functUseHeader}></Body>
    </div>
  );
}

export default App;
