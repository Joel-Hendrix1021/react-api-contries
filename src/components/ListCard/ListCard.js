import React from "react";
import { Link } from 'react-router-dom'
import './ListCard.css'

const ListCard = ({ countries }) => {

  return (
    <>
      {countries.map((item, index) => {   
        
        return (
          <Link   className="link" to={`/about/${item.name}`}>
          <div data-color="element" className="card__country" key={item.name} >  
              <img src={item.flag} alt={item.name} />
              <div class="card__info__country">
                <p className="card__item--name">{item.name}</p>
                <p className="card__item">Population: {formatNumber(item.population)}</p>
                <p className="card__item">Region: {item.region}</p>
                <p className="card__item">Capital: {item.capital}</p>
              </div>
          </div>
          </Link>
        )
      })}
    </>
  );
};


function formatNumber (n) {

  n = String(n).replace(/\D/g, "");

  return n === '' ? n : Number(n).toLocaleString();

}


export default ListCard;
