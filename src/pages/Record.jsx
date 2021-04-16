import React, {useContext} from 'react';
import {RecordContext} from '../RecordContext';
import {ProductContext} from '../ProductContext';
import DayTrade from '../components/DayTrade';

export default function Record({match: { params: { id }}}) {
    
    const {records} = useContext(RecordContext)
    const {products} = useContext(ProductContext)



    return (
        <>
        {
            // eslint-disable-next-line array-callback-return
            records.map( record => {
                // eslint-disable-next-line eqeqeq
                if(record.id == id){
                    return(
                        <div className="pd-5" key={record.id}>
                            <DayTrade record={record} products={products} records={records}/>
                        </div>
                    )
                }
            })
        }
        </> 
    )
}