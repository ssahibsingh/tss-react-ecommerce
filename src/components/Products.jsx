import React, { useEffect, useState } from 'react'
import { Product } from "../components"
import axios from 'axios'


const Products = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    useEffect(() => {
        axios.get('https://tss-backend-aqx2.onrender.com/api/product').then((res) => {
            console.log(res.data)
            setData(res.data.products)
        }).catch((err) => {
            console.log(err)
            setError(true)
        })
    }, [])
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
                    {data && data.map((product) => {
                        return (
                            <Product data={product} />
                        );
                    })}

                    {error && <p className='text-danger display-6 text-center'>Something went wrong</p>}
                </div>
            </div>
        </>
    )
}

export default Products