import React, {useState, useEffect}from 'react'
import axios from 'axios';



function LastProd(props){

    const[product, setProduct] = useState([]);
    const ruta = 'http://localhost:3030/api/last'
    useEffect(()=>{
        axios
        .get(ruta)
        .then(res=>{
          console.log(res)
          setProduct(res.data.data)
        })
        .catch(e=>{
          console.log(e)
        })
      },[])
      console.log(product.category)

    return (
        <>
            <h1 className='TituloPanel'>Último producto</h1>
                <ul>
                    <li className='TextoPanel'>Id: {product.id}</li>
                    <li className='TextoPanel'>Nombre: {product.name}</li>
                    <li className='TextoPanel'>Descripcion: {product.description}</li>
                    <li className='TextoPanel'>Precio: {product.price}</li>
                    {/* <li className='TextoPanel'>Categoria: {product.category.name}</li> */}
                    {/* <li className='TextoPanel'>Presentacion: {product.presentation.size}</li> */}
                </ul>
        </>
    )
}

export default LastProd






