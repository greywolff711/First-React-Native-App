import React,{useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import { windowWidth,windowHeight } from '../../utils/Dimensions'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';

const FetchFont=()=>{
    return Font.loadAsync({
      'LatoRegular':require('../../assets/fonts/Lato-Regular.ttf'),
    })
  }
const SocialButton = ({
  buttonTitle,
  btnType,
  color,
  backgroundColor,
  ...rest
}) => {
  const [fontLoaded, setfontLoaded] = useState(false);
  let bgColor = backgroundColor;
  if(fontLoaded){
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      {...rest}>
      <View style={styles.iconWrapper}>
        <FontAwesome name={btnType} style={styles.icon} size={22} color={color} />
      </View>
      <View style={styles.btnTxtWrapper}>
        <Text style={[styles.buttonText, {color: color}]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  )}
  else{
    return <AppLoading startAsync={FetchFont} onFinish={()=>{setfontLoaded(true)}} onError={()=>console.log('Error')}/>
  }
};

export default SocialButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '100%',
    height: windowHeight / 15,
    padding: 10,
    flexDirection: 'row',
    borderRadius: 3,
  },
  iconWrapper: {
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontWeight: 'bold',
  },
  btnTxtWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'LatoRegular',
  },
});