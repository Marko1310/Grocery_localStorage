// react
import React, { useContext } from 'react';

// css
import './List.css';

// context
import { GlobalContext } from '../../context/GlobalContext';

// component
import Grocerie from '../grocerie/Grocerie';

const List = () => {
  // context
  const context = useContext(GlobalContext);

  if (context === null) {
    return null;
  }

  const { grocerieList, setGrocerieList } = context;

  // function to remove all groceries
  const emptyList = function () {
    if (window.confirm('Are you sure you want to delete all the groceries?')) {
      setGrocerieList([]);
    }
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
