import React from 'react'
import {FiArrowRight} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import logoImg  from '../images/logo.svg';
import '../styles/pages/landing.css';

function landing() {
  return (
    <div id="page-landing">
    <div className="content-wrapper">
    <img src={logoImg} alt="Logo Happy"/>

    <main>
      <h1>Leve felicidade para o mundo</h1>
      <p>Visite orfanatos e mude o dia de muitas crianças.</p>
    </main>

    <div className="location">
      <strong>São Miguel</strong>
      <span>Rio Grande do Norte</span>
    </div>

    <Link to="/app" className="enter-app">
      <FiArrowRight size={26} />
    </Link>
            
    </div>
  </div>
  )
}

export default landing;
