import React, {useContext} from 'react'
import {ProductContext} from '../ProductContext'
import Product from './Product'

export default function CateProds({category}){

    const {products} = useContext(ProductContext)

    return (
        <div className="container-custom">
            {
                // eslint-disable-next-line array-callback-return
                products.map((prod, index) => {
                    // eslint-disable-next-line eqeqeq
                    if(prod.categoryId == category.id){
                        return (
                            <div className="container-custom" key={index}>
                                <Product product={prod}/>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}