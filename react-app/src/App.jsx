import './App.css';
import React, {useState, useEffect}from 'react'
import axios from 'axios';

import Panel from './components/Panel';
import LastProd from './components/LastProd';
import Users from './components/Users';
import Products from './components/Products';
import Categories from './components/Categories';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  const[users, setUsers] = useState([]);

  useEffect(()=>{
     axios
      .get('http://localhost:3030/api/users')
      .then(res => {
          console.log(res)
          setUsers(res.data.data)
      })
      .catch((e)=>{
          console.log(e)
      })
  },[]);

  const[products, setProducts] = useState([]);

  useEffect(()=>{
    axios
    .get('http://localhost:3030/api/products')
    .then(res=>{
      console.log(res)
      setProducts(res.data.data)
    })
    .catch(e=>{
      console.log(e)
    })
  },[]);

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
    <Header/>
    <div className='SelectorPaneles'>
      <Panel >
            <h1 className='TituloPanel'> Total Productos </h1>
            <p className='NumeroPanel'>{products.length}</p>
      </Panel>
      <Panel>
            <h1 className='TituloPanel'>Total <br/>Usuarios</h1>
            <p className='NumeroPanel'>{users.length}</p>
      </Panel>
      <Panel>
            <h1 className='TituloPanel'>Total Categorías</h1>
            <p className='NumeroPanel'>{cat.length} </p>
      </Panel>
    </div>
    <div className='SelectorPaneles'>
      <Panel>
            <LastProd products={products}/>
      </Panel>
    </div>
    <div className='SelectorPaneles'>
      <Panel>
            <h1 className='TituloPanel'>Todos los Productos</h1>
            <Products products={products}/>
      </Panel>
      <Panel>
            <h1 className='TituloPanel'>Todos los Usuarios</h1>
            <Users users={users}/>
      </Panel>
      <Panel>
            <h1 className='TituloPanel'>Todas las Categorias</h1>
            <Categories/>
      </Panel>
    </div>
    <Footer/>
    </>
  );
}

export default App;
