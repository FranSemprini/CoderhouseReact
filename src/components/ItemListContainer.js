import * as React from "react";
import { ItemCount } from "./ItemCount";


export const ItemListContainer = ({ greeting = "Jhon Doe" }) => {

    return (
        <div>
            <h1> Hello {greeting} </h1>
            <ItemCount initial={1} stock={6} onAdd={null}/>
        </div>
    )
}