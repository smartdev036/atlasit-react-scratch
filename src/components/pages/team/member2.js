import React from 'react';
import img_job2 from '../../../assets/img/job2.png';

function Member2() {
  return ( 
    <div className='member'>

      <div className='row'>
        <div className='col-md-4 col-sm-12'>
          <img src={img_job2} alt='job1' />
        </div>        
        <div className='col-md-8 col-sm-12 text-center title'>
          <h3>
            <span>
              <strong>Fullstack Java Entwickler*in </strong> (m/w/d)
            </span>
          </h3>
        </div>        
      </div>
      <p>Atlas IT ist eine eigentümergeführte IT-Beratung und Systemhaus. Dank der guten Entwicklung wächst unser Unternehmen weiter und wir suchen für eines unserer Projekte ein&nbsp;<strong>Full Stack Java Developer (m/w/d) </strong>zum nächstmöglichen Zeitpunkt in <strong>Vollzeit in Nürnberg/Remote</strong>.</p>      
      <p><strong>Deine Aufgaben</strong></p>
      <ul>
        <li>Umsetzung von UI-Konzepten im Web mit Webtechnologien wie HTML5, CSS3 und Angular</li>
        <li>Realisierung von Microservices mittels Java + Spring Boot</li>
        <li>Arbeiten mit Oracle SQL-Datenbanken</li>
        <li>Gemeinsame Weiterentwicklung und Konzeption von neuen Produktideen</li>
      </ul>
      <p><strong >Dein Profil</strong></p>
      <ul>
        <li>Fachhochschul-, Universitätsabschluss oder vergleichbar Erfahrung im Bereich der Informatik</li>
        <li>Berufserfahrung in der Front und Backend-Entwicklung und mit DevOps Technologien</li>
        <li>Selbstständiges Arbeiten und learning by doing machen Ihnen Spaß</li>
        <li>Ausgeprägte Teamfähigkeit in einem agilen Umfeld</li>
        <li>sehr gute Deutsch Kenntnisse in Wort und Schrift</li>
        <li>Gute Deutsch-/(Englisch)Kenntnisse in Wort und Schrift </li>
      </ul>
      <p><strong>Unsere Vorteile für Dich</strong></p>
      <ul>
        <li>Stabilität und unbefristeter Arbeitsvertrag</li>
        <li>Persönliches Wachstum, Feedback &amp; Fortbildung</li>
        <li>30 Tage Urlaub und ein attraktives Vergütungsmodell</li>
        <li>Offene Unternehmenskultur mit flachen Hierarchien</li>
        <li>Flexibles Arbeitszeitmodell</li>
        <li>Wertschätzung durch Gestaltungsmöglichkeiten</li>
      </ul>
      <p>
        Bitte sende deine vollständigen Bewerbungsunterlagen, bestehend aus Anschreiben, Lebenslauf und Gehaltsvorstellung an unser Postfach:
        <strong>hr@atlasit.de</strong>
      </p> 

    </div>
   );
}

export default Member2;