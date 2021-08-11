import React, { useState } from 'react'

import GeneratedImageDisplay from './GeneratedImageDisplay'
import ImageForm from './ImageForm'

// import service for communication with backend
import imagesService from '../../services/images'

// import material ui components & styles
import {
    // Typography,
    Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { styles } from '../../styles'

const useStyles = makeStyles(styles)


const ImageUploader = () => {
    const classes = useStyles()

    const [generatedImageUrl, setGeneratedImageUrl] = useState('')

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

        await imagesService.uploadImagesToBackend(e.target)

        const generatedOutputUrl = process.env.REACT_APP_BACKEND_URL + '/images/generated_output'


        setGeneratedImageUrl(generatedOutputUrl)
    }

    return (
        <div className={classes.container}>
          <ImageForm handleSubmit={handleSubmit} handleChange={handleChange} image={image}/>
            
            <GeneratedImageDisplay generatedImageUrl={generatedImageUrl} />
        </div>
    )
}

export default ImageUploader
