import React from "react";
import List from "./components/list/List";
import Alert from "./components/alert/Alert";
import Navbar from "./components/navbar/Navbar";
import Submit from "./components/submit/Submit";
import { useState } from "react";

function App() {
  // alert pop up
  const [alert, setAlert] = useState(false);

  // function to remove alert
  const removeALert = function () {
    setAlert(false);
  };

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <div className="alert-container">
          {alert && <Alert removeALert={removeALert} />}
        </div>
        <Submit setAlert={setAlert} />
        <List />
      </div>
    </div>
  );
}

export default App;
