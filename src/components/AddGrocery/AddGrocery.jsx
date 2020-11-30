import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

export const AddGrocery = ({ addNewGrocery }) => {
  const [name, setName] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  const handleNameChange = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const handlePriorityChange = useCallback((event) => {
    setPriority(event.target.value);
  }, []);

  const handleStatusChange = useCallback((event) => {
    setStatus(event.target.value);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!priority || !status) {
      return;
    }

    addNewGrocery(name, priority, status);
    setName('');
    setPriority('');
    setStatus('');
  };

  return (
    <div className="col-4">
      <h3 className="m-2">Add new product</h3>
      <form onSubmit={handleSubmit} className="form-group m-2">
        <input
          type="text"
          className="new-product form-control mb-3"
          placeholder="Enter product name"
          required
          value={name}
          onChange={handleNameChange}
        />

        <select
          className="custom-select mb-3"
          value={priority}
          onChange={handlePriorityChange}
          required
        >
          <option value="">Select priority</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <select
          className="custom-select mb-4"
          value={status}
          onChange={handleStatusChange}
          required
        >
          <option value="">Select status</option>
          <option value="ranOut">Ran out</option>
          <option value="have">Have</option>
        </select>

        <div>
          <button
            type="submit"
            className="btn btn-info"
          >
            Add product
          </button>
        </div>
      </form>
    </div>
  );
};

AddGrocery.propTypes = {
  addNewGrocery: PropTypes.func.isRequired,
};
