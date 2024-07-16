import React, { createContext } from "react";
import "./App.css";
import CompA from "./components/CompA.jsx";

const FName = createContext();
const LName = createContext();

function App() {
  return (
    <>
      <FName.Provider value={"Ansari"}>
        <LName.Provider value={"Developer"}>
          <CompA />
        </LName.Provider>
      </FName.Provider>
    </>
  );
}

export default App;
export { FName , LName};