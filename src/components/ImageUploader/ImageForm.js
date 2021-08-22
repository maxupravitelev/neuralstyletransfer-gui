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

    return (
        <form
            onSubmit={handleSubmit}
            className={classes.fileSelector}
            encType='multipart/form-data'
        >
            <input
                type='file'
                name='contentImage'
                accept='image/*'
                id='contentImage'
                style={{ display: 'none' }}
                onChange={handleChange}
            />
            <label htmlFor='contentImage'>
                <div className={classes.imagePreviewContainer}>
                    <img
                        src={image.contentImage}
                        alt='Please choose a file you want to stylize'
                        className={classes.imagePreview}
                    ></img>
                </div>

                <Button variant='outlined' component='span'>
                    Upload
                </Button>
            </label>
            <input
                type='file'
                name='styleImage'
                accept='image/*'
                id='styleImage'
                style={{ display: 'none' }}
                onChange={handleChange}
            />
            <label htmlFor='styleImage'>
                <div className={classes.imagePreviewContainer}>
                    <img
                        src={image.styleImage}
                        alt='Please choose a style reference file'
                        className={classes.imagePreview}
                    ></img>
                </div>

                <Button variant='outlined' component='span'>
                    Upload
                </Button>
            </label>
            <div>
                <Button type='submit' variant='outlined'>
                    GENERATE
                </Button>
            </div>
        </form>
    )
}

export default ImageForm
