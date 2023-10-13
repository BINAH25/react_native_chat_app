import { SafeAreaView, 
    StatusBar, 
    Text, 
    View,
    Animated
 } from 'react-native'
import React from 'react'
import styles from './splash.style'
import Title from '../../commons/title/Index'
import { useEffect } from 'react'

const Splash = () => {
    const translateY = new Animated.Value(0)
    const duration = 800

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
            <Title text='Louis Seyram' color='white'/>
       </Animated.View>
    </SafeAreaView>
  )
}

export default Splash
