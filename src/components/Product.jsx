import React, {useState} from 'react';
import EditForm from './EditForm'

export default function Product({product}){

    const [showEdit, setShowEdit] = useState(false)
    
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
                        <button className="btn btn-info btn-sm" onClick={()=> setShowEdit(true)} >edit</button>
                    )
                }
                </div>
            </div>
        </div>
    )
}