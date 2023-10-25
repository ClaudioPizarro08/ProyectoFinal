import React from 'react'
import imagen1 from 'http://www.w3.org/2000/svg'

export default function NavBar () {
    const optionsMenu =[
    'Inicio',
    'Registrarse',
    'Iniciar Sesión'
    ]
    return (
      <header>
        <nav>
            <div>
                <h1>Virtual Schedule</h1>
                <img src='imagen1' alt="" />
            </div>
            <ul>
                {optionsMenu.map ((option, index) => (
                    <li key={index}>
                        <a href=''>
                        {option}
                        </a>
                       
                        </li>))}
            </ul>
        </nav>
      </header>
    )
}