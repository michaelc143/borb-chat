import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatroomScreen from './Chatroom';
import HomePage from './HomePage';
import { useState } from 'react';
import LoginScreen from './LoginScreen';
import LogoutScreen from './LogoutScreen';
import SettingsScreen from './SettingsScreen';
// import api from '../apiService';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const ChatTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomePage} options={{headerShown: false}} />
    <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: false}} />
  </Tab.Navigator>
);

export default function BorbChat() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const exampleChatrooms = ['Chatterbox', 'BorbChatCentral', 'BadgerFootball', 'BadgerBasketball', 'BadgerHockey'];

  if (isLoggedIn) {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home Page"
          screenOptions={{
            drawerActiveTintColor: 'purple',
          }}
        >
          <Drawer.Screen name="Home Page" component={ChatTabs} />
          {exampleChatrooms.map((chatroom) => (
            <Drawer.Screen key={chatroom} name={chatroom} component={ChatroomScreen} />
          ))}
          <Drawer.Screen name="Logout">
            {(props) => <LogoutScreen {...props} setIsLoggedIn={setIsLoggedIn} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  else {
    return (
      <LoginScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    );
  }
}