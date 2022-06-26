import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { windowWidth,windowHeight } from '../../utils/Dimensions'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

const FetchFont=()=>{
  return Font.loadAsync({
    'LatoRegular':require('../../assets/fonts/Lato-Regular.ttf'),
  })
}
export default function FormButton({buttonTitle,...rest}) {
  const [fontLoaded, setfontLoaded] = useState(false);
  if(fontLoaded){
  return (
      <TouchableOpacity style={styles.buttonContainer} {...rest}>
          <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
  )
  }
  else{
    return <AppLoading startAsync={FetchFont} onFinish={()=>{setfontLoaded(true)}} onError={()=>console.log('Error')}/>
  }
}

const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: '100%',
      height: windowHeight / 15,
      backgroundColor: '#2e64e5',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: 'LatoRegular',
    },
  });