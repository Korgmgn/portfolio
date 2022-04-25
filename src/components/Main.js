import React from "react"
import Projects from "./Projet"
import Contact from "./Contact"

function Main() {
    return (
        <div className="main-background">
            <main className="main">
                <h2 className="main--title">Mes projets</h2>
                <p className="main--description">Je travaille actuellement sur les tests unitaires et tests d'intégration, avant de me lancer sur Typescript.</p>
                <p className="main--description">Vous pouvez accéder à une version démo des projets en cliquant sur leur image.</p>
                <p className="main--description">Pour les applications demandant un e-mail, inscrivez vous avec une adresse fictive pour vous connecter (ex. "example@test.com").</p>
                <p className="main--description">Pour consulter le code source ou tester le projet en local, cliquez sur l'icône Github du projet.</p>
                <Projects />    
                <Contact />
            </main>
        </div>
    )
}

export default Main