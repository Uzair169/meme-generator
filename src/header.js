import React from "react"
import trollface from "./troll-face-poster.png"


export default function Header() {
    return (
        <header className="header">
            <img src={trollface} alt="troll_face" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course Project</h4>
        </header>
    )
}