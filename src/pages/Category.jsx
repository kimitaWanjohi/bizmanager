import React,{useContext, useState} from 'react';
import Layout from '../components/Layout'
import {CategoryContext, saveCategory} from '../CategoryContext'
import CategoryItem from '../components/CategoryItem'
import AddCatForm from '../components/AddCatForm'

export default function Category(){

    const {category, setCategory} = useContext(CategoryContext)
    const [showAdd, setShowAdd] = useState(false)

    const delCategory = (id) => {
        let newCates = category
        // eslint-disable-next-line eqeqeq
        newCates = newCates.filter(cat => cat.id != id)
        setCategory(newCates)
        saveCategory(newCates)
    }

    const addCat = (newCategory)=> {
        let newCates = category
        newCates = [...newCates,  newCategory]
        setCategory(newCates)
        saveCategory(newCates)
        setShowAdd(false)
    }

    return(
        <Layout title="Category">
            <div className='head'>
                {
                    showAdd? (
                        <div className="pd-5">
                            <AddCatForm addCategory={addCat} />

                            <div className="pd-5">
                                <button className="btn btn-info" onClick={()=> setShowAdd(false)}>close</button>
                            </div>
                        </div>
                    ): (
                        <div className = "pd-5">
                            <button className="btn btn-info" onClick={()=> setShowAdd(true)}>Add Category</button>
                        </div>
                        )
                }
            </div>

            <div className="container-custom">
                    <div>
                        {
                            category.map((cat, index) => (
                                <CategoryItem delCategory={delCategory} key={index} category={cat}/>
                            ))
                        }
                    </div>
            </div>  
        </Layout>
    )
}