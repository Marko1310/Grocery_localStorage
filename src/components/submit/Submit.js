import "./Submit.css";
import { GlobalContext } from "../../context/GlobalContext";
import { useContext } from "react";

const Submit = () => {
  const { input, setInput, setAlert, setGrocerieList } =
    useContext(GlobalContext);

  // function to update the input state field when entering the que
  const changeInput = function (e) {
    setInput(e.target.value);
  };

  // function to add groceries
  const addGrocerie = function () {
    const id = Math.random();

    if (input !== "") {
      setAlert(false);
      setGrocerieList((prevGrocerieList) => {
        return [...prevGrocerieList, { title: input, id: id, edit: false }];
      });
    } else {
      setAlert(true);
    }
    setInput("");
  };

  return (
    <form
      className="submit-container"
      onSubmit={(e) => {
        e.preventDefault();
        addGrocerie();
      }}
    >
      <input
        type="text"
        id="grocery"
        name="grocery"
        placeholder="e.g. banana"
        value={input}
        className="submit-input"
        onChange={(e) => changeInput(e)}
      ></input>
      <input type="submit" value="Add grocerie" className="submit-btn"></input>
    </form>
  );
};

export default Submit;
