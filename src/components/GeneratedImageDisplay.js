// import React from 'react' // , { useState }
import { useSelector } from 'react-redux'

// import material ui components & styles
import {
    Typography,
    // Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { styles } from 'styles'


const useStyles = makeStyles(styles)

const GeneratedImageDisplay = () => {
    const classes = useStyles()

    const generatedImageUrl = useSelector(state => state.generatedImage.url)

    const imageGenerationState = useSelector(state => state.generatedImage.generatingMessage)

    return (
        <div className={classes.elevatedDiv}>
            {generatedImageUrl && 
            <img
                src={generatedImageUrl}
                alt='generated content'
                className={classes.imagePreview}
            ></img>
            }
            <div>
                <Typography>{imageGenerationState}</Typography>
            </div>
        </div>
    )
}

export default GeneratedImageDisplay
