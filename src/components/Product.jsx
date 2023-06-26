import React from 'react'
import { Link } from 'react-router-dom'

const Product2 = ({data}) => {
  const product = data
  console.log(product)
  return (
    <>
      <div id={product.productId} key={product.productId} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
        <div className="card text-center h-100" key={product.productId}>
          <img
            className="card-img-top p-3"
            src={product.image}
            alt="Card"
            height={300}
          />
          <div className="card-body">
            <h5 className="card-title">
              {product.title.substring(0, 12)}...
            </h5>
            <p className="card-text">
              {product.description.substring(0, 90)}...
            </p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item lead">$ {product.price}</li>
          </ul>
          <div className="card-body">
            <Link to={"/product/" + product.productId} className="btn btn-dark m-1">
              Buy Now
            </Link>
            <button className="btn btn-dark m-1" >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product2