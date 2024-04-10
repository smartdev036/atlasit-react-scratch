import React from 'react';
import img_explain1 from '../../../assets/img/img_explain1.png';
import img_explain2 from '../../../assets/img/img_explain2.png';
import img_explain3 from '../../../assets/img/img_explain3.png';
import img_explain4 from '../../../assets/img/img_explain4.png';
import Divider from '../../shared/divider';

function Explain() {
  return ( 
    <div className='explain'>
      <div className='app-container'>
          <div className='text-center head'>
              <Divider />
                  <span>LEISTUNGEN</span>
              <Divider />
              <h1 className='pt-4 pb-5'>Wir bieten ganzheitliche Softwareentwicklung an</h1>
              <p>
                  Ganzheitliche Softwareentwicklung beginnt bei vorbereitenden Kundengesprächen und reicht über die Analyse, Lösungsfindung und Implementierung bis hin zur Nachbetreuung. Unser Grundprinzip dabei: ein ganzheitlicher Entwicklungsprozess beinhaltet alle notwendigen Soll-Aktivitäten, nicht aber redundante Teilaktivitäten, die den Prozess lediglich aufblähen würden.
              </p>
          </div>

          <div className='pt-5 img_explain'>
              <div className='row'>
                  <div className='col-lg-5 col-sm-12'>
                      <img src={img_explain1} alt='explain1' />
                  </div>
                  <div className='col-lg-7 col-sm-12'>
                      <h3>Unabhängige Beratung</h3>
                      <p>
                          Einmal getroffene Entscheidungen über Themen der Digitalisierung oder der Daten- und IT-Sicherheit prägen die Zukunft des Unternehmens auf Jahre hinaus.
                      </p>
                      <p>
                          Unsere Erfahrung mit unterschiedlichen Branchen, Unternehmensgrößen und Technologien ermöglicht es uns, eine optimale, auf die Interessen unserer Kunden abgestimmte Lösung auszuarbeiten.
                      </p>
                      <p>
                          Sie können mit uns als Partner, das Risiko einer schmerzhaften Fehlinvestition eliminieren und Ihr Geschäftspotenzial mit Hilfe von optimal zugeschnittenen IT-Lösungen voll ausschöpfen.
                      </p>
                  </div>
              </div>
              <div className='row'>
                  <div className='col-lg-5 col-sm-12'>
                      <img src={img_explain2} alt='explain1' />
                  </div>
                  <div className='col-lg-7 col-sm-12'>
                      <h3>Konzept & Design</h3>
                      <p>
                          Um nachhaltigen Erfolg sicherzustellen, müssen wir die langfristige Unternehmensvision verstehen und darauf basierend eine kundenorientierte Lösung erarbeiten.
                      </p>
                      <p>
                          Wir erarbeiten das Aussehen und die Funktionen Ihrer Anwendung in enger Abstimmung mit Ihnen, wobei eine ansprechende Optik und intuitive Bedienbarkeit in den Vordergrund gestellt werden.                                
                      </p>
                      <p>
                          Nach der gemeinsamen Definition der erwarteten Ergebnisse, bieten wir Ihnen Lösungsmöglichkeiten an und priorisieren diese entsprechend den von Ihnen festgelegten Kriterien (z.B. Nutzen, Kosten, Zeit) und den gewünschten Gewichtungen. Anschließend setzen wir das Projekt um, das die gemeinsam ausgewählte Lösungsvariante verwirklicht.
                      </p>
                  </div>
              </div>
              <div className='row'>
                  <div className='col-lg-5 col-sm-12'>
                      <img src={img_explain3} alt='explain1' />
                  </div>
                  <div className='col-lg-7 col-sm-12'>
                      <h3>Programmierung</h3>
                      <p>
                          Wir erstellen einzigartige und innovative Anendungen mit den neuesten Technologien. Dabei wenden wir agile Entwicklungsmethoden an, die es uns ermöglichen, sich flexibel sowohl an Geschäftsanforderungen als auch an die bestehende Systemlandschaft anzupassen.
                      </p>
                      <p>
                          Unsere Angebotspalette deckt folgende Typen von Anwendungen und Lösungen ab:
                      </p>
                      <ul>
                          <li>Webanwendungen</li>
                          <li>Mobile Applikationen</li>
                          <li>Cloud-Anwendungen</li>
                          <li>Blockchain-Lösungen</li>
                      </ul>
                  </div>
              </div>
              <div className='row'>
                  <div className='col-lg-5 col-sm-12'>
                      <img src={img_explain4} alt='explain1' />
                  </div>
                  <div className='col-lg-7 col-sm-12'>
                      <h3>Unabhängige Beratung</h3>
                      <p>
                          Einmal getroffene Entscheidungen über Themen der Digitalisierung oder der Daten- und IT-Sicherheit prägen die Zukunft des Unternehmens auf Jahre hinaus.
                      </p>
                      <p>
                          Unsere Erfahrung mit unterschiedlichen Branchen, Unternehmensgrößen und Technologien ermöglicht es uns, eine optimale, auf die Interessen unserer Kunden abgestimmte Lösung auszuarbeiten.
                      </p>
                      <p>
                          Sie können mit uns als Partner, das Risiko einer schmerzhaften Fehlinvestition eliminieren und Ihr Geschäftspotenzial mit Hilfe von optimal zugeschnittenen IT-Lösungen voll ausschöpfen.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
   );
}

export default Explain;