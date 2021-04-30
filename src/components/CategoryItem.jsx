import React, {useState} from 'react'
import CateProds from './CateProds'


export default function CategoryItem({category, delCategory}){

    const [showProds, setShowProds] = useState(false)

    const delCate =() => {
        delCategory(category.id)
    }

    return (
        <div className="container-custom">
            <div className="bg-grey">
                <h5>{category.name} </h5>
                    {           
                    !showProds?(
                    <div className='row'>
                        <div className="col-sm-6">
                            <button className="btn btn-sm btn-info" onClick={() => setShowProds(true)}>Show Products</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-sm btn-danger" onClick={delCate}>Delete</button>
                        </div>
                    </div>
                    ):
                    (
                        <>
                        <div className="pd-5">
                            <CateProds category={category}/>
                        </div>
                    <div className='row'>
                        <div className="col-sm-6">
                            <button className="btn btn-sm btn-warning" onClick={() => setShowProds(false)}>Close</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-sm btn-danger" onClick={delCate}>Delete</button>
                        </div>
                    </div>
                        </>
                    )
                    }
            </div>
        </div>
    )
}