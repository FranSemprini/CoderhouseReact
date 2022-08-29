import * as React from "react";
import { useEffect, useState } from "react";
import { ItemList } from '../ItemList/ItemList'
import { stock } from '../../data/stock'
import CircularProgress from '@mui/material/CircularProgress';
import './ItemListContainer.scss'





export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [status, setStatus] = useState(`flex`)

    const promiseItemListContainer = () => {
        return new Promise ( (resolve, reject) => {
            setTimeout(() => {
                resolve(stock)
            }, 2000)
        } )
    }

    useEffect(() => {
        promiseItemListContainer()
            .then((res) => {
                setProductos(res)
                setStatus(`none`)
            })
            .catch ( (error) => {
                alert(error)
            })
    })
    
    return (
        <div >
            <ItemList productos={productos}/>
            <div className="loader"> <CircularProgress style={{display: status, }} color="secondary" /></div>
        </div>
    )

    
}

