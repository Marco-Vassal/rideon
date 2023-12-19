import React, { useState } from 'react'

function Amis() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const handleFriendClick = (friendIndex) => {
    setSelectedFriend(friendIndex);
  };
  const handleCloseClick = () => {
    setSelectedFriend(null);
  };

  return (
    <div className='myFriends'>
      <section className='amis'>
        <h2>Mes Amis</h2>
        <div>
          {[...Array(18)].map((_, index) => (
            <div
              key={index}
              onClick={() => handleFriendClick(index)}
            >
              {/* Contenu de la petite div */}
              <img src="/images/IMG_2089_low_qual.png" alt="" />
              <div>
                <h2>Marco</h2>
                <p>Snowboard</p>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </section>
      <section className='amis'>
        <h2>Demande à accepter</h2>
        <div>
          {[...Array(18)].map((_, index) => (
            <div
              key={index}
              onClick={() => handleFriendClick(index)}
            >
              {/* Contenu de la petite div */}
              <img src="/images/IMG_2089_low_qual.png" alt="" />
              <div>
                <h2>Marco</h2>
                <p>Snowboard</p>
              </div>
              <a href=""><img src="/images/check.svg" alt="" /></a>
            </div>
          ))}
        </div>
      </section>
      <section className='amis'>
        <h2>Vos demandes d'amis</h2>
        <div>
          {[...Array(18)].map((_, index) => (
            <div
              key={index}
              onClick={() => handleFriendClick(index)}
            >
              {/* Contenu de la petite div */}
              <img src="/images/IMG_2089_low_qual.png" alt="" />
              <div>
                <h2>Marco</h2>
                <p>Snowboard</p>
              </div>
              <div></div>
            </div>
          ))}
        </div>
      </section>
      {selectedFriend !== null && (
        <div className="centered-card">
          <div>
            <div className='croix' onClick={handleCloseClick}>
              <div class="circle">
                <span></span>
                <span></span>
              </div>
            </div>
            {/* Contenu de la grande div */}
            <p className='ride'>Ride On</p>
            <img src="/images/IMG_2089_low_qual.png" alt="" />
            <h2>Tim</h2>
            <h3>Snowboard ou Ski</h3>
            <p>Niveau: Confirmé</p>
            <p>Type: Freeride Frestyle</p>
            <a href='' className='follow'>
              Retirer
            </a>
          </div>

        </div>
      )}
    </div>
  )
}

export default Amis