import React, {useState} from 'react';
import {saveProducts} from '../ProductContext';
import { saveRecords } from '../RecordContext';


export default function SellProd ({product, records, record, cashOut, setCashOut, products}) {



    const [amount, setAmount] = useState(0);
    const [err, setErr] = useState('')

    const sell = () => {
        if(product.quantity <= 0 || amount > product.quantity){
            setErr(`${product.name} is out of stock`)
        }else{
            product.quantity -= amount
            saveProducts(products)
            
            const {bPrice, sPrice} = product;
            const profit = sPrice-bPrice

            let cashProd = {
                id: Math.random(),
                name: product.name,
                amountSold: JSON.parse(amount),
                profit: profit * amount
            }
            console.log(cashProd)
            let existingCashOuts = cashOut
            let newCashOuts = [...existingCashOuts, cashProd]
            setCashOut(newCashOuts)

            record.products = [...record.products, cashProd]
            saveRecords(records)

        }    
    }
    
    return (
        <>
        <div className="pd-5">
            <div className="bg-grey">
               <h6>{product.name}</h6>
               <div>
                   <label>Amount</label>
                   <input type="number" onChange={(e)=> setAmount(e.target.value) } className="form-control sm" />
               </div>
               <small className="text-danger">{err}</small>
               <button className="btn btn-danger btn-sm" onClick={sell}>Sell</button>

            </div>
        </div>
        </>
    )
}