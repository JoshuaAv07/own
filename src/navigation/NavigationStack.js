import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CharactersScreen from '../screens/CharactersScreen';
import CharacterDetails from '../screens/CharacterDetails';
import SplashScreen from '../screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function NavigationStack(){
    return(
        <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen name='Splash' component={SplashScreen}/>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Character' component={CharactersScreen}/>
            <Stack.Screen name="CharacterDetails" component= {CharacterDetails}/>
            <Stack.Screen name='Settings' component={SettingsScreen}/>
        </Stack.Navigator>
    );
}
