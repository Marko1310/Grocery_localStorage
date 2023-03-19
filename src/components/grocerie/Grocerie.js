import React, { useContext, useRef, useState } from "react";
import "./Grocerie.css";
import { GlobalContext } from "../../context/GlobalContext";

const Grocerie = ({ grocerie }) => {
  const [edit, setEdit] = useState(false);
  console.log(edit);
  const { grocerieList, setGrocerieList } = useContext(GlobalContext);

  // function to delete item
  const deleteItem = function (id) {
    // filter items in array that id is not equal to selected id
    setGrocerieList(grocerieList.filter((el) => el.id !== id));
  };

  const inputEl = useRef(null);

  return (
    <li className="grocery-list-item">
      {edit === false ? (
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
          //   onChange={(e) => changeInputEdit(e)}
        ></input>
      )}
      <div className="submit-buttons">
        <button
          className={edit ? `submit-btn confirm` : `submit-btn edit`}
          onClick={() => setEdit((prevState) => !prevState)}
          //   disabled={currentID !== grocerie.id && currentBtn}
        >
          {edit ? "Confirm" : "Edit"}
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
};

export default Grocerie;
