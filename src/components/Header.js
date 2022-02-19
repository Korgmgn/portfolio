import React from "react"

function Header() {
    return (
        <div className="header-background">
            <header className="header">
                <h1 className="header--name">
                    Hamimi Zouaoui
                </h1>
                <p className="header--jobname">Développeur Web frontend</p>
                <p className="header--description"></p>
                <nav className="header--nav">
                    <ul className="nav--list">
                        <li><a href="https://www.linkedin.com/in/hamimi-zouaoui/" target="_blank" rel='noreferrer'>LinkedIn</a></li>
                        <li><a href={require("../images/CV_Zouaoui_hamimi_Developpeur_web.pdf")} target="_blank" rel='noreferrer' >Mon CV</a></li>
                        <li><a href="https://github.com/Korgmgn" target="_blank" rel='noreferrer'>Github</a></li>
                        <li><a href="mailto:zouaoui.hm@gmail.com">Me contacter</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header