import React from "react";

export const Card = (props) => {
  return (
    <>
      <div key={props.id} className="movieCard" onClick={()=> props.setModal('flex')}>
        <div className="imgdiv"><img className="img" src={props.image} alt="logo" /></div>
        <h1>{props.title}</h1>
        <h3>Rating : {props.rating}⭐</h3>
        <p>Duration : {props.duration}</p>
      </div>
    </>
  );
};

export default Card;
