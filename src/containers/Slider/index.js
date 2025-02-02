import React, { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";
import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);

  // Tri des événements par date décroissante
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtB.date) - new Date(evtA.date)
  );

  const nextCard = () => {
    setIndex(index < (byDateDesc?.length || 0) - 1 ? index + 1 : 0);
  };

  // Utilisation de useEffect avec setInterval pour changer automatiquement l'index toutes les 5 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      nextCard();
    }, 5000);

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(interval);
  }, [index, byDateDesc]); // Ajout de index et byDateDesc comme dépendances pour éviter des comportements inattendus

  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        // Affichage conditionnel des cartes, ajout des classes pour montrer ou cacher les cartes en fonction de l'index
        <div key={event.title} className={`SlideCard SlideCard--${index === idx ? "display" : "hide"}`}>
          <img src={event.cover} alt="forum" />
          <div className="SlideCard__descriptionContainer">
            <div className="SlideCard__description">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <div>{getMonth(new Date(event.date))}</div> 
            </div>
          </div>
        </div>
      ))}
      <div className="SlideCard__paginationContainer">
        <div className="SlideCard__pagination">
          {byDateDesc?.map((event, radioIdx) => (
            <input
              key={event.title}
              type="radio"
              name="radio-button"
              readOnly
              // Ajout de checked pour vérifier si l'index actuel correspond à l'index du bouton radio
              checked={index === radioIdx}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
