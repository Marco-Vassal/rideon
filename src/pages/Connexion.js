import React, { useState } from 'react';
import axios from 'axios';

const Connexion = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await fetch(
      'https://localhost:8000/api/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      },
    );

    const data = await response.json();

    if (response.ok) {
      console.log(data);
    } else {
      console.log(data);
    }
  };

  return (
    <div className='connexion'>
      <form className='card'>
        <h1>Connexion</h1>
        <label>
          Pseudo ou Email:
          <input type="text" name="username" value={formData.username} onChange={handleInputChange} />
        </label>
        <label>
          Mot de passe:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleLogin}>
          Se connecter
        </button>
        <a href="/mot-de-passe-oublie">Mot de passe oublié</a>
        <p>Vous n'avez pas de compte ? <a href="/creation">Inscription</a></p>
      </form>
    </div>
  );
};

export default Connexion;
