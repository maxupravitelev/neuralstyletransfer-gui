import React, { useState } from 'react'


// import material ui components & styles
import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { styles } from 'styles'

// import sending notifications
import Notification from 'components/Notification'
import { setNotification } from 'reducers/notificationReducer'
import { useDispatch, useSelector } from 'react-redux'

import { getGeneratedImageUrl, setGeneratingMessage } from 'reducers/generatedImageReducer'


// import service for communication with backend
import imagesService from 'services/images'

const useStyles = makeStyles(styles)

const ImageForm = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

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

            dispatch(setNotification(`${imageType} set`, 3, 'success'))
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        dispatch(setGeneratingMessage('Image is being generated on the server. This might take a moment...'))


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
            <div className={classes.imagePreviewContainer}>
                <input
                    type="file"
                    name="contentImage"
                    accept="image/*"
                    id="contentImage"
                    style={{ display: 'none' }}
                    onChange={handleChange}
                />
                <label htmlFor="contentImage">
                    <img
                        src={image.contentImage}
                        alt="original"
                        className={classes.imagePreview}
                    ></img>
                    <p></p>
                    <Typography>
                        Please choose a file you want to stylize
                    </Typography>
                    <Button variant="outlined" component="span">
                        Upload
                    </Button>
                </label>
            </div>
            <div className={classes.imagePreviewContainer}>
                <input
                    type="file"
                    name="styleImage"
                    accept="image/*"
                    id="styleImage"
                    style={{ display: 'none' }}
                    onChange={handleChange}
                />
                <label htmlFor="styleImage">
                    <img
                        src={image.styleImage}
                        alt="reference"
                        className={classes.imagePreview}
                    ></img>
                    <Typography>
                        Please choose a style reference file
                    </Typography>
                    <Button variant="outlined" component="span">
                        Upload
                    </Button>
                </label>
                <div>
                    <Button type="submit" variant="outlined">
                        GENERATE
                    </Button>
                </div>
            </div>
        </form>
    )
}

export default ImageForm
