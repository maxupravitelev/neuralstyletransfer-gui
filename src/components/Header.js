import React from 'react'


// import material ui components & styles
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { styles } from '../styles'

const useStyles = makeStyles(styles)


const Header = () => {

  const classes = useStyles()

  return (
    <div className={classes.header}>
      <Typography variant="h4" component="h2">
        Neural Style Transfer
      </Typography>
      <Typography 
        style={{ marginTop: "0.5em" }}
      >Generate an image in the style of a reference image by utilizing <a href="https://www.tensorflow.org/tutorials/generative/style_transfer">neural style transfer</a>.</Typography>
    </div>
  )
}

export default Header