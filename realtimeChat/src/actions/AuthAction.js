
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios'
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

export const Init = () => {
    return async dispatch => {
      let user = await AsyncStorage.getItem('user');
      if (user !== null) {
        console.log('token fetched');
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: user,
        })
      }
    }
  }
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
        await AsyncStorage.setItem('user',JSON.stringify(data.user))
        await AsyncStorage.setItem('token',data.token)
        await AsyncStorage.setItem('user_permissions',JSON.stringify(data.permission))

    } catch (error) {
        dispatch({
            type:USER_LOGIN_FAILED,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}

// USER REGISTRATION ACTION
export const register = (firstName,lastName,username, password) => async(dispatch) =>{
    try {
        dispatch({
            type: USER_REGISTRATION_REQUEST,
        })
        const config = {
            headers:{
                'content-type':'application/json'
            }
        }
        const {data} = await axios.post(
            `${BASE_API_URI}/chat/auth/sign_up/`,
            {
                'first_name':firstName,
                'last_name':lastName,
                'username':username,
                'password':password,
            },
            config
        )
        dispatch({
            type: USER_REGISTRATION_SUCCESS,
            payload:data
        })
        await AsyncStorage.setItem('user',JSON.stringify(data.user))
        await AsyncStorage.setItem('token',JSON.stringify(data.token))
        await AsyncStorage.setItem('user_permissions',JSON.stringify(data.permission))

    } catch (error) {
        dispatch({
            type:USER_REGISTRATION_FAILED,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}

// USER LOGOUT ACTION
export const logout = () => async (dispatch) => {
    try {
        await AsyncStorage.clear();
        dispatch({ type: USER_LOGOUT });
        console.log('logout successful')
    } catch (error) {
        console.log('Error during logout:', error);
    }
}



