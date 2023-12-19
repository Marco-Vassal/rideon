import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <div>
        <a href="/"><img src="/logo-rideon.png" alt="" /></a>
      <div className='slogan'>
        <h1>
          RideOn
        </h1>
        <p>Rider à plusieurs c'est une ride meilleure !</p>
      </div>
      <a href="/connexion">Connexion</a>
      </div>
      <ul>
        <li><a href="/find">Calendrier</a><span></span></li>
        <li><a href="/amis">Mes amis</a><span></span></li>
        <li><a href="/infos">Mes infos</a><span></span></li>
      </ul>
    </div>
  )
}

export default Navbar