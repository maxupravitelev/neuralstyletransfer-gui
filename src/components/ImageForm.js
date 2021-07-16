import React, { useState } from "react"

// import communication with backend
import imagesService from '../services/images'

import FormData from 'form-data'


const ImageForm = () => {

  const [generatedImageUrl, setGeneratedImageUrl] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
 
        
    const temp = await imagesService.uploadImagesToBackend(e.target)
    console.log(temp)

  }

  return (
    <div>
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <input type="file" id="image" name="contentImage"
          accept="image/*" className="file-custom" />
        <input type="file" id="image" name="styleImage"
          accept="image/*" className="file-custom" />
        <button >GENERATE</button>
      </form>
      <img src={generatedImageUrl}></img>
    </div>
  )
}

export default ImageForm