import React from 'react'
import './App.css'

import ImageUploader from 'components/ImageUploader/'
import GeneratedImageDisplay from 'components/GeneratedImageDisplay'
import StatusBar from 'components/StatusBar'
import Header from 'components/Header'

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
            <Header />
            <StatusBar />
            <ImageUploader />
            <GeneratedImageDisplay />
        </div>
    )
}

export default App
