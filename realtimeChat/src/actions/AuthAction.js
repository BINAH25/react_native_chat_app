import axios from 'axios'
import { getState } from 'redux'
import { 
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED,
    USER_REGISTRATION_REQUEST,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_FAILED,
    USER_LOGOUT,
} from "../constants/UserConstant";

import { BASE_API_URI } from '../utils/api';
import Secure from '../global/Secure';

// USER LOGIN ACTION
export const login = (username, password) => async(dispatch) =>{
    try {
        dispatch({
            type: USER_LOGIN_REQUEST,
        })
        const config = {
            headers:{
                'content-type':'application/json'
            }
        }
        const {data} = await axios.post(
            `${BASE_API_URI}/chat/auth/login/`,
            {'username':username,'password':password},
            config
        )
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload:data
        })
        Secure.set('userInfo',data)
        Secure.set('user',data.user)
        Secure.set('token',data.token)
        Secure.set('user_permissions',data.permission)

    } catch (error) {
        dispatch({
            type:USER_LOGIN_FAILED,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}

// USER LOGOUT ACTION
export const logout = ()=>(dispatch) =>{
    Secure.remove('userInfo')
    Secure.remove('user')
    Secure.remove('token')
    Secure.remove('user_permissions')
    dispatch({type:USER_LOGOUT})
}


