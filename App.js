import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import PlayScreen from './Screens/PlayScreen';
import Selectbot from './Screens/Selectbot';
import ContactList from './Screens/ContactList';
import Addfriend from './Screens/Addfriend';
import Game from './Screens/Game';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="ContactList" component={ContactList} />
        <Stack.Screen name="Addfriend" component={Addfriend} />
        <Stack.Screen name="Selectbot" component={Selectbot} />
        <Stack.Screen name="Play Screen" component={PlayScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
