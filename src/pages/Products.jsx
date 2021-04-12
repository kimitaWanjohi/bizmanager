import React, {useContext, useState} from 'react'
import Layout from '../components/Layout';
import {ProductContext, saveProducts} from '../ProductContext';
import Product from '../components/Product';
import AddForm from '../components/AddForm';


export default function Products () {
    
    const {products, setProducts} = useContext(ProductContext)
    const [showAdd, setShowAdd] = useState(false)

    const addProduct = async(newProd) => {
        let newProds = [...products, newProd]
        setProducts(newProds)
        saveProducts(newProds)
        setShowAdd(false)
    }

    return (
        <Layout title="Products">
            <div className="head">
                <div className="pd-5">
                    {
                        showAdd? (
                            <div className="bg-primary size-60">
                            <AddForm addProduct={addProduct}/>
                            <button className="btn btn-danger btn-sm" onClick={()=> setShowAdd(false)}>Close</button> 
                            </div>
                        ):
                        (
                            <button className="btn btn-info btn-sm" onClick={()=> setShowAdd(true)} >Add Product</button> 
                        )

                    }
                </div>
            </div>
            <div>
                {
                    products.map((product, index) => {
                        return(
                            <Product product={product} key={index}/>
                        )
                    })
                }
            </div>
            
        </Layout>
    )
}