import React, {useState, useContext} from 'react';
import Layout from './Layout';
import TradeCategory from './TradeCategory';
import CashOut from './CashOut'
import {saveRecords} from '../RecordContext';
import {CategoryContext} from '../CategoryContext';


export default function DayTrade({record, products, records}) {

    const {category} = useContext(CategoryContext)
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
                            <h4 className="text-danger">date past!!!</h4>
                        </div>
                    ):
                    (  
                        <div className="col-md-5 border-solid card ">
                        {
                        category.map((category, index) => (
                            <div className="pd-5" key={index}>
                                <TradeCategory 
                                products={products} 
                                category={category}
                                record={record}
                                records={records}
                                cashOut={cashOut}
                                setCashOut={setCashOut}
                                />
                                <hr/>
                            </div>
                        
                        ))}
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