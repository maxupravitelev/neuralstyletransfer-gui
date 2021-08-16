import React, { useState } from 'react'

// import service for communication with backend
import imagesService from 'services/images'

// import material ui components & styles
import {
    // Typography,
    Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { styles } from 'styles'

const useStyles = makeStyles(styles)


const ImageForm = ({ handleSubmit, handleChange, image }) => {
    const classes = useStyles()

    // const [generatedImageUrl, setGeneratedImageUrl] = useState('')

    // const [image, setImage] = useState({
    //     contentImage: null,
    //     styleImage: null,
    // })

    // const handleChange = (event) => {
    //     if (event.target.files.length !== 0) {
    //         const imageType = event.target.name
    //         setImage({
    //             ...image,
    //             [imageType]: URL.createObjectURL(event.target.files[0]),
    //         })
    //     }
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     setGeneratedImageUrl('')

    //     await imagesService.uploadImagesToBackend(e.target)
    //     setGeneratedImageUrl(
    //         'http://192.168.178.25:6475/api/images/generated_output'
    //     )
    // }

    return (
        // <div >
            <form
                onSubmit={handleSubmit}
                className={classes.fileSelector}
                encType="multipart/form-data"
            >
                <input
                    type="file"
                    name="contentImage"
                    accept="image/*"
                    id="contentImage"
                    style={{ display: 'none' }}
                    onChange={handleChange}
                />
                <label htmlFor="contentImage">
                    <div className={classes.imagePreview}>
                        <img
                            src={image.contentImage}
                            alt="Please choose a file you want to stylize"
                            width="300px"
                        ></img>
                    </div>

                    <Button variant="outlined" component="span">
                        Upload
                    </Button>
                </label>
                {/* <Typography>Please choose a file you want to stylize</Typography> */}
                <input
                    type="file"
                    name="styleImage"
                    accept="image/*"
                    id="styleImage"
                    style={{ display: 'none' }}
                    onChange={handleChange}
                />
                <label htmlFor="styleImage">
                    <div className={classes.imagePreview}>
                        <img
                            src={image.styleImage}
                            alt="Please choose a style reference file"
                            width="300px"
                        ></img>
                    </div>

                    <Button variant="outlined" component="span">
                        Upload
                    </Button>
                </label>
                {/* <Typography>Please choose a style reference image</Typography> */}
                <div>
                    <Button type="submit" variant="outlined">
                        GENERATE
                    </Button>
                </div>
            </form>
        // </div>
    )
}

export default ImageForm
