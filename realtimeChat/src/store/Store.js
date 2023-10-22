import {legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { user_login_reducer } from '../reducers/AuthReducer'
import Secure from '../global/Secure'

// COMBINE REDUCERS START
const reducer = combineReducers({
    // USER REDUCER
    user_login: user_login_reducer,
})

const userInfoFromStorage = Secure.get('userInfo')?
    Secure.get('userInfo'):null

const initailState = {
    user_login:{userInfo:userInfoFromStorage},
}

const midlleWare = [thunk]


const store = createStore(reducer, initailState ,
    composeWithDevTools(applyMiddleware(...midlleWare)))


export default store