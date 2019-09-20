import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import PropTypes from 'prop-types';

const ProductPage = (props) => {
  return (
    <>
      <h1>Product Page</h1>
      <Product name={props.match.params.name} />
      <Link to='/products'>Back to all products</Link>
    </>
  );
}

ProductPage.propTypes = {
  props: PropTypes.string,
}

export default ProductPage;