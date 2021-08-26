// import material ui components & styles
import { Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { styles } from 'styles'

const useStyles = makeStyles(styles)

const ImageForm = ({ handleSubmit, handleChange, image }) => {
    const classes = useStyles()

    return (
        <form
            onSubmit={handleSubmit}
            className={classes.fileSelector}
            encType="multipart/form-data"
        >
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
