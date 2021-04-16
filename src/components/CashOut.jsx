import React from 'react';


export default function CashOut ({item}) {
    
    return(
        <>
            <div className="bg-grey" >
                <p>{item.name} .. amount: {item.amountSold}</p>
                <p>total profit: {item.profit}</p>
            </div>
        </>
    )
}