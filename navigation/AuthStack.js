import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../app/components/LoginScreen';
import OnBoardingScreen from '../app/components/OnBoardingScreen';
import Signup_Screen from '../app/components/Signup_Screen';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React,{useState,useEffect} from 'react';
import { AsyncStorage } from 'react-native';

const Stack=createStackNavigator();
export default function AuthStack() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
    
    GoogleSignin.configure({
      webClientId: '314406787233-d3m320bl4bpn0r14n78o6aqkk4lvu7bn.apps.googleusercontent.com',
    });

  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Onboarding" component={OnBoardingScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Signup" component={Signup_Screen}/>
      </Stack.Navigator>
  )
}
