import React from "react";
import Travel from "./Travel";

const travels = [
  {
    destination : "Taj Mahal",
    country : "Inde",
    distance : "6.757,55 km",
    photo : "https://whc.unesco.org/uploads/thumbs/site_0252_0008-750-0-20151104113424.jpg"
  },  
  {
    destination : "Hobbiton",
    country : "Nouvelle Zélande",
    distance : "18 942 km",
    photo : "https://cdn.getyourguide.com/img/tour_img-762345-145.jpg"   
  },

  {
    destination : "Reyjavik",
    country : "Island",
    distance : "2.231,22 km",
    photo :"https://www.voyage-pulse.fr/wp-content/uploads/2016/03/Reykjavik-Islande-Vue.jpg"
  },
  {
    destination : "Ile Skye",
    country : "Ecosse",
    distance : "1503 km",
    photo :"https://www.carnets-de-traverse.com/blog/wp-content/uploads/2015/05/Road-trip-ecosse-glenfinnan2.jpg"
  },
  {
    destination : "Dublin",
    country : "Ireland",
    distance : "779,34 km",
    photo :"https://www.mp2.aeroport.fr/imgResize/w780-h480/img/photos/villes/Irlande-Dublin.jpg"
  },

]

const Travels = () => (
  <div>
    {travels.map(travel => (
      < Travel destination={travel.destination}
      photo={travel.photo} 
      country={travel.country}
      distance={travel.distance}/>
    ))}
  </div>
)
export default Travels;