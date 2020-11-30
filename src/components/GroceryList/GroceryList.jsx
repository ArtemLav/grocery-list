import React from 'react';
import PropTypes from 'prop-types';
import { GroceryItem } from '../GroceryItem/GroceryItem';
import { GroceryShape } from '../../shapes/GroceryShape';

export const GroceryList = ({
  groceryList,
  filteredGrocery,
  removeGrocery,
  changeStatus,
  setActiveGroceryFilter,
  filters,
}) => (
  <div className="col-8">
    {!groceryList.length ? (
      <h1 className="text-center text-secondary">Your List is empty</h1>
    ) : (
      <div className="mt-5">
        <div className="btn-group">
          <button
            type="button"
            onClick={() => setActiveGroceryFilter(filters.all)}
            className="btn btn-secondary"
          >
            All
          </button>
          <button
            type="button"
            onClick={() => setActiveGroceryFilter(filters.have)}
            className="btn btn-primary"
          >
            Have
          </button>
          <button
            type="button"
            onClick={() => setActiveGroceryFilter(filters.ranOut)}
            className="btn btn-warning"
          >
            Ran Out
          </button>
        </div>
        <ul className="list-group">
          {filteredGrocery.map(item => (
            <li key={item.id} className="list-group-item bg-light">
              <GroceryItem
                item={item}
                removeGrocery={removeGrocery}
                changeStatus={changeStatus}
              />
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

GroceryList.propTypes = {
  setActiveGroceryFilter: PropTypes.func.isRequired,
  removeGrocery: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  groceryList: PropTypes.arrayOf(PropTypes.shape(GroceryShape)),
  filteredGrocery: PropTypes.arrayOf(PropTypes.shape(GroceryShape)),
  filters: PropTypes.shape({
    all: PropTypes.string.isRequired,
    have: PropTypes.string.isRequired,
    ranOut: PropTypes.string.isRequired,
  }).isRequired,
};

GroceryList.defaultProps = {
  groceryList: [],
  filteredGrocery: [],
};
