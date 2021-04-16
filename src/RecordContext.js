import React, {useState, createContext, useMemo, useEffect} from 'react';

export const RecordContext = createContext();

export const RecordProvider = ({children}) => {

    const [records, setRecords] = useState([])

    const recordValue = useMemo(() => ({records, setRecords}), [records, setRecords])

    const getRecords = () => {
        const retriveRecords = localStorage.getItem('records')
        setRecords(JSON.parse(retriveRecords))
    }

    useEffect( ()=> {
        getRecords();
    }, [])

    return(

        <RecordContext.Provider value={recordValue}>
            {
                children
            }
        </RecordContext.Provider>
    )
}

export const saveRecords = (records) => {
    localStorage.setItem('records', JSON.stringify(records))
}