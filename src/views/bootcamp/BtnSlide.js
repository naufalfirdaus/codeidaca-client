import React from "react";
import "./slide.css"
import leftArrow from "../../component/button/left-arrow.svg";
import rightArrow from "../../component/button/right-arrow.svg";

export default function BtnSlider({direction, moveSlide}) {
    console.log(direction, moveSlide);
    return(
        // <button onClick={moveslide}
        //       className = {direction === "next" ? "btn-slide next" : "btn-slide prev"}
        // >
        // <img src= {direction === "next" ? "&#10095" : "&#10095" }></img>
        // </button>

        <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        <img src={direction === "next" ? rightArrow : leftArrow} />
      </button>
    );
}