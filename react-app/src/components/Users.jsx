import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Users(props){
     return (
        <>
        {props.users.map(user => (
            <ul className='TextoPanel'>
                <li className='TextoPanel' key={user.id}>Id: {user.id}</li>
                <li className='TextoPanel' key={user.id}>Nombre: {user.name}</li>
                <li className='TextoPanel' key={user.id}>Apellido: {user.surname}</li>
                <li className='TextoPanel' key={user.id}>Email: {user.email}</li>
                <li className='TextoPanel' key={user.id}>Admin: {user.admin == 1 ? 'si' : 'no'}</li>
                <p className='NumeroPanel'> ----- </p>


            </ul>
        ))}
        </>
    )
}

export default Users; 