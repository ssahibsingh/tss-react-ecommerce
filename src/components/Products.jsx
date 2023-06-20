import React from "react";

import { Link } from "react-router-dom";

import data from '../data'

const Products = () => {
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {data.map((product) => {
            return (
              <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                <div className="card text-center h-100" key={product.id}>
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
                    <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                      Buy Now
                    </Link>
                    <button className="btn btn-dark m-1" >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
