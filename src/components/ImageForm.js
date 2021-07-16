import React, { useState } from "react"

// import communication with backend
import imagesService from '../services/images'

import FormData from 'form-data'


const ImageForm = () => {

  const [generatedImageUrl, setGeneratedImageUrl] = useState("")

  const [image, setImage] = useState({
    contentImage: null,
    styleImage: null
  })

  const handleChange = (event) => {
    const imageType = event.target.name
    console.log(imageType)
    setImage({
      ...image,
      [imageType]: URL.createObjectURL(event.target.files[0])
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()


    const temp = await imagesService.uploadImagesToBackend(e.target)
    // console.log(temp)
    // const blob = await temp.blob()
    // const url = URL.createObjectURL(blob)
    // console.log(url)
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
        <img src={generatedImageUrl}></img>
      </div>
    </div>
  )
}

export default ImageForm