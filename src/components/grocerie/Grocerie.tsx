// react
import React, { useContext, useRef, useState } from "react";

// css
import "./Grocerie.css";

// context
import { GlobalContext } from "../../context/GlobalContext";

const Grocerie = ({ grocerie }) => {
  // states
  const [content, setContent] = useState(grocerie.title);
  // state -> is the component edited or not
  const [edit, setEdit] = useState(false);

  // context
  const { grocerieList, setGrocerieList } = useContext(GlobalContext);

  // function to delete item
  const deleteItem = function (id) {
    setGrocerieList(grocerieList.filter((el) => el.id !== id));
  };

  // function to edit each field
  const handleEdit = function (content) {
    let newGrocerieList;
    if (!edit) {
      inputEl.current.focus();
    } else {
      newGrocerieList = grocerieList.map((el) => {
        if (el.id === grocerie.id) {
          el.title = content;
        }
        return el;
      });
      setGrocerieList(newGrocerieList);
    }
    setEdit((prevState) => !prevState);
  };

  // useref to focus on edit field
  const inputEl = useRef(null);

  return (
    <li className="grocery-list-item">
      <input
        ref={inputEl}
        type="text"
        name="grocery"
        placeholder={grocerie.title}
        value={content}
        readOnly={!edit}
        className={edit ? "edit-form" : "grocerie-title"}
        onChange={(e) => setContent(e.target.value)}
      ></input>
      <div className="submit-buttons">
        <button
          className={edit ? `submit-btn confirm` : `submit-btn edit`}
          onClick={() => handleEdit(content)}
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
