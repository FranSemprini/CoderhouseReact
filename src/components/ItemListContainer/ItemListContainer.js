import * as React from "react";
import { useEffect, useState } from "react";
import { ItemList } from '../ItemList/ItemList'
import { stock } from '../../data/stock'
import CircularProgress from '@mui/material/CircularProgress';
import './ItemListContainer.scss'
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()
    console.log(categoryId)

    const promiseItemListContainer = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(stock)
            }, 2000)
        })
    }

    useEffect(() => {
        setLoading(true)
        promiseItemListContainer()
            .then((res) => {
                if (!categoryId) {
                setProductos(res)
                } else {
                    setProductos( res.filter((prod) => prod.category === categoryId))
                }
            })
            .catch((error) => {
                alert(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <div>
            {loading ? <div className="loader"> <CircularProgress color="secondary" /></div> : <div className="list__container">  <ItemList productos={productos} /></div>}

        </div>
    )


}

