import React,{ useState } from 'react'

export default function AddCatForm({addCategory}){

    const [name, setName] = useState('')

    const addCat = (event) => {
        event.preventDefault()
        const newCategory = {
            id : Math.random(),
            name: name
        }
        addCategory(newCategory)
    }

    return (
        <div className="container-custom">
            <div className="bg-grey">
                <form onSubmit={addCat}>
                    <div className="pd-5">
                        <label>Name: </label>
                        <input type="text" onChange={e => setName(e.target.value)} className="form-control" /> 
                    </div>

                    <div className="pd-5">
                        <input type="submit" className="btn btn-primary"/>
                    </div>

                </form>
            </div>
        </div>
    )
}