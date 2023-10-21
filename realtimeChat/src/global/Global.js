import { create } from 'zustand'

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
        set((state)=>({
            authenticated:false,
            user:{}
        }))
    }
}))

export default useGlobal