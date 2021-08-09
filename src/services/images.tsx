import axios from 'axios'
import FormData from 'form-data'

// const baseUrl = 'http://localhost:6475/api/'
//const imageUrl = 'http://192.168.178.25:6475/api/images'
const imageUrl = process.env.REACT_APP_BACKEND_URL + '/images/'
console.log(imageUrl)

const uploadImagesToBackend = async (target) => {
  

  const data = new FormData(target);

  // data.append('styleImage', images.styleImage.file )

//   for(const k of images){
//     data.append('files',k.file, k.name);
// }

  const config = {
    headers: { 
      // Authorization: token,
      // "Content-Type": "application/json"
      // 'Content-Type': 'multipart/form-data'
      // 'accept': 'application/json',
      // 'Accept-Language': 'en-US,en;q=0.8',
      //'Access-Control-Allow-Origin': 'http://192.168.178.25:6475/api/images',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Content-Type': `multipart/form-data`,
    },
    
  }

  

  const request = axios.post(imageUrl, data, config)
  console.log(data)
  console.log(request)
  const response = await request
  
  return response.data
}

const imagesService = { 
  uploadImagesToBackend
}

export default imagesService