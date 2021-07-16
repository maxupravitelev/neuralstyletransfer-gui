import React, { useState } from "react"

// import communication with backend
import imagesService from '../services/images'


const ImageForm = () => {

  const [image, setImage] = useState({
    contentImage: null,
    styleImage: null
  })

  const handleChange = (event) => {
    const imageType = event.target.name
    setImage({
      ...image,
      [imageType]: URL.createObjectURL(event.target.files[0])
    })
  }

  const handleSumbit = (event) => {
    event.preventDefault()
    imagesService.uploadImagesToBackend(image)
  }

  return (
    <div>
      <div>
        <p>Please upload a content image</p>
        <input name="contentImage" type="file" onChange={handleChange}></input>
      </div>
      <div>
        <p>Please upload a style image</p>
        <input name="styleImage" type="file" onChange={handleChange}></input>
      </div>
      <div>
        <img src={image.contentImage} alt="original"></img>
        <img src={image.styleImage} alt="stylized"></img>
      </div>
      <button onClick={handleSumbit}>GENERATE</button>
    </div>
  )
}

export default ImageForm