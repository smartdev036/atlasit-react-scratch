import '../assets/scss/terms.scss';

function TermsPage() {
    return ( 
        <div className='TermsPage'>
            <div className='app-container'>
                <div className='text-center'>
                    <h3>Impressum</h3>
                    <p>
                        Angaben gemäß § 5 TMG:                        
                    </p>
                </div>
                <div>
                    <h3>
                        <strong>
                            Inhaltlich verantwortlich
                        </strong>
                    </h3>
                    <p>
                        Atlas IT GmbH vertreten durch den Geschäftsführer Norbert Nyíri
                    </p>
                    <h3>
                        Kontakt
                    </h3>
                    <p>
                        Elbinger Straße 49<br />
                        90491 Nürnberg<br />
                        Telefon: 0911/923-746-50<br />
                        E-Mail: info@atlasit.de
                    </p>
                    <h3>Registereintrag</h3>
                    <p>
                        Eintragung im Registergericht: Nürnberg <br />
                        egisternummer: HRB34896 <br />
                        Umsatzsteueridentnummer: DE317151520
                    </p>
                    <h3>Redaktionell verantwortlich</h3>
                    <p>
                        Norbert Nyíri<br />
                        Elbinger Straße 49<br />
                        90491 Nürnberg
                    </p>
                </div>

            </div>
        </div>
     );
}

export default TermsPage;