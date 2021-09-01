import React, { useState } from 'react'

import GeneratedImageDisplay from 'components/GeneratedImageDisplay'
import ImageForm from 'components/ImageUploader/ImageForm'

// import service for communication with backend
import imagesService from 'services/images'

// import material ui components & styles
import { makeStyles } from '@material-ui/styles'
import { styles } from 'styles'

const useStyles = makeStyles(styles)


const ImageUploader = () => {
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <ImageForm />
        </div>
    )
}

export default ImageUploader
