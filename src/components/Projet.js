import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'

function Projects() {
    return (
        <div className="main--projects">

            <figure id="reservia" className="project-card" >
                <a href="https://korgmgn.github.io/Openclassroom_Reservia/" title="Voir la démo" target="_blank" rel='noreferrer'>
                    <img className="project-card--img"  src={require("../images/capture_reservia.png")} alt="projet intégration de maquette"/>
                </a>
                <figcaption className="project-card--description">
                    <div className="project-card--description__github-icon">
                        <a href="https://github.com/Korgmgn/Openclassroom_Reservia" title="Voir le code" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithubSquare} /></a>
                    </div>
                    <h3>Réservia</h3>                                    
                    <p>Intégration de maquette d'un site de réservation en ligne.</p>
                    <p><span className="bold-font">Objectifs: </span>Intégrer fidèlement une maquette en responsive, utiliser flexbox et organiser les balises html</p>
                    <p>HTML et CSS</p>
                </figcaption>
            </figure>

            <figure id="ohmyfood" className="project-card" >
                <a href="https://korgmgn.github.io/Openclassrooms_OhMyFood/" title="Voir la démo" target="_blank" rel='noreferrer'>
                    <img className="project-card--img" src={require("../images/capture_ohmyfood.png")} alt="projet animations css"/>
                </a>
                <figcaption className="project-card--description">
                    <div className="project-card--description__github-icon">
                        <a href="https://github.com/Korgmgn/Openclassrooms_OhMyFood" title="Voir le code" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithubSquare} /></a>
                    </div>
                    <h3>OhMyFood</h3>
                    <p>Intégration de maquette d'un site culinaire</p>
                    <p><span className="bold-font">Objectifs: </span>Intégrer fidèlement une maquette en responsive, créer des animations CSS et utiliser Sass (Méthode BEM et 7-1)</p>
                    <p>HTML, CSS, Sass</p>
                </figcaption>
            </figure>

            <figure id="chouetteagence" className="project-card" >
                <a href="https://korgmgn.github.io/Openclassrooms_ChouetteAgence/" title="Voir la démo" target="_blank" rel='noreferrer'>
                    <img className="project-card--img" src={require("../images/capture_chouetteagence.png")} alt="projet optimisation SEO, performances et accessibilité"/>
                </a>
                <figcaption className="project-card--description">
                    <div className="project-card--description__github-icon">
                        <a href="https://github.com/Korgmgn/Openclassrooms_ChouetteAgence" title="Voir le code" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithubSquare} /></a>
                    </div>
                    <h3>Chouette Agence</h3>
                    <p>Optimisation d'un site vitrine d'agence web (Fourni par Openclassrooms)</p>
                    <p><span className="bold-font">Objectifs: </span>Utiliser des outils d'audit afin de repérer les problèmes liés au SEO, à l'accessibilité et aux performances, puis établir un second audit après le déploiement des correctifs</p>
                    <p>GoogleLighthouse, GTMetrix, GoogleAnalytics</p>
                </figcaption>
            </figure>

            <figure id="kanap" className="project-card" >
                <a href="https://kanap-hz.netlify.app/index.html" title="Voir la démo" target="_blank" rel='noreferrer'>
                    <img className="project-card--img" src={require("../images/capture_kanap.png")} alt="projet intégration de fonctionnalités pour site web dynamique"/>
                </a>
                <figcaption className="project-card--description">
                    <div className="project-card--description__github-icon">
                        <a href="https://github.com/Korgmgn/Openclassrooms_Kanap" title="Voir le code" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithubSquare} /></a>
                    </div>
                    <h3>Kanap</h3>
                    <p>Création des fonctionnalités pour un site marchand dynamique (Design et API fournis par Openclassrooms)</p>
                    <p><span className="bold-font">Objectifs: </span>Créer les requêtes API, récupérer et afficher les données reçues, manipuler dynamiquement le DOM, vérifier les formulaires via regex</p>
                    <p>Javascript vanilla</p>
                </figcaption>
            </figure>
            
            <figure id="piiquante" className="project-card" >
                <a href="https://piiquante-hz.netlify.app/" title="Voir la démo" target="_blank" rel='noreferrer'>
                    <img className="project-card--img" src={require("../images/capture_piiquante.png")} alt="projet création d'API REST, opérations CRUD et mongoDB"/>
                </a>
                <figcaption className="project-card--description">
                    <div className="project-card--description__github-icon">
                        <a href="https://github.com/Korgmgn/Openclassrooms_Piiquante" title="Voir le code" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithubSquare} /></a>
                    </div>
                    <h3>Piiquante</h3>
                    <p>Création d'une API pour une application permettant aux utilisateurs de mettre en ligne leurs sauces piquantes favorites (Frontend fourni par Openclassrooms)</p>
                    <p><span className="bold-font">Objectifs: </span>Créer une API REST avec base de données noSQL, fonctionnalités CRUD et middleware d'authentification avec jeton chiffré.</p>
                    <p>Express, Node.js, mongoDB, mongoose, jwt, multer</p>
                </figcaption>
            </figure>

            <figure id="groupomania" className="project-card" >
                <a href="https://groupomania-hz.netlify.app/" title="Voir la démo" target="_blank" rel='noreferrer'>
                    <img className="project-card--img" src={require("../images/capture_groupomania.png")} alt="projet fullstack avec framework frontend, création d'API et base de données SQL"/>
                </a>
                <figcaption className="project-card--description">
                    <div className="project-card--description__github-icon">
                        <a href="https://github.com/Korgmgn/Openclassrooms_Groupomania" title="Voir le code" target="_blank" rel='noreferrer'><FontAwesomeIcon icon={faGithubSquare} /></a>
                    </div>
                    <h3>Groupomania</h3>
                    <p>Projet fullstack, création d'une Single Page Application pour un réseau social interne d'entreprise</p>
                    <p><span className="bold-font">Objectifs: </span>Créer une API REST avec base de données SQL, fonctionnalités CRUD et middleware d'authentification avec jeton chiffré. 
                    Créer les requêtes API, utiliser le framework afin d'afficher dynamiquement les données récupérées les afficher en créant ou en modifiant les composants</p>
                    <p>Express, Node.js, mySQL, Sequelize, multer, jwt, Vue.js, axios</p>
                </figcaption>
            </figure>

        </div>
    )
}

export default Projects