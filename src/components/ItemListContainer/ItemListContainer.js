import * as React from "react";
import { useEffect, useState } from "react";
import { ItemList } from '../ItemList/ItemList'
import CircularProgress from '@mui/material/CircularProgress';
import './ItemListContainer.scss'
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where} from "firebase/firestore"
import { db, } from "../../firebase/config"

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        // armo la referencia a la coleccion productos (nuestra db)
        const productosRef = collection(db, 'productos')
        const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef
        // consumir la referencia
        getDocs(q)
            .then((snapshot) => {
                const productsDB = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
                setProductos(productsDB)
            })
            .finally((
                setLoading(false)
            ))
    }, [categoryId])

    return (
        <div>
            {loading ? <div className="loader"> <CircularProgress color="secondary" /></div> : <div className="list__container">  <ItemList productos={productos} /></div>}

        </div>
    )


}

