import React, {Component, useState} from "react";
import '../styles/App.css';
import '../data.js';

const App = (props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [buttons, setButtons]  = useState(true);
  const [nextButton, setNextButton] = useState(false);
 
  const restart = () =>{
    if(buttons == false){
      setCurrentSlide(0);
      setButtons(true);
      setNextButton(false);
    }
  }

  const previous = () => {
    
    if(buttons == false){
      
      if (currentSlide == 1){
        setNextButton(false);
        setButtons(true);
      }
      if(currentSlide > 0){
        setCurrentSlide(currentSlide - 1);
      } 
      if(currentSlide <= (props.slides.length - 1)){
        setNextButton(false);
      }
    }
}

const  next = () => {
    setButtons(false);
    if(currentSlide === props.slides.length - 2){
      setNextButton(true);
    }
    if(currentSlide === props.slides.length - 1){
        setCurrentSlide(0);
    }else{
        setCurrentSlide(currentSlide + 1);
    }
}

  return (
    <>
    <h1 data-testid="title">
    {props.slides[currentSlide].title}
    </h1>
    <p data-testid="text">
      {props.slides[currentSlide].text}
    </p>
    <button disabled = {nextButton} onClick= {next} data-testid="button-next">Next</button>
    <button disabled = {buttons}  data-testid="button-prev" onClick= {previous} > Prev </button>
    <button disabled = {buttons}  data-testid="button-restart" onClick= {restart} > Restart </button>
    </>
  )
}

export default App;