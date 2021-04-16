import React, {useContext} from 'react'
import Layout from '../components/Layout';
import {RecordContext, saveRecords} from '../RecordContext';
import Record from '../components/Record';



export default function Records() {


    const {records, setRecords} = useContext(RecordContext)

    const addRecord = () => {
        let newRecord = {
            id: Math.random(),
            // eslint-disable-next-line no-new-wrappers
            date: new String( new Date() ).slice(0, 16),
            profit: 0,
            products: [
                
            ]
        }
        let existingRecs = records
        let newRecords = [...existingRecs, newRecord]
        setRecords(newRecords)
        saveRecords(newRecords)
    }

    return (
        <Layout title="Records">
            <div className="container-custom">
            <div>
                <button className="btn btn-primary btn-sm" onClick={addRecord}>StartNew</button>
            </div>
            
            {
                records.map((record, index) => (
                    <Record record={record} key={index} />
                ))
            }
            </div>
        </Layout>
    )
}
