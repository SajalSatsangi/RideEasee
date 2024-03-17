import { View, Image } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable';
import splashImg from "../../images/splash.png"

const SplashScreen = ({ navigation }) => {

  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('HomeScreen')
    }, 2500)
  },[])

  return (
    <View style={{ backgroundColor: "#085470", flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Animatable.Image
        source={splashImg}
        style={{ width: 300, height: 200 }}
        duration={2000} 
        animation="fadeInDownBig"
      />
    </View>
  )
}

export default SplashScreen
