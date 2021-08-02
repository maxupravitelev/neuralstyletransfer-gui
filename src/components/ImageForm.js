import React, { useState } from "react"

// import communication with backend
import imagesService from '../services/images'

// import 
// import material ui components & styles
import { Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles"
import { styles } from '../styles'

const useStyles = makeStyles(styles)


const ImageForm = () => {

  const [generatedImageUrl, setGeneratedImageUrl] = useState("")

  const [image, setImage] = useState({
    contentImage: null,
    styleImage: null
  })

  const handleChange = (event) => {

    if(event.target.files.length !== 0){
      const imageType = event.target.name
      setImage({
        ...image,
        [imageType]: URL.createObjectURL(event.target.files[0])
      })
    }


  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setGeneratedImageUrl("")

    await imagesService.uploadImagesToBackend(e.target)
    setGeneratedImageUrl("http://192.168.178.25:6475/api/images/generated_output")

  }

  return (
    <div>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" name="contentImage" accept="image/*" onChange={handleChange} />
        <input type="file" name="styleImage" accept="image/*" onChange={handleChange} />
        <button >GENERATE</button>
      </form>
      <div>
        <img src={image.contentImage} alt="original" width="300px"></img>
        <img src={image.styleImage} alt="stylized" width="300px"></img>
      </div>
      <div>
        <img src={generatedImageUrl} alt="generated"></img>
      </div>
    </div>
  )
}

export default ImageForm