import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faLocationDot, faPhoneAlt, faMailBulk } from '@fortawesome/free-solid-svg-icons'

import img_logo from '../../assets/img/logo.png'
import './index.scss'

function MainFooter() {
    return ( 
        <footer className=" text-center">
            <div className="contact-info">
                <div className="background-overlay"></div>
                <div className="row">
                    <div className="col-xs-5">
                    </div>
                    <div className="col-xs-7">
                        <div className="card1">
                            <img src={img_logo} alt='logo'/>
                        </div>
                        <div className="card2">
                            <div className='row'>
                                <div className="col-xs-1 div2">
                                    <div className="headquater">
                                        <h4>Headquater</h4>
                                        <div className="detail">
                                            <ul>
                                                <li> 
                                                    <FontAwesomeIcon icon={faBuilding} className='px-2'/>
                                                    Atlas IT GmbH
                                                </li>
                                                <li>
                                                    <FontAwesomeIcon icon= {faLocationDot} className='px-2'/>
                                                    Elbinger Str.49 - 90491 Nurnberg
                                                </li>
                                                <li>    
                                                    <FontAwesomeIcon icon={faPhoneAlt} className='px-2'/>
                                                    +49/911-923-746-50
                                                </li>
                                                <li> 
                                                    <FontAwesomeIcon icon={faMailBulk} className='px-2'/>
                                                    info@atlasit.de
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-1 div3">
                                <div className="headquater">
                                        <h4>
                                            Information                                            
                                            </h4>
                                        <div className="detail">
                                            <ul>
                                                <li> 
                                                    <Link to={'/datenschutz'} >
                                                        Datenschutz
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={'/impressum'} >
                                                        Impression
                                                    </Link>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card3">
                            <div className='row'>
                                <div className="col-xs-1 div2"></div>
                                <div className="col-xs-1 div3">
                                <div className="headquater">
                                        <h4>
                                            Folgen Sie uns
                                        </h4>
                                        <div className="detail">
                                            <ul>
                                                <li> 
                                                    <Link to={'https://www.linkedin.com/company/atlasit'} >
                                                        linkedin
                                                    </Link>
                                                </li>
                                                <li> 
                                                    <Link to={'https://www.facebook.com/atlasit.de'} >
                                                        FaceBook
                                                    </Link>
                                                </li>
                                                <li> 
                                                    <Link to={'https://www.youtube.com/channel/UCWh98tKK4DIvs47OvSmjnXg'} >
                                                        Youtube
                                                    </Link>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="row footer2">
                <div className="copyrighttext col-sm-4">
                    Copyright © {new Date().getFullYear()} Atlas IT GmbH | Powered by Atlas IT GmbH
                </div>
                <div className="img_logo col-sm-4">
                    <img src={img_logo} alt='logo'/>
                </div>
                <div className='col-sm-4'>
                    <Link to="/datenshutz">Datenshutz</Link>
                    <Link to="#">Cookie Policy</Link>
                </div>
            </div>
        </footer>
     );
}

export default MainFooter;