// import service for communication with backend
import imagesService from 'services/images'

// const initialState = {
//   contentImage: null,
//   styleImage: null
// }

const generatedImageReducer = (state = "initialState", action) => {
    // console.log('state now: ', state)
    // console.log('action', action)

    switch (action.type) {
        case 'GET_GENERATED_IMAGE_URL':
            return action.data
        default:
            return state
    }
}

export const getGeneratedImageUrl = (generatedImageUrl) => {

    return dispatch => {

        
        console.log(generatedImageUrl)
        // const returnedFilename = await imagesService.uploadImagesToBackend(formData)

        // const generatedOutputUrl =
        //     process.env.REACT_APP_BACKEND_URL +
        //     '/images/generated_output/?filename=' +
        //     returnedFilename

        dispatch({
            type: 'GET_GENERATED_IMAGE_URL',
            data: generatedImageUrl,
        })
    }
}


export default generatedImageReducer