import React from 'react'

import './index.scss';
import Divider from '../../components/shared/divider';
import img_recapcha from '../../assets/img/recapcha.png'
import PrimaryButton from '../../components/shared/PrimaryButton'

function ContactUs() {
  return ( 
    <div className='contactus'>
      <div className='app-container'>
        <div class='text-center title'>
          <Divider />
            <span>
              LET'S CONNECT
            </span>
          <Divider />
          <h2>
            Schreiben Sie uns eine Nachricht!
          </h2>
        </div>
        <div className='contactinfo'>
          <div className='row'>
            <div className='col-md-6 col-sm-12'> 
              <label>
                Name<sup> *</sup>
              </label>
              <input class='form-control' placeholder='Name'/>
            </div>
            <div className='col-md-6 col-sm-12'> 
              <label>
                E-Mail<sup> *</sup>
              </label>
              <input class='form-control' placeholder='E-mail'/>
            </div>
            <div className='col-md-6 col-sm-12'> 
              <label>
                Betreff
              </label>
              <input class='form-control' placeholder='Betreff'/>
            </div>
            <div className='col-md-6 col-sm-12'> 
              <label>
                Telefunnummer
              </label>
              <input class='form-control' />
            </div>
            <div className='col-md-12 col-sm-12'> 
              <label>
                Nachricht<sup> *</sup>
              </label>
              <textarea class='form-control' row='5' placeholder='Nachricht'/>
            </div>
            <div class='col-md-12 col-sm-12'>
              <img src={img_recapcha} alt='recapcha'/>
            </div>
            <div class='col-md-12 col-sm-12 text-center submitBtn'>
              <PrimaryButton>
                Senden
              </PrimaryButton>
              
            </div>
          </div>
        </div>
      </div>
    </div>
   );
}

export default ContactUs;