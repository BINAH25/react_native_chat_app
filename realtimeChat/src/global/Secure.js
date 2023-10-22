import EncryptedStorage from "react-native-encrypted-storage";

async function set(key, object){
    try {
        await EncryptedStorage.setItem(key,JSON.stringify(object))
    } catch (error) {
        console.log(error)
    }
}

async function get(key){
    try {
        const data = await EncryptedStorage.getItem(key)
        if(data !== undefined){
            return JSON.parse(data)
        }
    } catch (error) {
        console.log(error)
    }
}

async function remove(key){
    try {
        await EncryptedStorage.removeItem(key)   
    } catch (error) {
        console.log(error)
    }
}

async function wipe(){
    try {
        await EncryptedStorage.clear()   
    } catch (error) {
        console.log(error)
    }
}

export default {set, get, remove, wipe}