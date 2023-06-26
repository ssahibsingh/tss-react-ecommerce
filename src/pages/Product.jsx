import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer, Navbar } from "../components";
import axios from "axios";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    axios.get(`https://tss-backend-aqx2.onrender.com/api/product/${id}`).then((res) => {
      // console.log(res.data.product[0])
      setProduct(res.data.product[0])
    }).catch((err) => {
      console.log(err)
      setError(true)
    })
  }, [id])

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5 py-2">
          <div className="row">
            <div className="col-md-6 col-sm-12 py-3">
              <img
                className="img-fluid"
                src={product.image}
                alt={product.title}
                width="400px"
                height="400px"
              />
            </div>
            <div className="col-md-6 col-md-6 py-5">
              <h4 className="text-uppercase text-muted">{product.category}</h4>
              <h1 className="display-5">{product.title}</h1>
              <p className="lead">
                {product.rating && product.rating.rate}{" "}
                <i className="fa fa-star"></i>
              </p>
              <h3 className="display-6  my-4">${product.price}</h3>
              <p className="lead">{product.description}</p>
              <button
                className="btn btn-outline-dark"
              // onClick={() => addProduct(product)}
              >
                Add to Cart
              </button>
              <Link to="/cart" className="btn btn-dark mx-3">
                Go to Cart
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {error ? <p className='text-danger display-6 text-center'>Something went wrong</p> : <ShowProduct />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
