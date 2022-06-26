import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Providers from './navigation';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
// import firebase from '@firebase/app'
const FetchFont=()=>{
  return Font.loadAsync({
    'Kufam-SemiBoldItalic':require('./assets/fonts/Kufam-SemiBoldItalic.ttf')
  })
}
const Stack=createStackNavigator();

export default function App() {
  const [fontLoaded, setfontLoaded] = useState(false);
  if(fontLoaded){
    return (
      <Providers/>
    );
  }
  else{
    return <AppLoading startAsync={FetchFont} onFinish={()=>{setfontLoaded(true)}} onError={()=>console.log('Error')}/>
  }
}
