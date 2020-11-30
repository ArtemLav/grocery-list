import React, { useMemo, useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { FILTERS } from './constants/constants';
import { AddGrocery } from './components/AddGrocery/AddGrocery';
import { GroceryList } from './components/GroceryList/GroceryList';

export const App = () => {
  const [groceryList, setGroceryList] = useLocalStorage('groceryList', []);
  const [activeGroceryFilter, setActiveGroceryFilter] = useState(FILTERS.all);

  const addNewGrocery = (name, priority, status) => {
    const newGrocery = {
      name,
      priority,
      status,
      id: +new Date(),
    };

    setGroceryList([...groceryList, newGrocery]);
  };

  const filterGrocery = () => {
    switch (activeGroceryFilter) {
      case FILTERS.all:
        return groceryList;

      case FILTERS.have:
        return groceryList.filter(item => item.status === 'have');

      case FILTERS.ranOut:
        return groceryList.filter(item => item.status === 'ranOut');

      default:
        return groceryList;
    }
  };

  const filteredGrocery = useMemo(
    () => filterGrocery(),
    [activeGroceryFilter, groceryList],
  );

  const removeGrocery = (id) => {
    setGroceryList(groceryList.filter(item => item.id !== id));
  };

  const changeStatus = (status, id) => {
    setGroceryList(groceryList.map((item) => {
      if (item.id !== id) {
        return { ...item };
      }

      return {
        ...item,
        status,
      };
    }));
  };

  return (
    <div className="container">
      <h1 className="text-center">Grocery List</h1>
      <div className="row">
        <AddGrocery addNewGrocery={addNewGrocery} />
        <GroceryList
          filteredGrocery={filteredGrocery}
          groceryList={groceryList}
          removeGrocery={removeGrocery}
          changeStatus={changeStatus}
          setActiveGroceryFilter={setActiveGroceryFilter}
          filters={FILTERS}
        />
      </div>
    </div>
  );
};
