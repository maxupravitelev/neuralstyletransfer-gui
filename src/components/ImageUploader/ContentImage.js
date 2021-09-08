import React, { useState } from 'react'

// import material ui components & styles
import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { styles } from 'styles'

const useStyles = makeStyles(styles)


const ContentImage = ({ handleChange, imageFormSet, image}) => {

  const classes = useStyles()

    return (
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
                {imageFormSet.contentImage && (
                    <img
                        src={image.contentImage}
                        alt="original"
                        className={classes.imagePreview}
                    ></img>
                )}
                <p></p>
                <Typography>
                    Please choose a file you want to stylize
                </Typography>
                <Button variant="outlined" component="span">
                    Upload
                </Button>
            </label>
        </div>
    )
}

export default ContentImage
