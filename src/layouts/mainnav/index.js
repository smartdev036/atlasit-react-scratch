import { Nav, Navbar, Container } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PrimaryButton from "../../components/shared/PrimaryButton";
import 'bootstrap/dist/css/bootstrap.min.css';

import img_logo from '../../assets/img/logo.png'
import './index.scss';

function MainNav() {
    const [curUrl, setCurUrl ] = useState('/');
    const [expanded, setExpanded] = useState(false);     
    const navItemClick = (url) => {
        setCurUrl(url);
        setExpanded(false);
    }

    return ( 
        <>
            <Navbar  expand="lg" variant="light" className="main-nav"  expanded={expanded}>
                <Container className='nav-container'>
                    <div className="search">
                        <PrimaryButton>Kontakt</PrimaryButton>
                        <FontAwesomeIcon icon={faMagnifyingGlass}/>                        
                    </div>
                    <Link to="/" className="nav-logo" >
                        <img
                            alt=""
                            src={img_logo}
                            className="d-inline-block align-top"
                            />{' '}
                    </Link>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={()=>setExpanded(expanded? false: 'expanded')}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/" className={curUrl=='/' ? 'active': ''} onClick={()=>navItemClick('/')}>Home</Link>
                            <Link to="/karriere"  className={curUrl=='/karriere' ? 'active': ''}  onClick={()=>navItemClick('/karriere')}>Karriere</Link>
                        </Nav>
                    </Navbar.Collapse>
            
                </Container>
            </Navbar>
        </>
     );
}

export default MainNav;
