import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
  const history = useHistory()
  const addToCartHandler = () => {
    history.push(`/cart/${product._id}?qty=${1}`)
  }

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

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
  )
}

export default Product
