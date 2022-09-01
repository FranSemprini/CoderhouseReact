import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from '../ItemDetail/ItemDetail'
import { stock } from "../../data/stock"
import CircularProgress from '@mui/material/CircularProgress';

export const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    const promiseItemDetailContainer = () => {
        return new Promise ( ( resolve) => {
            setTimeout(() => {
                resolve(stock)
            }, 2000) 
        })
    }

    useEffect (() => {
        setLoading(true)
        promiseItemDetailContainer()
            .then((res) => {
                setItem( res.find((product) => product.id === Number(itemId)))
            })
            .catch ((error) => {
                console.log(error)
            })
            .finally (() => {
                setLoading(false)
            })
    },[itemId])

    return (
        <div>
           { loading ? <div className="loader"> <CircularProgress color="secondary" /></div> : <ItemDetail item={item}/>}
        </div>

    )

}