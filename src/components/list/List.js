import React, { useContext, useRef } from "react";
import "./List.css";
import { GlobalContext } from "../../context/GlobalContext";

const List = ({
  // grocerieList,
  // deleteItem,
  emptyList,
  changeEdit,
  changeInputEdit,
  // inputEdit,
  currentBtn,
  currentID,
}) => {
  const { grocerieList, setGrocerieList } = useContext(GlobalContext);
  const inputEl = useRef(null);

  // function to delete item
  const deleteItem = function (id) {
    // filter items in array that id is not equal to selected id
    setGrocerieList(grocerieList.filter((el) => el.id !== id));
  };

  return (
    <div className="grocery-list-container">
      <ul>
        {grocerieList.map((grocerie) => {
          return (
            <li key={grocerie.id} className="grocery-list-item">
              {grocerie.edit === false ? (
                <div>{grocerie.title}</div>
              ) : (
                <input
                  ref={inputEl}
                  type="text"
                  id="grocery"
                  name="grocery"
                  placeholder={grocerie.title}
                  // value={inputEdit}
                  className="submit-edit"
                  onChange={(e) => changeInputEdit(e)}
                ></input>
              )}
              <div className="submit-buttons">
                <button
                  className={
                    grocerie.edit ? `submit-btn confirm` : `submit-btn edit`
                  }
                  onClick={(e) => changeEdit(grocerie.id, inputEl)}
                  disabled={currentID !== grocerie.id && currentBtn}
                >
                  {grocerie.edit ? "Confirm" : "Edit"}
                </button>

                <button
                  className="submit-btn delete"
                  onClick={() => deleteItem(grocerie.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="clear-btn" onClick={emptyList}>
        Clear list
      </div>
    </div>
  );
};

export default List;
