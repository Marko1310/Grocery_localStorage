// react
import { useContext } from 'react';

// css
import './Submit.css';

// context
import { GlobalContext } from '../../context/GlobalContext';

type SubmitProps = {
  setAlert: React.Dispatch<React.SetStateAction<boolean>>;
};

const Submit = ({ setAlert }: SubmitProps) => {
  // context
  const { input, setInput, setGrocerieList } = useContext(GlobalContext);

  // function to add groceries
  const addGrocerie = function () {
    const id = Math.random();

    if (input !== '') {
      setAlert(false);
      setGrocerieList((prevGrocerieList) => {
        return [...prevGrocerieList, { title: input, id: id }];
      });
    } else {
      setAlert(true);
    }
    setInput('');
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
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <input type="submit" value="Add" className="submit-btn"></input>
    </form>
  );
};

export default Submit;
