import { SafeAreaView, 
    StatusBar, 
    Text, 
    View,
    Animated,
    TouchableOpacity
 } from 'react-native'
import React from 'react'
import styles from './splash.style'
import Title from '../../commons/title/Index'
import { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const translateY = new Animated.Value(0)
    const duration = 800
    const navigation = useNavigation()

    useEffect(()=>{
        Animated.loop(
            Animated.sequence([
                Animated.timing(translateY,{
                    toValue:20,
                    duration:duration,
                    useNativeDriver:true
                }),
                Animated.timing(translateY,{
                    toValue:0,
                    duration:duration,
                    useNativeDriver:true
                })
            ])
        ).start()
    },[])

  return (
    <SafeAreaView style={styles.safe_area}>
        <StatusBar barStyle='light-content'/>
       <Animated.View style={[{transform: [{translateY}]}]}>
            <Title text='Hi, Welcome' color='white'/>
       </Animated.View>
       <TouchableOpacity 
       onPress={()=>navigation.navigate('LoginScreen') }
       style={{
        backgroundColor: '#ffffff',
        borderRadius: 26,
        alignItems: 'center',
        justifyContent: 'center',
        height:52,
        width:150,
        marginTop: 20,
       }}>
        <Text style={{
            fontSize:20
        }}>Let's Go</Text>
       </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Splash
