import React from 'react'
import './App.css'
import ImageUploader from 'components/ImageUploader/'
import Notification from 'components/Notification'
import GeneratedImageDisplay from 'components/GeneratedImageDisplay'
import StatusBar from 'components/StatusBar'

const App = () => {

    return (
        <div className="App">
            <Notification />
            <StatusBar />
            <ImageUploader />
            <GeneratedImageDisplay />
        </div>
    )
}

export default App
