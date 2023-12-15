import React from 'react'

function Home() {
  return (
    <div className='home'>
      <section>
        <div className='description'>
          Trouves des saisonniers dans ta station pour aller rider à plusieurs !
        </div>
        <div className='card'>
            <p className='ride'>Ride On</p>
          <img src="/images/IMG_2089_low_qual.png" alt="" />
          <h2>Tim</h2>
          <h3>Snowboard ou Ski</h3>
          <p>Niveau: Confirmé</p>
          <p>Type: Freeride Frestyle</p>
          <a href='' className='follow'>
            + Suivre
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home