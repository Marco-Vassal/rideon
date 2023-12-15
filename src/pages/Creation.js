import React, { useState } from 'react';

function Creation() {
  const [formData, setFormData] = useState({
    pseudo: '',
    sport: '',
    niveau: '',
    typeDeRide: '',
    station: '',
    photo: '',
    email: '',
    telephone: '',
    motDePasse: '',
    confirmationMotDePasse: '',
  });
  const fileUpload = true;
  const [fileName, setFileName] = useState('');
  const sportsOptions = ['Ski', 'Snowboard', 'Monoski', 'Télémark', 'SnowScoot'];
  const niveauxOptions = ['Nouveau', 'Débutant', 'Intermédiaire', 'Avancé', 'Expert', 'Légende'];
  const typesDeRideOptions = ['Race', 'Freeride', 'Randonnée', 'Freestyle', 'Piste'];
  const stationsOptions = [
    'Alpe d\'Huez',
    'Avoriaz',
    'Chamonix-Mont-Blanc',
    'Courchevel',
    'La Clusaz',
    'La Plagne',
    'La Rosière',
    'Le Grand-Bornand',
    'Les Arcs',
    'Les Contamines-Montjoie',
    'Les Deux Alpes',
    'Les Gets',
    'Les Menuires',
    'Megeve',
    'Méribel',
    'Montgenèvre',
    'Morzine',
    'Serre Chevalier',
    'Tignes',
    'Val d\'Isère',
    'Val Thorens',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter les données du formulaire
    console.log('Formulaire soumis avec les données :', formData);
  };

  //Ajout du PDF par drag & drop
  const handleDrop = (e) => {
    setFileName(e.target.files[0].name);
};
//Ajout du PDF par selection
const handleFileSelect = (e) => {
  console.log(e)
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
          <select name="sport" value={formData.sport} onChange={handleChange} required>
            <option value="" disabled>Sélectionne un sport</option>
            {sportsOptions.map((sport) => (
              <option key={sport} value={sport}>{sport}</option>
            ))}
          </select>
        </label>

        <label>
          Niveau:
          <select name="niveau" value={formData.niveau} onChange={handleChange} required>
            <option value="" disabled>Sélectionne ton niveau</option>
            {niveauxOptions.map((niveau) => (
              <option key={niveau} value={niveau}>{niveau}</option>
            ))}
          </select>
        </label>

        <label>
          Type de ride:
          <select name="typeDeRide" value={formData.typeDeRide} onChange={handleChange} required>
            <option value="" disabled>Sélectionne ton type de ride</option>
            {typesDeRideOptions.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </label>

        <label>
          Station:
          <select name="station" value={formData.station} onChange={handleChange} required>
            <option value="" disabled>Sélectionne ta station</option>
            {stationsOptions.map((station) => (
              <option key={station} value={station}>{station}</option>
            ))}
          </select>
        </label>

        <label className='photo' onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}>
          Ajouter une photo +
          <input type="file" name="photo" accept="image/*" onChange={handleFileSelect}/>
        </label>
            <p className='validFile'>{fileName}</p>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Numéro de téléphone:
          <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required />
        </label>

        <label>
          Mot de passe:
          <input type="password" name="motDePasse" value={formData.motDePasse} onChange={handleChange} required />
        </label>

        <label>
          Confirmation du mot de passe:
          <input type="password" name="confirmationMotDePasse" value={formData.confirmationMotDePasse} onChange={handleChange} required />
        </label>

        <button type="submit">S'inscrire</button>
      </form>
    </div>

  );
}

export default Creation