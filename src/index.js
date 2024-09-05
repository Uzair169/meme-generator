import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./header"
import Meme from './Meme'
import './styles.css'

function App() {
    return (
        <div>
            <Header />
            <Meme />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)