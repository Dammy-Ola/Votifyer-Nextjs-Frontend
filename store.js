import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer } from './reducers/authReducers'

const reducer = combineReducers({
  userLogin: userLoginReducer,
})

const authUserFromStorage =
  typeof window !== 'undefined'
    ? localStorage.getItem('authUser')
      ? JSON.parse(localStorage.getItem('authUser'))
      : null
    : null

const initialState = {
  userLogin: { authUser: authUserFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
