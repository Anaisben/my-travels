import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <figcaption>
      <blockquote>{destination}</blockquote>
      <cite>{country}</cite><br/>
      <cite>{distance}</cite><br/>
    <img src={photo} alt={photo}/>
    </figcaption>
  </figure>
);

export default Travel;