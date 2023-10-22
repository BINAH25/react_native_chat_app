import { create } from 'zustand'
import Secure from './Secure'
const useGlobal = create((set) => ({
    //------------------
    // AUTHENTICATION
    //------------------
    authenticated: true,
    user:{},

    login: (user)=>{
        set((state)=>({
            authenticated:true,
            user:user
        }))
    },

    logout: ()=>{
        Secure.wipe()
        set((state)=>({
            authenticated:false,
            user:{}
        }))
    }
}))

export default useGlobal