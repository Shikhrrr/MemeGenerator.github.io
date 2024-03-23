import React from 'react'
import './Main.css'

export default function Main() {

    const [formData, setFormData] = React.useState({
        topText: "",    
        bottomText: "",
        memeUrl: "http://i.imgflip.com/4pn1an.png",
    })

    function handleChange(event) {
        const {name, value} = event.target
        setFormData( prevData => {
            return {
                ...prevData,
                [name]: value 
            }
        })       
    }

    const [url, setUrl] = React.useState("")

    React.useEffect( () => {

            fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(data => {
                setUrl(data.data.memes)
            })
            .catch(error => {
                console.log(error)
            })
        
        
    }, [])
    
    function bringImage(event) {
        event.preventDefault()

        const {name, value} = event.target 
        const index = Math.floor(Math.random() * 100)
        console.log(index)

        setFormData(prevData => {
            return {
                ...prevData,
                memeUrl: url[index].url
            }
        })
    }

    return (
        <main>
            <form className='main--form' onSubmit={bringImage}>
                <input 
                    type="text" 
                    name='topText'
                    className='main--input' 
                    placeholder='Top Text' 
                    onChange={handleChange}
                    autoComplete='off'
                />

                <input 
                    type="text" 
                    name='bottomText'
                    className='main--input' 
                    placeholder='Bottom Text' 
                    onChange={handleChange}    
                    autoComplete='off'
                />

                <button type='submit'>Get a New Meme Image</button>
            </form>
            <div className='meme--content'>
                <img src={formData.memeUrl} alt="Meme couldn't be loaded" className='memeImage'/>
                <h1 className='top--text text'>{formData.topText}</h1>
                <h1 className='bottom--text text'>{formData.bottomText}</h1>
            </div>
        </main>
    )
}