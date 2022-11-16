import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Products(props){

    return (
        <>
        {props.products.map(product => (
            <ul>
                    <li className='TextoPanel'>Id: {product.id}</li>
                    <li className='TextoPanel'>Nombre: {product.name}</li>
                    <li className='TextoPanel'>Descripcion: {product.description}</li>
                    <li className='TextoPanel'>Precio: {product.price}</li>
                    <li className='TextoPanel'>Categoria: {product.category.name}</li>
                    <li className='TextoPanel'>Presentacion: {product.presentation.size}</li>
                    <p className='NumeroPanel'> ----- </p>

            </ul>
        ))}
        </>
    )
}

export default Products; 