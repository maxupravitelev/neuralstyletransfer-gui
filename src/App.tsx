import React, { useEffect } from 'react'
import './App.css'
import ImageUploader from 'components/ImageUploader/'

// import service for communication with backend
import imagesService from 'services/images'

const App = () => {

    // sent a ping request for waking up backend when frontend is loaded
    useEffect(() => {
        imagesService.getPingFromBackend()
    }, [])

    return (
        <div className="App">
            <ImageUploader />
        </div>
    )
}

export default App
