import React from 'react'
import './App.css'
import ImageUploader from 'components/ImageUploader/'
import StatusLight from 'components/StatusLight'
import Notification from 'components/Notification'
import GeneratedImageDisplay from 'components/GeneratedImageDisplay'


const App = () => {

    return (
        <div className="App">
            <Notification />
            <ImageUploader />
            <StatusLight />
            <GeneratedImageDisplay />
        </div>
    )
}

export default App
