import React, {useState} from 'react'

export default function AddForm(props) {

    const [name, setName] = useState("")
    const [bPrice, setBPrice] = useState(0)
    const [sPrice, setSPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [err, setErr] = useState('')

    const addProduct = (event) => {
        event.preventDefault()
        let newProduct = null
        if(name===null || bPrice===null || sPrice===null || quantity===null){
            setErr('Fill all the Values')
        }else{
            newProduct = {
                id: Math.random(),
                name: name,
                bPrice: bPrice,
                sPrice: sPrice,
                quantity: quantity
            }
        }
        props.addProduct(newProduct)
    }

    return (
        <div>
            <div className="bg-light container-fluid">
                <form onSubmit={addProduct}>
                <div className="pd-5">
                    <label sytle={{textAlign:'center'}}>Name:</label>
                    <input className="form-control" type="text" onChange={(e)=> setName(e.target.value)} />
                </div>

                <div className="pd-5">
                    <label sytle={{textAlign:'center'}}>Buying Price:</label>
                    <input className="form-control" type="number" onChange={e=> setBPrice(e.target.value)} />
                </div>

                <div className="pd-5">
                    <label sytle={{textAlign:'center'}}>Selling Price:</label>
                    <input className="form-control" type="number" onChange={e=> setSPrice(e.target.value)} />
                </div>
                
                <div className="pd-5">
                <   label sytle={{textAlign:'center'}}>Quantity:</label>
                    <input className="form-control" type="number" onChange={e=> setQuantity(e.target.value)}/>
                </div>
                <div className="pd-5">
                    <input type="submit" className="btn btn-warning rounded-pill" value="SAVE"/>
                </div>
                
                <small className="text-danger">{err}</small>

                </form>

            </div>
        </div>
    )
}
