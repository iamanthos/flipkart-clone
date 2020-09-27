import React from 'react';
import './Deals.css';

export default function Deals({ image, heading, offer, details }){
  return(
    <div className="deals">
        <div className="body__dealSliderComponent">
          <img className="body__dealsImg" src={image} alt="deals"/>
          { heading && heading != "" ? <h3> {heading} </h3> : <></>}
          { offer && offer != "" ? <p> {offer} </p> : <></>}
          { details && details != "" ? <p> {details} </p> : <></>}
        </div>
    </div>
  )
}