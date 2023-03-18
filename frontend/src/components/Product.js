import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ product }) => {
  const history = useHistory();
  const addToCartHandler = () => {
    history.push(`/cart/${product._id}?qty=${1}`);
  };

  return (
    <Card className="my-3 p-3 rounded product_card">
      <Link to={`/product/${product._id}`}>
        <img
          className="product_card_img"
          src={product.image}
          alt={product.name}
        />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title className="product_card_title" as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="p">Sold by: {product.brand}</Card.Text>

        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">&#8377;{product.price}</Card.Text>
        <Button
          onClick={addToCartHandler}
          className="btn-block"
          type="button"
          disabled={product.countInStock === 0}
        >
          {product.countInStock !== 0 ? 'Add To Cart' : 'Sold Out!'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
