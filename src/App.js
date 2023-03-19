import React, { useState, useEffect } from "react";
import List from "./components/list/List";
import Alert from "./components/alert/Alert";
import Navbar from "./components/navbar/Navbar";
import Submit from "./components/submit/Submit";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";

function App() {
  const { grocerieList, setGrocerieList, alert, setAlert } =
    useContext(GlobalContext);

  useEffect(() => {
    localStorage.setItem("groceries", JSON.stringify(grocerieList));
  }, [grocerieList]);

  // // state for enable/disable buttons
  // const [currentBtn, setCurrentBtn] = useState(false);

  // //state for current ID
  // const [currentID, setCurrentID] = useState("");

  // //state for showing the alert
  // const [showAlert, setShowAlert] = useState(null);

  // change the state propertie of edit -> true/false by removing the element from the array and replacing with the new
  // const changeEdit = function (id, el) {
  //   console.log(el.current);
  //   // el.current.focus();
  //   const grocerieCopy = [...grocerieList];
  //   for (let i = 0; i < grocerieCopy.length; i++) {
  //     if (id === grocerieCopy[i].id) {
  //       if (grocerieCopy[i].edit === true) {
  //         grocerieCopy.splice(i, 1, {
  //           ...grocerieList[i],
  //           // title: inputEdit,
  //           edit: false,
  //         });
  //       } else
  //         grocerieCopy.splice(i, 1, {
  //           ...grocerieList[i],
  //           edit: true,
  //         });
  //     }
  //   }
  //   setGrocerieList(grocerieCopy);
  //   // setInputEdit("");
  //   setCurrentID(id);
  //   setCurrentBtn((prevState) => !prevState);
  // };

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
        <Submit
          // addGrocerie={addGrocerie}
          // input={input}
          grocerieList={grocerieList}
        />
        <List
          grocerieList={grocerieList}
          // deleteItem={deleteItem}
          // emptyList={emptyList}
          // changeEdit={changeEdit}
          // inputEdit={inputEdit}
          // changeInputEdit={changeInputEdit}
          // currentBtn={currentBtn}
          // currentID={currentID}
        />
      </div>
    </div>
  );
}

export default App;
