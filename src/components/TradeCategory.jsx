import React, {useState} from 'react';
import SellProd from './SellProd'


export default function TradeCategory ({category, record, records, products, cashOut, setCashOut}) {

    const [showProds, setShowProds] = useState(false)

    return (
        <div>
            <div className="container">
                <h5> {category.name} </h5>
                <div>
                    {
                        !showProds? (
                            <div className="pd-5">
                                <button className="btn btn-info" onClick={() => setShowProds(true)}>show Products</button>
                            </div>
                        ):
                        (
                            <div className="pd-5">
                                <div className="bg-light">
                                    {
                                        // eslint-disable-next-line array-callback-return
                                        products.map((product, index) => {
                                            // eslint-disable-next-line eqeqeq
                                            if(product.categoryId == category.id){
                                                return (
                                                    <SellProd product={product} record={record} records={records} key={product.id} products={products} cashOut={cashOut} setCashOut={setCashOut} />
                                                )
                                            }
                                        })
                                    }
                                </div>
                                <button className="btn btn-warning" onClick={() => setShowProds(false)}>Close</button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
