import React from "react";
import img_about_us from '../../../assets/img/atlasit-about-us.jpg';
import icon_empire from '../../../assets/icon/empire-brands.svg';
import icon_rebel from '../../../assets/icon/rebel-brands.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYinYang } from '@fortawesome/free-solid-svg-icons';

import Divider from "../../shared/divider";


function FirstIntro() {
  return ( 
    <div className='app-container'>
      <div className='d-flex about-section'>
          <div className='w-45 p-3'>
              <img src={img_about_us} className="w-100" alt='about'/>
          </div>
          <div className='w-55 p-2'> 
              <div>
                  <p>
                      ATLAS IT​
                      <Divider />
                  </p>
                  <h1>
                      Ihre Vorteile durch eine Zusammenarbeit
                  </h1>
                  <ul>
                      <li>
                          <img src={icon_rebel} alt='landing'/>
                          <span className='ps-4'>
                              <h2>Unabhängigkeit</h2>
                              <p>
                                  Wir werden Ihnen nicht die "eine Lösung" anbieten, sondern alle Möglichkeiten in Erwägung ziehen, um die für Sie beste Lösung zu finden. Das ist unsere Stärke der Unabhängigkeit.
                              </p>
                          </span>
                      </li>
                      <li>
                          <img src={icon_empire} alt='landing'/>
                          <span className='ps-4'>
                              <h2>Unabhängigkeit</h2>
                              <p>
                                Wir wenden nur Praxis-bewährte IT-Lösungen an, die Sie wirklich brauchen. Keine Experimente oder sinnlose Versuche. Das Resultat: maximales "Return on Investment".                                    
                              </p>
                          </span>
                      </li>
                      <li>
                          <FontAwesomeIcon icon={faYinYang} alt='YinYang'/>
                          <span className='ps-4'>
                              <h2>Unabhängigkeit</h2>
                              <p>
                                  Wir streben an, dass Sie durch uns nicht nur ein Dienstleiter finden, sondern ein starker Partner an Ihre Seite haben für all Ihre IT-Vorhaben.                                    
                              </p>
                          </span>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  </div>

   );
}

export default FirstIntro;