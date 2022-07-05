import React from 'react';
import Lottie from "lottie-react";
import fourOfour from "../../assets/fourOFour.json";
import './ErrorPage.css';

function ErrorPage() {
  const style = {
    height: 500,
    width: 1000,
  };
  return (
    <section className="error">
      <h1>PAGE NOT FOUND!</h1>
        <Lottie animationData={fourOfour} style={style} /> 
    </section>
  )
}

export default ErrorPage
