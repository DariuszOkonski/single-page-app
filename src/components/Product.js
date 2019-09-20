import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ name }) => {
  return (
    <div>{name}</div>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Product;