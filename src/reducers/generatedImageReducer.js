// import service for communication with backend
// import imagesService from 'services/images'

const initialState = {
    url: "",
    generatingMessage: ""
}

const generatedImageReducer = (state = initialState, action) => {
    // console.log('state now: ', state)
    // console.log('action', action)

    switch (action.type) {
        case 'GET_GENERATED_IMAGE_URL':
            return {...state, url: action.data}
        default:
            return state
    }
}

export const getGeneratedImageUrl = (generatedImageUrl) => {

    return dispatch => {

        dispatch({
            type: 'GET_GENERATED_IMAGE_URL',
            data: generatedImageUrl,
        })
    }
}


export default generatedImageReducer