import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ItemDetail } from '../ItemDetail/ItemDetail'
import CircularProgress from '@mui/material/CircularProgress';
import { doc, getDoc} from "firebase/firestore"
import { db } from "../../firebase/config"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()


    useEffect (() => {
        setLoading(true)
        const docRef = doc(db, 'productos', itemId)
        getDoc(docRef)
            .then((doc) => {
                setItem({id: doc.id, ...doc.data()})
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