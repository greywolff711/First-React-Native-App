import { StyleSheet, Text,TouchableOpacity, View,Button,Image } from 'react-native'
import React, { useState,useContext } from 'react'
import FormInput from './FormInput';
import FormButton from './FormButton';
import SocialButton from './SocialButton';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import {AuthContext} from '../../navigation/AuthProvider';

const FetchFont=()=>{
  return Font.loadAsync({
    'LatoRegular':require('../../assets/fonts/Lato-Bold.ttf'),
    'KufamSemiBoldItalic':require('../../assets/fonts/Kufam-SemiBoldItalic.ttf'),
  })
}
export default function LoginScreen({navigation}) {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [fontLoaded, setfontLoaded] = useState(false);
  const {login,googleLogin} = useContext(AuthContext);
  if(fontLoaded){
    return (
      <View style={styles.container}>
        <Image source={require("./NTPC_logo.png")} style={styles.logo}/>
        <Text style={styles.text}>NTPC ID Verification</Text>
        <FormInput
        onChangeText={(userMail)=>setEmail(userMail)}
        label={email}
        placeholderText="Email" iconType="user" keyboardType="email-address"/>
        <FormInput
        onChangeText={(pass)=>setPassword(pass)}
        label={password}
        placeholderText="Password" iconType="lock" secureTextEntry={true}/>
        <FormButton buttonTitle="Sign In" onPress={()=>{login(email,password)}}/>
        <TouchableOpacity style={styles.forgotButton}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
        <SocialButton
          buttonTitle="Sign In with Facebook"
          btnType="facebook"
          color="#4867aa"
          backgroundColor="#e6eaf4"
          onPress={() => {}}
        />

        <SocialButton
          buttonTitle="Sign In with Google"
          btnType="google"
          color="#de4d41"
          backgroundColor="#f5e7ea"
          onPress={() => googleLogin()}
        />
        <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.navButtonText}>Don't have an account? Create One</Text>
        </TouchableOpacity>
      </View>
    )
  }
  else{
    return <AppLoading startAsync={FetchFont} onFinish={()=>{setfontLoaded(true)}} onError={()=>console.log('Error')}/>
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:'center',
    flex:1,
    padding: 20,
    paddingTop: 50
  },
  logo: {
    height: 350,
    width: 350,
    marginBottom:-100,
    marginTop:-100,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'KufamSemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'LatoRegular',
  },
});