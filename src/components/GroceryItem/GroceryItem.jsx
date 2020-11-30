import React from 'react';
import PropTypes from 'prop-types';
import { GroceryShape } from '../../shapes/GroceryShape';

export const GroceryItem = ({ item, removeGrocery, changeStatus }) => (
  <div>
    <p className="text-primary">
      <span className="text-secondary">Name: </span>
      {item.name}
    </p>
    <p className="text-primary">
      <span className="text-secondary">Priority: </span>
      {item.priority}
    </p>
    <p className="text-primary">
      <span className="text-secondary">Status: </span>
      {item.status === 'have' ? 'Have' : 'Ran Out'}
    </p>

    <div>
      <span className="text-secondary">Change status</span>
      <select
        className="custom-select mx-3 w-25"
        onChange={event => changeStatus(event.target.value, item.id)}
      >
        <option value="">Change Status</option>
        <option value="ranOut">Ran out</option>
        <option value="have">Have</option>
      </select>
      <button
        type="button"
        className="btn btn-danger float-right"
        onClick={() => removeGrocery(item.id)}
      >
        Remove
      </button>
    </div>
  </div>
);

GroceryItem.propTypes = {
  removeGrocery: PropTypes.func.isRequired,
  changeStatus: PropTypes.func.isRequired,
  item: PropTypes.shape(GroceryShape).isRequired,
};
