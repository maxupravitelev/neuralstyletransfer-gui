import React, { useState } from "react"
import axios from "axios"

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

  const handleClick = () => {
    
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
        <img src={image.contentImage}></img>
        <img src={image.styleImage}></img>
      </div>
      <button onClick={handleClick}>GENERATE</button>
    </div>
  )
}

export default ImageForm