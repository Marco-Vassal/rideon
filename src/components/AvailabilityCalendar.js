import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import CountdownTimer from './CountdownTimer'
import { fr } from 'date-fns/locale'

const AvailabilityCalendar = () => {
    const currentDate = new Date();
    const dateArray = [];

    for (let i = 0; i < 7; i++) {
        const formattedDate = format(addDays(currentDate, i), "EEEE dd MMMM", { locale: fr });
        dateArray.push(formattedDate);
    }
    const [formData, setFormData] = useState({
        station: '',
    });
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

    const colors = {
        colorOne: "#45a049", //Switch activé
        colorTwo: "#AA1803"  //Switch désactivé
    };

    const [switchState, setSwitchState] = useState(false);
    const [selectedDay, setSelectedDay] = useState(null);
    const [dispo, setDispo] = useState(null)
    const [dispoNow, setDispoNow] = useState(true);
    const [resetTimer, setResetTimer] = useState(false);

    const handleToggleDispo = () => {
        setDispoNow((prevDispo) => !prevDispo);
        setResetTimer(true); // Déclencher la réinitialisation du compte à rebours
    };

    const handleCountdownEnd = () => {
        // Code à exécuter lorsque le compte à rebours atteint 0
        console.log("Le compte à rebours est terminé !");
        setDispoNow((prevDispo) => !prevDispo); // Réinitialiser l'état dispoNow à false
        setResetTimer(false); // Réinitialiser l'état resetTimer à false
    };

    const handleAddDispo = () => {
        setDispo(true)
    }
    const generateOptions = (start, end, step) => {
        const options = [];
        for (let value = start; value <= end; value += step) {
            options.push(value < 10 ? `0${value}` : `${value}`);
        }
        return options;
    };

    const hours = generateOptions(0, 23, 1);
    const minutes = generateOptions(0, 55, 5);

    const handleSwitchChange = () => {
        setSwitchState(!switchState); // Inverser l'état actuel
    };

    const handleDayClick = (dayIndex) => {
        setSelectedDay(dayIndex);
    };

    const handleCloseClick = () => {
        setSelectedDay(null);
        setDispo(null)
    };

    return (
        <section className='calendar'>
            <h1>Calendrier des riders</h1>
            <div className='formButton'>
                <button onClick={handleToggleDispo} className={`${dispoNow ? 'dispo' : 'not-dispo'}`}>
                    {dispoNow ? 'Je suis dispo' : 'Je ne suis pas dispo'}
                    {!dispoNow && (
                        <CountdownTimer onCountdownEnd={handleCountdownEnd} resetTimer={resetTimer} />
                    )}
                </button>
                <button onClick={handleAddDispo}>Ajouter mes disponibilités</button>
            </div>
            <form action="" className='selectStation'>
                <label>
                    <select name="station" value={formData.station} onChange={handleChange} required>
                        <option value="" disabled>Sélectionne ta station</option>
                        {stationsOptions.map((station) => (
                            <option key={station} value={station}>{station}</option>
                        ))}
                    </select>
                </label>
            </form>
            <div>
                <p>Amis uniquement</p>
                <input
                    checked={switchState}
                    onChange={handleSwitchChange}
                    className="switch-input"
                    type="checkbox"
                    id='switch-filtre'
                />
                <label
                    style={{ background: switchState ? colors.colorOne : colors.colorTwo }}
                    className="switch-label"
                    htmlFor='switch-filtre'
                >
                    <span className={`switch-button`} />
                </label>
            </div>
            <section>
                {dateArray.map((date, index) => (
                    <div className='day' key={index}>
                        <p>{date}</p>
                        <div>
                            {[...Array(13)].map((_, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleDayClick(index)}
                                    className={`small-div ${selectedDay === index ? 'selected' : ''}`}
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
                    </div>
                ))}
            </section>
            {/* Grande div au centre */}
            {selectedDay !== null && (
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
                            + Suivre
                        </a>
                    </div>

                </div>
            )}
            {dispo !== null && (
                <div className='dispoSelect'>
                    <form className="interval-time-picker">
                        <div className='croix' onClick={handleCloseClick}>
                            <div class="circle">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <h2>Sélectionne tes disponibilités</h2>
                        <label className='labelDispoTop'>
                            Sport:
                            <select name="sport" value={formData.sport} onChange={handleChange} required>
                                {sportsOptions.map((sport) => (
                                    <option key={sport} value={sport}>{sport}</option>
                                ))}
                            </select>
                        </label>

                        <label className='labelDispoTop'>
                            Niveau:
                            <select name="niveau" value={formData.niveau} onChange={handleChange} required>
                                {niveauxOptions.map((niveau) => (
                                    <option key={niveau} value={niveau}>{niveau}</option>
                                ))}
                            </select>
                        </label>

                        <label className='labelDispoTop'>
                            Type de ride:
                            <select name="typeDeRide" value={formData.typeDeRide} onChange={handleChange} required>
                                {typesDeRideOptions.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </label>
                        <section>
                            {dateArray.map((date, index) => (
                                <div className='dispoDay' key={index}>
                                    <h3>{date}</h3>
                                    <div>
                                        <h3>Heure de début</h3>
                                        <div>
                                            <label>
                                                <select name="startHour">
                                                    {hours.map((hour) => (
                                                        <option key={hour} value={hour}>
                                                            {hour}
                                                        </option>
                                                    ))}
                                                </select>
                                            </label>
                                            <p>:</p>
                                            <label>
                                                <select name="startMinute">
                                                    {minutes.map((minute) => (
                                                        <option key={minute} value={minute}>
                                                            {minute}
                                                        </option>
                                                    ))}
                                                </select>
                                            </label>
                                        </div>
                                    </div>

                                    <div>
                                        <h3>Heure de fin</h3>
                                        <div>
                                            <label>
                                                <select name="endHour">
                                                    {hours.map((hour) => (
                                                        <option key={hour} value={hour}>
                                                            {hour}
                                                        </option>
                                                    ))}
                                                </select>
                                            </label>
                                            <p>:</p>
                                            <label>
                                                <select name="endMinute">
                                                    {minutes.map((minute) => (
                                                        <option key={minute} value={minute}>
                                                            {minute}
                                                        </option>
                                                    ))}
                                                </select>
                                            </label>
                                        </div>

                                    </div>

                                </div>
                            ))}
                        </section>
                        <input type="submit" value="Valider" />
                    </form>
                </div>
            )

            }
        </section>
    );
};

export default AvailabilityCalendar;
