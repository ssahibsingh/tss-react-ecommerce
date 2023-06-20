import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer, Navbar } from "../components";
import data from "../data";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    data.filter((item) => {
      console.log(item.id, id)
      if (item.id.toString() === id) {
        setProduct(item)
        return item
      }
      return null
    })
  })

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

  // const ShowSimilarProduct = () => {
  //   return (
  //     <>
  //       <div className="py-4 my-4">
  //         <div className="d-flex">
  //           {similarProducts.map((item) => {
  //             return (
  //               <div key={item.id} className="card mx-4 text-center">
  //                 <img
  //                   className="card-img-top p-3"
  //                   src={item.image}
  //                   alt="Card"
  //                   height={300}
  //                   width={300}
  //                 />
  //                 <div className="card-body">
  //                   <h5 className="card-title">
  //                     {item.title.substring(0, 15)}...
  //                   </h5>
  //                 </div>
  //                 {/* <ul className="list-group list-group-flush">
  //                   <li className="list-group-item lead">${product.price}</li>
  //                 </ul> */}
  //                 <div className="card-body">
  //                   <Link
  //                     to={"/product/" + item.id}
  //                     className="btn btn-dark m-1"
  //                   >
  //                     Buy Now
  //                   </Link>
  //                   <button
  //                     className="btn btn-dark m-1"
  //                     onClick={() => addProduct(item)}
  //                   >
  //                     Add to Cart
  //                   </button>
  //                 </div>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </>
  //   );
  // };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row"><ShowProduct /></div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
