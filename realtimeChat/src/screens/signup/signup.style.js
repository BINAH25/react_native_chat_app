import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    safe_area:{
        flex:1,
        backgroundColor: 'white'
    },
    view:{
        flex:1,
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    button:{
        backgroundColor: '#202020',
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center',
        height:52,
        marginTop: 20,
    },
    button_text:{
        color:'white',
        fontSize: 16,
        fontWeight:'bold'
    }
})
export default styles
