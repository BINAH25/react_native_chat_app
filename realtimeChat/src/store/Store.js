import {legacy_createStore as createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { user_login_reducer, user_registrstion_reducer} from '../reducers/AuthReducer'
import { socket_reducer } from '../reducers/SocketReducer'

// COMBINE REDUCERS START
const reducer = combineReducers({
    // USER REDUCER
    user_login: user_login_reducer,
    user_registrstion:user_registrstion_reducer,
    socket:socket_reducer
})

const initailState = {
}

const midlleWare = [thunk]


const store = createStore(reducer, initailState ,
    composeWithDevTools(applyMiddleware(...midlleWare)))


export default store