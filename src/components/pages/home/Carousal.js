import React from 'react';
import img_carousal_1 from '../../../assets/img/carousal/1.jpg';
import img_carousal_2 from '../../../assets/img/carousal/2.jpg';
import img_carousal_3 from '../../../assets/img/carousal/3.jpg';
import Divider from '../../shared/divider';

function CarousalHome() {
  return ( 
    <div className='carousal-home'>
      <div className='app-container'>
          <div className='text-center head'>
              <Divider />
                  BEREITS ERFOLGREICHE ZUSAMMENARBEIT MIT...
              <Divider />
          </div>
          <div className='row'>
              <div className='col-sm-4'>
                  <img src={img_carousal_1} alt='carousal1'/>
              </div>
              <div className='col-sm-4'>
                  <img src={img_carousal_2} alt='carousal2'/>
              </div>
              <div className='col-sm-4'>
                  <img src={img_carousal_3} alt='carousal3'/>
              </div>
          </div>
          <div className='text-center indicator'>
              ......
          </div>
      </div>
  </div>

   );
}

export default CarousalHome;