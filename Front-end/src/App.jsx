import "./App.scss";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";
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
