import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Creation() {
  const [formData, setFormData] = useState({
    email: '',
    pseudo: '',
    plainPassword: '',
    phoneNumber: '',
    sportLevel: '',
    sports: '',
    sportType: '',
    station: '',
  });

  const [fileName, setFileName] = useState('');
  const [sportsOptions, setSportsOptions] = useState([]);
  const [niveauxOptions, setNiveauxOptions] = useState([]);
  const [typesDeRideOptions, setTypesDeRideOptions] = useState([]);
  const [stationsOptions, setStationsOptions] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    // Traitement spécial pour les champs liés aux entités avec @id
    if (name === 'sports') {
      const sportId = value; // Supposons que la valeur est l'@id
      setFormData((prevData) => ({ ...prevData, [name]: [sportId] }));
    } else {
      // Pour les autres champs, mettez à jour normalement
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/sports')
      .then(response => {
        const sports = response.data['hydra:member'].map(sport => ({
          id: sport['@id'],
          name: sport.name,
        }));
        setSportsOptions(sports);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des sports:', error);
      });
    axios.get('http://127.0.0.1:8000/api/sport_levels')
      .then(response => {
        const levels = response.data['hydra:member'].map(sport_levels => ({
          id: sport_levels['@id'],
          name: sport_levels.name,
        }));
        setNiveauxOptions(levels);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des sports:', error);
      });
    axios.get('http://127.0.0.1:8000/api/sport_types')
      .then(response => {
        const types = response.data['hydra:member'].map(sport_type => ({
          id: sport_type['@id'],
          name: sport_type.name,
        }));
        setTypesDeRideOptions(types);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des types de sport:', error);
      });
    axios.get('http://127.0.0.1:8000/api/stations')
      .then(response => {
        const stations = response.data['hydra:member'].map(station => ({
          id: station['@id'],
          name: station.name,
        }));
        setStationsOptions(stations);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des stations:', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataJSON = JSON.stringify(formData);
    console.log(formData)
    try {
      // Effectuer la requête vers la base de données
      const response = await axios.post(
        'http://127.0.0.1:8000/api/users',
        formDataJSON,
        {
          headers: { 'Content-Type':  "application/json" }
        }
      );

      console.log('Utilisateur créé avec succès:', response.data);
      // Réinitialiser le formulaire ou rediriger l'utilisateur si nécessaire
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur:', error);
    }
  };

  // Ajout du PDF par drag & drop
  const handleDrop = (e) => {
    setFileName(e.target.files[0].name);
  };

  // Ajout du PDF par sélection
  const handleFileSelect = (e) => {
    setFileName(e.target.files[0].name);
  };

  return (
    <div className='creation'>
      <form className='card' onSubmit={handleSubmit}>
        <h1>Crée ton compte</h1>

        <label>
          Pseudo:
          <input type="text" name="pseudo" value={formData.pseudo} onChange={handleChange} required />
        </label>

        <label>
          Sport:
          <select name="sports" value={formData.sports} onChange={handleChange} required>
            <option value="" disabled>Sélectionne un sport</option>
            {sportsOptions.map((sport) => (
              <option key={sport.id} value={sport.id}>{sport.name}</option>
            ))}
          </select>
        </label>

        <label>
          Niveau:
          <select name="sportLevel" value={formData.sportLevel} onChange={handleChange} required>
            <option value="" disabled>Sélectionne ton niveau</option>
            {niveauxOptions.map((sport_levels) => (
              <option key={sport_levels.id} value={sport_levels.id}>{sport_levels.name}</option>
            ))}
          </select>
        </label>

        <label>
          Type de ride:
          <select name="sportType" value={formData.sportType} onChange={handleChange} required>
            <option value="" disabled>Sélectionne ton type de ride</option>
            {typesDeRideOptions.map((sportType) => (
              <option key={sportType.id} value={sportType.id}>{sportType.name}</option>
            ))}
          </select>
        </label>


        <label>
          Station:
          <select name="station" value={formData.station} onChange={handleChange} required>
            <option value="" disabled>Sélectionne ta station</option>
            {stationsOptions.map((station) => (
              <option key={station.id} value={station.id}>{station.name}</option>
            ))}
          </select>
        </label>


        <label className='photo' onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
          Ajouter une photo +
          <input type="file" name="photo" accept="image/*" />
        </label>
        <p className='validFile'>{fileName}</p>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Numéro de téléphone:
          <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </label>

        <label>
          Mot de passe:
          <input type="password" name="plainPassword" value={formData.plainPassword} onChange={handleChange} required />
        </label>

        <label>
          Confirmation du mot de passe:
          <input type="password" name="confirmationMotDePasse" required />
        </label>

        <button type="submit">S'inscrire</button>
        <p>Vous avez un compte ? <a href="/connexion">Connexion</a></p>
      </form>
    </div>
  );
}

export default Creation;
