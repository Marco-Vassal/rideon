import React from 'react'

function Home() {
  return (
    <div className='home'>
      <section>
        <div className='description'>
          Trouves des saisonniers dans ta station pour aller rider à plusieurs !
        </div>
        <h4>RideOn te permet de retrouver des personnes de ton niveau, disponible en meme temps que toi pour pouvoir aller rider ensemble.</h4>

      </section>
      <section>
        <h4>Suis les personnes avec qui tu souhaites rider, si elles te follow back tu pourras les contacter.</h4>
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
      <section>
        <img src="/images/dispo.png" alt="" />
      <h4>Choisis tes disponibilités à l'avance ou mets toi disponible quand tu pars sur les pistes.</h4>
      </section>
      <section>
      <h4>Utilise le bouton de disponiblité pour être dispo en un clic et utilise les filtres pour pouvoir rider avec tes amis de la sation.
      </h4>
        <img src="/images/filtre.png" alt="" />
      </section>

    </div>
  )
}

export default Home