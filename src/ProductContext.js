import {useState, createContext, useMemo, useEffect} from 'react';


export const ProductContext = createContext();


export const ProductProvider = ({children}) => {
    
    const [products, setProducts] = useState([])

    const productValue = useMemo(() => ({products, setProducts}), [products, setProducts])

    const getProducts = async()=>{
        const retriveProducts = await localStorage.getItem("products")
        await setProducts(JSON.parse(retriveProducts))
    }

    useEffect(() => {
        
        getProducts();
    })

    return(
        <ProductContext.Provider value={productValue}>
            {
                children
            }
        </ProductContext.Provider>
    )
}

export const saveProducts = (products) => {
    const save = JSON.stringify(products)
    localStorage.setItem("products", save)
}