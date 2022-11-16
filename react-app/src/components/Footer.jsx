import React from "react"
import './css/Footer.css'

function Footer(props){
    return (
        <>
        <footer>

<article className="distribuidor" id="distribuidor">
    
    <section className="info-distribuidor">

        <h4>¿Quieres ser distribuidor (a) Grasse?</h4>
        <p className="p-distribuidor">
            En Grasse estamos buscando los mejores aliados para establecer una red fuerte de representación de ventas a nivel nacional e internacional y queremos conocerte.
        </p>

        <p className="p-distribuidor">
            Estamos comprometidos con entregar más y mejores experiencias de bienestar y cuidado a nuestros clientes, y sabemos que podemos cumplir mejor esta misión de la mano de ustedes!
        </p>

        <p className="p-distribuidor">
            Dejanos tus datos, nuestro equipo revisará y se pondra en contacto contigo.
        </p>

    </section>

</article>

<article className="formulario">
    <form action="/" method="post">
        <p>
            <label for="nombre">¿Como te llamas?*</label>
            <input className="b" type="text" name="nombre" id="nombre" required/>
        </p>

        <p>
            <label for="numero">Numero de contacto*</label>
            <input className="b" type="tel" name="numero" id="numero" required/>
        </p>

        <div className="enviar-block">
            <button className="enviar" type="submit">Enviar</button>
        </div>

    </form>

</article>

<article className="block-footer">
    <div className="left-block">
        
        <div className="redes">
            <a className="instagram" href="https://instagram.com/fraganciaencrema?igshid=YmMyMTA2M2Y=" target="_blank"><i class="fa-brands fa-instagram"></i></a>
            <a className="facebook" href="https://www.facebook.com/fraganciaencrema"><i class="fa-brands fa-facebook"></i></a> 
            <a className="whatsapp" href="https://api.whatsapp.com/send/?phone=573054810006&text&type=phone_number&app_absent=0"><i class="fa-brands fa-whatsapp"></i></a>
        </div>

    </div>

    <img className="flor" src="/images/isotipo-recortado.png" alt=""/>
    <div className="right-block"></div>
</article>

<a className="wpp" href="https://api.whatsapp.com/send/?phone=573054810006&text&type=phone_number&app_absent=0" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
</footer>
        </>
    )
}

export default Footer