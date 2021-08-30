import React, { useEffect } from 'react'
import './App.css'
import ImageUploader from 'components/ImageUploader/'
import StatusLight from 'components/StatusLight'


// import service for communication with backend
import imagesService from 'services/images'

const App = () => {

    return (
        <div className="App">
            <StatusLight />
            <ImageUploader />
        </div>
    )
}

export default App
