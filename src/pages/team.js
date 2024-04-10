import React from 'react';
import img_teams_bg from '../assets/img/background2.png';
import '../assets/scss/teams.scss'
import MemberList from '../components/pages/team/memberlist';
import ContactUs from '../layouts/contactus';

function TeamPage() {
    return ( 
        <>
            <div>
                <img src={img_teams_bg} className='w-100 vh-100' alt='landing'/>
            </div> 
            <MemberList />
            <ContactUs />

        </>
     );
}


export default TeamPage;