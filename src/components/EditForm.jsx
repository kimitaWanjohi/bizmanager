import React, {useState, useContext} from 'react';
import {saveProducts, ProductContext} from '../ProductContext';

export default function EditForm({product}) {
    const {products} = useContext(ProductContext);
    
    const [name, setName] = useState(product.name)
    const [bPrice, setBPrice] = useState(product.bPrice)
    const [sPrice, setSPrice] = useState(product.sPrice)
    const [quantity, setQuantity] = useState(product.quantity)

    const save =( event )=> {
        event.preventDefault()
        product.name = name;
        product.bPrice = bPrice
        product.sPrice = sPrice
        product.quantity = quantity
        saveProducts(products)
    }

    return (
        <div>
        <div className="bg-light container-fluid">
                <form onSubmit={save}>
                <div className="pd-5">
                    <label sytle={{textAlign:'center'}}>Name:</label>
                    <input placeholder={name} className="form-control" type="text" onChange={(e)=> setName(e.target.value)} />
                </div>

                <div className="pd-5">
                    <label sytle={{textAlign:'center'}}>Buying Price:</label>
                    <input placeholder={bPrice} className="form-control" type="number" onChange={e=> setBPrice(e.target.value)} />
                </div>

                <div className="pd-5">
                    <label sytle={{textAlign:'center'}}>Selling Price:</label>
                    <input placeholder={sPrice} className="form-control" type="number" onChange={e=> setSPrice(e.target.value)} />
                </div>
                
                <div className="pd-5">
                <   label sytle={{textAlign:'center'}}>Quantity:</label>
                    <input placeholder={quantity} className="form-control" type="number" onChange={e=> setQuantity(e.target.value)}/>
                </div>
                <div className="pd-5">
                    <input type="submit" className="btn btn-warning rounded-pill" value="SAVE"/>
                </div>
                </form>

            </div>
        </div>
    )
}
