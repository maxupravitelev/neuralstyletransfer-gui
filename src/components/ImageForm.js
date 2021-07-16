import React, { useState } from "react"

// import communication with backend
// import imagesService from '../services/images'

import FormData from 'form-data'


const ImageForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);

    const Upload = async () => {
      await fetch('http://192.168.178.25:6475/api/images', {
        method: 'POST',
        body: formData
        // headers: { 'Content-Type': 'multipart/form-data' }
      }).then(resp => {
        resp.json().then(data => { console.log(data) })
      })
    }
    Upload();
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
    </div>
  )
}

export default ImageForm