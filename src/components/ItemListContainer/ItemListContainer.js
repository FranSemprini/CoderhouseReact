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
        const productosRef = collection(db, 'productos')
        const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef
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
             <div className="list__container"><ItemList productos={productos} /></div>
        </div>
    )


}

