import { View, TextInput,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { windowWidth,windowHeight } from '../../utils/Dimensions'
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
const FetchFont=()=>{
  return Font.loadAsync({
    'LatoRegular':require('../../assets/fonts/Lato-Regular.ttf'),
  })
}
export default function FormInput({labelValue, placeholderText, iconType, ...rest}) {
  const [fontLoaded, setfontLoaded] = useState(false);
  if(fontLoaded){
  return (
    <View style={styles.inputContainer}>
        <View style={styles.iconStyle}><AntDesign name={iconType} size={24} color="black" /></View>
        <TextInput
            value={labelValue}
            style={styles.input}
            numberOfLines={1}
            placeholder={placeholderText}
            placeholderTextColor="#666"
            {...rest}
        />
    </View>
  )}
  else{
    return <AppLoading startAsync={FetchFont} onFinish={()=>{setfontLoaded(true)}} onError={()=>console.log('Error')}/>
  }
}

const styles = StyleSheet.create({
    inputContainer: {
      marginTop: 5,
      marginBottom: 10,
      width: '100%',
      height: windowHeight / 15,
      borderColor: '#ccc',
      borderRadius: 3,
      borderWidth: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    iconStyle: {
      padding: 10,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRightColor: '#ccc',
      borderRightWidth: 1,
      width: 50,
    },
    input: {
      padding: 10,
      flex: 1,
      fontSize: 16,
      fontFamily: 'LatoRegular',
      color: '#333',
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputField: {
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      width: windowWidth / 1.5,
      height: windowHeight / 15,
      fontSize: 16,
      borderRadius: 8,
      borderWidth: 1,
    },
  });