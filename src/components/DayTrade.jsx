import React, {useState} from 'react';
import Layout from './Layout';
import SellProd from './SellProd';
import CashOut from './CashOut'
import {saveRecords} from '../RecordContext';



export default function DayTrade({record, products, records}) {

    const[cashOut, setCashOut] = useState([])
    const [tProfit, setTprofit] = useState(0)

    const getProfit = () => {
        let profit = 0
        record.products.forEach(item => {
            profit += item.profit
        })
        setTprofit(profit)
        record.profit = profit
        saveRecords(records)
    }

    return (    
        <Layout title={`record of ${record.date}`}>
            <div className="container-custom">
                <div className="row">
                    { 
                    // eslint-disable-next-line no-new-wrappers
                    record.date !== new String( new Date()).slice(0, 16) ?(
                        <div className="col-md-4 border-solid card">
                            date past!!!
                        </div>
                    ):
                    (
                        <div className="col-md-4 border-solid card">
                        {
                            products.map(product => (
                                <SellProd product={product} record={record} records={records} key={product.id} products={products} cashOut={cashOut} setCashOut={setCashOut} />
                            ))
                        }
                        </div>
                    )
                                    
                    }

                    <div className="col-md-7 border-solid card">
                        <div>
                            <h4>Records</h4>
                            {
                                record.products.map( item => 
                                <div className="pd-5" key={item.id}>
                                        <CashOut item={item}/>
                                    </div>
                                )
                            }
                            <div>
                                <button className="btn btn-outline-info" onClick={getProfit}>Profit</button>: {tProfit}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}