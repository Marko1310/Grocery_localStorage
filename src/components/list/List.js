import React, { useContext, useRef } from "react";
import "./List.css";
import { GlobalContext } from "../../context/GlobalContext";
import Grocerie from "../grocerie/Grocerie";

const List = ({
  // grocerieList,
  // deleteItem,
  // emptyList,
  // changeEdit,
  changeInputEdit,
  // inputEdit,
  currentBtn,
  currentID,
}) => {
  const { grocerieList, setGrocerieList } = useContext(GlobalContext);
  const { edit, setEdit } = useContext(GlobalContext);

  // function to remove all groceries
  const emptyList = function () {
    if (window.confirm("Are you sure you want to delete all the groceries?")) {
      setGrocerieList([]);
    }
  };

  // change the state propertie of edit -> true/false by removing the element from the array and replacing with the new
  const changeEdit = function (id, el) {
    console.log(el.current);
    // el.current.focus();
    const grocerieCopy = [...grocerieList];
    for (let i = 0; i < grocerieCopy.length; i++) {
      if (id === grocerieCopy[i].id) {
        if (grocerieCopy[i].edit === true) {
          grocerieCopy.splice(i, 1, {
            ...grocerieList[i],
            // title: inputEdit,
            edit: false,
          });
        } else
          grocerieCopy.splice(i, 1, {
            ...grocerieList[i],
            edit: true,
          });
      }
    }
    setGrocerieList(grocerieCopy);
    // setInputEdit("");
    // setCurrentID(id);
    // setCurrentBtn((prevState) => !prevState);
  };

  return (
    <div className="grocery-list-container">
      <ul>
        {grocerieList.map((grocerie) => {
          return <Grocerie key={grocerie.id} grocerie={grocerie} />;
        })}
      </ul>
      <div className="clear-btn" onClick={emptyList}>
        Clear list
      </div>
    </div>
  );
};

export default List;
