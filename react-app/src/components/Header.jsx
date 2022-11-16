import React from "react"
import './css/Header.css'

function Header(props){
    return (
        <>
        <header>
    <div className="container-barra-inicio">
        <h3 className="encabezado">¿Primera Compra? Recibe el <b>ENVIO GRATIS</b> <i className="fa-solid fa-truck-fast"></i> por compras en la plataforma con el cupón: <b>BIENVENIDO</b> <i className="fa-solid fa-heart"></i></h3>
        
        <nav className="barra-inicio-mobile">

            <section className="menu-block">
                <div className="burger-menu">
                    <i className="fas fa-bars"></i>
                </div>
            </section>
        
            <div className="logo-block-mobile">
                <a><img className="logo" src="../logo-grasse-blanco.png" alt=""/></a>
            </div>

            <section className="carrito">
                <p className="circulo">0</p><a><i className="fa-solid fa-bag-shopping"></i></a>   
            </section> 
        </nav>

        <nav className="barra-inicio">

            <section className="area-1">
                <button className="button-icon-mostrar"><i className="fa-solid fa-magnifying-glass" id="buttonIconMostrar"></i></button>
                <button className="button-icon-ocultar"><i className="fa-solid fa-magnifying-glass" id="buttonIconOcultar"></i></button>
                <a><button className="btn-distribuidor">Quiero ser distribuidor</button></a>
            </section>
            
            
            <ul className="site">

                <li><a>HOME </a></li> 
                <li><a>TIENDA</a></li> 
                <li><a >TESTIMONIOS</a></li>  

                <div className="logo-block">
                <li><img className='logo'src={require('../Logo.png')}/> </li>
                </div>

                <li><a>BLOG</a></li>
                <li><a>CONTACTO</a></li>
                <li><a>FAQ´S</a></li>

                <div className="login-navbar">
                    <li><a className="section-navbar"><i class="fa-solid fa-bag-shopping"></i> <p className="circulo">0</p></a></li> 
                    <li><a ><i className="fa-regular fa-user"></i></a></li>
                    <li><a ><i className="fa-solid fa-address-card"></i></a></li>
                </div>

            </ul>   
            <div className="login-navbar">
            </div>
        </nav>     
    </div>
</header>
        </>
    )
}

export default Header