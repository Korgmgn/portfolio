import React from "react"
import Projects from "./Projet"

function Main() {
    return (
        <div className="main-background">
            <main className="main">
                <h2 className="main--title">Mes projets</h2>
                <p className="main--description">Voici l'ensemble des projets que j'ai pu réaliser</p>
                <Projects />    
            </main>
        </div>
    )
}

export default Main