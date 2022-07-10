import React from 'react'
import './Meme.css'

export const Meme = () => {

    //https://api.imgflip.com/get_memes

    const [memeData, setMemeData] = React.useState([])
    React.useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res=>res.json())
        .then(data=>setMemeData(data.data.memes))
    },[])

    const [meme, setMeme] = React.useState({
        topText : "",
        bottomText: "",
        imageUrl :""
    })
    
    function getRandomImage(){
        const memes = memeData;

        var randomMeme = memes[Math.floor(Math.random()*memes.length)];
        setMeme((prevMeme)=>{
            return {
                ...prevMeme,
                imageUrl : randomMeme.url
            }
        });
    }    

    function handleChange(event){
        const {name, value} = event.target
        setMeme((prevMeme)=>({
            ...prevMeme,
            [name]:value
        }))
    }

    return (
        <div className='meme'>
            <div className="form">
                <div className="input">
                    <input onChange={handleChange} name='topText' value={meme.topText} placeholder='Top Text' type="text" />
                    <input onChange={handleChange} name = 'bottomText' value = {meme.bottomText} placeholder='Bottom Text' type="text" />
                </div>
                <button onClick={getRandomImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img className='meme-image' src={meme.imageUrl} alt="" />
                <div className="meme-text top">{meme.topText}</div>     
                <div className="meme-text bottom">{meme.bottomText}</div>
            </div>
            
        </div>
    )
}
