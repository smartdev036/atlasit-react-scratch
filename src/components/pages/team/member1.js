import React from 'react';
import img_job1 from '../../../assets/img/job1.png';

function Member1() {
  return ( 
    <div className='member'>

      <div className='row'>
        <div className='col-md-4 col-sm-12'>
          <img src={img_job1} alt='job1' />
        </div>        
        <div className='col-md-8 col-sm-12 text-center title'>
          <h3>
            <span>
              <strong>technische Product Owner*in</strong> (m/w/d)
              <br />
              in Bereich Softwareentwicklung
            </span>
          </h3>
        </div>        
      </div>
      <p>
        Atlas IT ist eine eigentümergeführte IT-Beratung und Systemhaus. Dank der guten Entwicklung wächst unser Unternehmen weiter und wir suchen ein neues Team-Mitglied als <strong>technische Product Owner*in (m/w/d)</strong> zum nächstmöglichen Zeitpunkt in <strong>Vollzeit</strong> in <strong>Nürnberg/Remote</strong>.
      </p>
      <p>
        <strong>Deine Aufgaben</strong>
        </p>
      <ul>
        <li>Abstimmung von Anforderungen und Lösungen mit Lead-Customers und die Entwicklung&nbsp;</li>
        <li>Planung und Koordination der Entwicklungsprozesse mit der Entwicklung</li>
        <li>Erstellen von Fachkonzepten und User Stories, Backlog pflege</li>
        <li>Durchführen von Workshops, Teilnahme an Scrum Events&nbsp;</li>
        <li>Berichterstattung</li>
      </ul>
      <p><strong >Dein Profil</strong></p>
      <ul>
        <li>Ausgeprägte Informatikkenntnisse (Präferiert in Java (Springboot), Angular, DevOps etc.)&nbsp;</li>
        <li>Erfahrungen im agilen Anforderungsmanagement von Softwareentwicklungsprojekten</li>
        <li>Spaß und Geschick bei der Erarbeitung von technischen Konzepten und Realisierungsvarianten&nbsp;</li>
        <li>sehr gute Präsentations- und Moderationskompetenzen</li>
        <li>sehr gute Deutsch Kenntnisse in Wort und Schrift</li>
        <li>umgängliche Art, “can-do” Attitüde</li>
      </ul>
      <p><strong>Unsere Vorteile für Dich</strong></p>
      <ul>
        <li>Stabilität und unbefristeter Arbeitsvertrag</li>
        <li>Persönliches Wachstum, Feedback &amp; Fortbildung</li>
        <li>30 Tage Urlaub und ein attraktives Vergütungsmodell</li>
        <li>Offene Unternehmenskultur mit flachen Hierarchien</li>
        <li>Wertschätzung durch Gestaltungsmöglichkeiten</li>
      </ul>
      <p>
        Bitte sende deine vollständigen Bewerbungsunterlagen, bestehend aus Anschreiben, Lebenslauf und Gehaltsvorstellung an unser Postfach: 
        <strong>hr@atlasit.de</strong>
      </p>

    </div>
   );
}

export default Member1;