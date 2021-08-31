// import service for communication with backend
import imagesService from 'services/images'

const initialState = {
  contentImage: null,
  styleImage: null
}

const imageUploadsReducer = (state = initialState, action) => {
    // console.log('state now: ', state)
    // console.log('action', action)

    switch (action.type) {
        case 'ADD_CONTENT_IMAGE':
            return {...state, contentImage: action.data}
        case 'ADD_STYLE_IMAGE':
            return {...state, styleImage: action.data}
        default:
            return state
    }
}

export const addContentImage = (contentImage) => {
    return async (dispatch) => {
        // const bookedTimeslot = await visitorService.bookTimeslot(
        //     eMailAddress,
        //     timeslotId
        // )

        dispatch({
            type: 'ADD_CONTENT_IMAGE',
            data: contentImage,
        })
    }
}
