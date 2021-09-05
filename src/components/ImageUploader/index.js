import React, {  } from 'react'

import ImageForm from 'components/ImageUploader/ImageForm'

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
