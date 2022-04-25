import React from "react"

function Header() {
    return (
        <div className="header-background">
            <header className="header">
                <h1 className="header--name">
                    Hamimi Zouaoui
                </h1>
                <p className="header--jobname">Développeur Web frontend</p>
                <p className="header--description">Développeur web frontend, passionné par la découverte et la maîtrise de nouvelles technologies du Web</p>
                <nav className="header--nav">
                    <ul className="nav--list">
                        <li><a href="https://www.linkedin.com/in/hamimi-zouaoui/" target="_blank" rel='noreferrer'>LinkedIn</a></li>
                        <li><a href={require("../images/CV_zouaoui_hamimi_developpeur_web-alternance.pdf")} target="_blank" rel='noreferrer' >Mon CV</a></li>
                        <li><a href="https://github.com/Korgmgn" target="_blank" rel='noreferrer'>Github</a></li>
                        <li><a href="#contact">Me contacter</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header