import PropTypes from 'prop-types';

export const GroceryShape = {
  name: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
