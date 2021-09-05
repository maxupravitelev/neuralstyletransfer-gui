import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'

import notificationReducer from 'reducers/notificationReducer'
import generatedImageReducer from 'reducers/generatedImageReducer'


const reducer = combineReducers({
  notification: notificationReducer,
  generatedImage: generatedImageReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store