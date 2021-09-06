import React from 'react'
import './App.css'
import ImageUploader from 'components/ImageUploader/'
import Notification from 'components/Notification'
import GeneratedImageDisplay from 'components/GeneratedImageDisplay'
import StatusBar from 'components/StatusBar'

// import material ui components & styles
import {
    // Typography,
    // Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { styles } from 'styles'

const useStyles = makeStyles(styles)


const App = () => {

    const classes = useStyles()


    return (
        <div className={classes.container}>
            <Notification />
            <StatusBar />
            <ImageUploader />
            <GeneratedImageDisplay />
        </div>
    )
}

export default App