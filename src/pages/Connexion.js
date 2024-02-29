import React, { useState } from 'react';
import axios from 'axios';
import { setToken } from 'react-auth-kit';


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
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/auth',
        JSON.stringify(formData),
        console.log(JSON.stringify(formData)),
        {
          headers: { 'Content-Type': "application/json" }
        }
      );
      const { token } = response.data;
      setToken('Bearer Token', token);
      console.log('Réponse du serveur:', response.data);
      // Ajoutez ici la logique pour gérer la réponse du serveur (par exemple, rediriger l'utilisateur après la connexion réussie)
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      // Ajoutez ici la logique pour gérer les erreurs de connexion
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
