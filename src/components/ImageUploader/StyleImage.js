import React from 'react'

// import material ui components & styles
import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { styles } from 'styles'

const useStyles = makeStyles(styles)


const StyleImage = ({ handleChange, imageFormSet, image }) => {

  const classes = useStyles()

  return (
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
          {(imageFormSet.styleImage) &&
          <img
              src={image.styleImage}
              alt="reference"
              className={classes.imagePreview}
          ></img>
          }
          <Typography>
              Please choose a style reference file
          </Typography>
          <Button variant="outlined" component="span">
              Upload
          </Button>
      </label>

  </div>
    )
}

export default StyleImage
