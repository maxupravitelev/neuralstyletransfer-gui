import React, { useState } from 'react'

import GeneratedImageDisplay from 'components/ImageUploader/GeneratedImageDisplay'
import ImageForm from 'components/ImageUploader/ImageForm'

// import service for communication with backend
import imagesService from 'services/images'

// import material ui components & styles
import {
    // Typography,
    // Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { styles } from 'styles'

const useStyles = makeStyles(styles)


const ImageUploader = () => {
    const classes = useStyles()

    const [generatedImageUrl, setGeneratedImageUrl] = useState('')
    const [imageGenerationState, setImageGenerationState] = useState('')


    const [image, setImage] = useState({
        contentImage: null,
        styleImage: null,
    })

    const handleChange = (event) => {
        if (event.target.files.length !== 0) {
            const imageType = event.target.name
            setImage({
                ...image,
                [imageType]: URL.createObjectURL(event.target.files[0]),
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setGeneratedImageUrl('')

        setImageGenerationState('Image is being generated on the server. This might take a moment...')
        
        const returnedFilename = await imagesService.uploadImagesToBackend(e.target)

        const generatedOutputUrl = process.env.REACT_APP_BACKEND_URL + '/images/generated_output/?filename=' + returnedFilename
        
        setImageGenerationState('')
        
        setGeneratedImageUrl(generatedOutputUrl)
    }

    return (
        <div className={classes.container}>
          <ImageForm handleSubmit={handleSubmit} handleChange={handleChange} image={image}/>
            
            <GeneratedImageDisplay generatedImageUrl={generatedImageUrl} imageGenerationState={imageGenerationState}/>
        </div>
    )
}

export default ImageUploader
