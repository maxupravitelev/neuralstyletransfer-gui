// import React from 'react' // , { useState }

// import material ui components & styles
// import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { styles } from 'styles'

const useStyles = makeStyles(styles)

const GeneratedImageDisplay = ({ generatedImageUrl }) => {
    const classes = useStyles()

    return (
        <div className={classes.elevatedDiv}>
            <img
                src={generatedImageUrl}
                alt="generated"
                className={classes.imagePreview}
            ></img>
        </div>
    )
}

export default GeneratedImageDisplay
