import React, { useContext, useRef, useState } from "react";
import "./Grocerie.css";
import { GlobalContext } from "../../context/GlobalContext";

const Grocerie = ({ grocerie }) => {
  // state is the component edited or not
  const [edit, setEdit] = useState(false);

  // state for edit field
  const [inputEdit, setInputEdit] = useState("");
  const { grocerieList, setGrocerieList } = useContext(GlobalContext);

  // function to delete item
  const deleteItem = function (id) {
    // filter items in array that id is not equal to selected id
    setGrocerieList(grocerieList.filter((el) => el.id !== id));
  };

  const handleEdit = function () {
    setEdit((prevState) => !prevState);
    console.log(inputEl.current);
    inputEl.current.focus();
  };

  const inputEl = useRef(null);

  return (
    <li className="grocery-list-item">
      <input
        ref={inputEl}
        type="text"
        id="grocery"
        name="grocery"
        placeholder={grocerie.title}
        value={grocerie.title}
        readOnly={!edit}
        className={edit ? "edit-form" : "grocerie-title"}
        onChange={(e) => setInputEdit(e.target.value)}
      ></input>
      <div className="submit-buttons">
        <button
          className={edit ? `submit-btn confirm` : `submit-btn edit`}
          onClick={() => handleEdit()}
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
