import React from "react"
import memesData from "./memesData"

export default function Meme() {
    // const [memeImage, setMemeImage] = React.useState("")

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })




    const [allMemes, setAllMemes] = React.useState([])


    function getMemeImage() {
        // const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url //Can be const {url} = memesArray[randomNumber], this is more of a structuring

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))


    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))

    }

    React.useEffect(() => {

        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    console.log(allMemes)

    return (
        <main>
            <div className="form">
                <input type="text" className="form--input" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange}/>
                <input type="text" className="form--input" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}