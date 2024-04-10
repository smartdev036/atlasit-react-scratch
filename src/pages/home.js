import '../assets/scss/home.scss'
import img_landing1 from '../assets/img/landing1.png';

import FirstIntro from '../components/pages/home/FirstIntro';
import CarousalHome from '../components/pages/home/Carousal';
import Explain from '../components/pages/home/Explain';
import FinalIntro from '../components/pages/home/FinalIntro';
import ContactUs from '../layouts/contactus';

function HomePage() {
    return ( 
        <>
            <div>
                <img src={img_landing1} className='w-100 vh-100' alt='landing'/>
            </div> 

            <FirstIntro />
            <CarousalHome />
            <Explain />
            <FinalIntro />
            <ContactUs />
        </>
     );
}


export default HomePage;