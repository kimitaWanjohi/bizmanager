import React, {useState, useContext} from 'react';
import EditForm from './EditForm';
import {saveProducts, ProductContext} from '../ProductContext';

export default function Product({product}){

    const {products, setProducts} = useContext(ProductContext)
    const [showEdit, setShowEdit] = useState(false)

    const delProduct = (id) => {
        const newProds = products.filter(product => product.id !== id)
        setProducts(newProds)
        saveProducts(newProds)
    }
    
    return (
        <div className="container-custom">
            <div className="bg-grey">
                <div> 
                    <h5>{product.name} price: {product.sPrice}  left: {product.quantity}</h5>
                {
                    showEdit? (
                        <div className="bg-dark">
                            <EditForm product={ product }/>
                            <button className="btn btn-danger btn-sm" onClick={()=> setShowEdit(false)}>close</button>
                        </div>
                    ):(
                        <>
                        <button className="btn btn-info btn-sm" onClick={()=> setShowEdit(true)} >edit</button>{"   ||    "}
                        <button className="btn btn-sm btn-danger" onClick={()=>delProduct(product.id)}>delete</button>
                        </>
                    )
                }
                </div>
            </div>
        </div>
    )
}