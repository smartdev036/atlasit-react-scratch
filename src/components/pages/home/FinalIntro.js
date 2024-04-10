import React from "react";
import img_landing4 from '../../../assets/img/landing4.png';
import PrimaryButton from '../../shared/PrimaryButton';


function FinalIntro() {
  return ( 
    <div className='final-intro'>
      <div className='app-container'>
          <div className='row'>
              <div className='col-lg-6 col-sm-12 left'>
                  <h1>Buchen Sie ein kostenfreies und unverbindliches Erstgespräch.</h1>
                  <p>
                      Lassen Sie uns kennenlernen und prüfen, wie wir gemeinsam Ergebnisse erzielen, die   Sie begeistern werden.
                  </p>
                  <PrimaryButton>Erstgespräch vereinbaren</PrimaryButton>
              </div>
              <div className='col-lg-6 col-sm-12 right'>
                  <img src={img_landing4} alt='landing'/>
              </div>
          </div>
      </div>
  </div>

   );
}

export default FinalIntro;