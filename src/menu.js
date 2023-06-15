import React from "react";
import './App.css';


function Menu(props) {
  return(
   
    <div id='dish'>
        <img id='dish-image' src={props.categoryImg} alt={''}></img>
        <div id='dish-info'>
          <div id='name-price'>
            <p id='dish-name'>{props.categoryName}</p>
            <p id='dish-price'>{props.categoryPrice}</p>
          </div>
          <p id='dish-description'>{props.categoryDescription}</p>
        </div>
    </div>
  )
}
export default Menu;