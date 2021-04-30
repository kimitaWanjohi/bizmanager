import {useState, useEffect, createContext, useMemo} from 'react';

export const CategoryContext = createContext()

export const CategoryProvider = ({children}) => {

    const [category, setCategory] = useState([
        {
            id: Math.random(),
            name: "",
            products: [
                {},{}
            ]
        }
    ])

    const categoryValue = useMemo(() => ({category, setCategory}), [category, setCategory])

    const getCategory = () => {
        let retriveCategory = localStorage.getItem('category')
        setCategory(JSON.parse(retriveCategory))
    }

    useEffect( () => {
        getCategory()
    }, [] )
    
    return (
        <CategoryContext.Provider value={categoryValue}>
            {
                children
            }
        </CategoryContext.Provider>
    )
}

export const saveCategory = (category) => {
    localStorage.setItem('category', JSON.stringify(category))
}