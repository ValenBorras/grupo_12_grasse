import React, {useState, useEffect}from 'react'
import axios from 'axios';



function Categories(props){

    const[cat, setCat] = useState([]);
    useEffect(()=>{
        axios
        .get('http://localhost:3030/api/categories')
        .then(res=>{
          console.log(res)
          setCat(res.data.data)
        })
        .catch(e=>{
          console.log(e)
        })
      },[])

    return (
        <>
        {cat.map(product => (
            <ul>
                    <li className='TextoPanel'>Id: {product.id}</li>
                    <li className='TextoPanel'>Nombre: {product.name}</li>
                    <p className='NumeroPanel'> ----- </p>

            </ul>

        ))}        
        </>
    )
}

export default Categories