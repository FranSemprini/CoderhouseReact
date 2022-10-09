import { TextField } from "@mui/material"
import { getDocs, collection } from "firebase/firestore"
import { db, } from "../../firebase/config"
import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom'
import './Search.scss'

export const Search = () => {
    
    const [value, setInputValue] = useState("");

    const handleUserInput = (e) => {
        setInputValue(e.target.value);
      };

    const [productos, setProductos] = useState([])
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        const productosRef = collection(db, 'productos')
        getDocs(productosRef)
            .then((snapshot) => {
                const productsDB = snapshot.docs.map((doc) => ({ id: doc.id, nombre: [...doc.data().nombre].join('') }))
                setProductos(productsDB)
            })
    }, [])

    useEffect(() => {
        if (value.length >= 3) {
            const filteredProd = productos.filter((prods) =>
                prods.nombre.toLowerCase().includes((value).toLowerCase())
            )
            setFiltered(filteredProd)
        } else {
            setFiltered([])
        }
    }, [value])

    const test = useRef(null);

    const clearSearch = () => {
        setInputValue("");
    }

    return (
        <div>
            <TextField
                ref={test}
                value={value}
                onChange={handleUserInput}
                name="search"
                type={`text`}
                placeholder="Search"
                style={{ width: "250px" }}
                variant="outlined"
                className="imput__form"
            />
            <div>
                {filtered.map(({ nombre,id }) => (
                    <Link className="link" to={`/item/${id}`} key={nombre}><p onClick={clearSearch} >{nombre}</p></Link>
                ))}
            </div>
        </div>
    )

}