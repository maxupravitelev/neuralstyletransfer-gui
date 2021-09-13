import React, { useState } from 'react'

import ContentImage from './ContentImage'
import StyleImage from './StyleImage'

// import sending notifications
import Notification from 'components/Notification'
import { setNotification } from 'reducers/notificationReducer'
import { useDispatch } from 'react-redux'

import {
    getGeneratedImageUrl,
    setGeneratingMessage,
} from 'reducers/generatedImageReducer'

// import service for communication with backend
import imagesService from 'services/images'

// import material ui components & styles
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { styles } from 'styles'

const useStyles = makeStyles(styles)


const ImageUploader = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    const [imageFormSet, setImageFormSet] = useState({
        contentImage: false,
        styleImage: false,
    })

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

            setImageFormSet({
                ...imageFormSet,
                [imageType]: true,
            })

            dispatch(setNotification(`${imageType} set`, 3, 'success'))
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        dispatch(
            setGeneratingMessage(
                'Image is being generated on the server. This might take a moment...'
            )
        )

        const returnedFilename = await imagesService.uploadImagesToBackend(
            event.target
        )

        const generatedOutputUrl =
            process.env.REACT_APP_BACKEND_URL +
            '/api/images/generated_output/?filename=' +
            returnedFilename

        dispatch(getGeneratedImageUrl(generatedOutputUrl))

        dispatch(setGeneratingMessage(''))
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={classes.fileSelector}
            encType="multipart/form-data"
        >
            <Notification />
            <ContentImage
                handleChange={handleChange}
                imageFormSet={imageFormSet}
                image={image}
            />
            <StyleImage
                handleChange={handleChange}
                imageFormSet={imageFormSet}
                image={image}
            />
            <div>
                <Button type="submit" variant="outlined">
                    GENERATE
                </Button>
            </div>
        </form>
    )
}

export default ImageUploader
