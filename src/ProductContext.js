import {useState, createContext, useMemo, useEffect} from 'react';


export const ProductContext = createContext();


export const ProductProvider = ({children}) => {
    
    const [products, setProducts] = useState([])

    const productValue = useMemo(() => ({products, setProducts}), [products, setProducts])

    const getProducts = ()=>{
        const retriveProducts = localStorage.getItem("products")
        if(retriveProducts !== null){
            setProducts(JSON.parse(retriveProducts))
        }else{
            setProducts([])
        }
    }

    useEffect(() => {
    
        getProducts();
    }, [])

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