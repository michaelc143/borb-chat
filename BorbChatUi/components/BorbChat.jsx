import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Chatroom from './Chatroom';
import HomePage from './HomePage';
import { useState, useEffect } from 'react';
import api from '../apiService';

const ChatDrawer = createDrawerNavigator();

export default function BorbChat() {

  const [chatrooms, setChatrooms] = useState([]);

  useEffect(() => {
    api.get('/chatrooms')
      .then((response) => setChatrooms(response.data))
      .catch((error) => console.error('Axios Error:', error));
  }, []);

  return (
    <NavigationContainer>
      <ChatDrawer.Navigator>
        <ChatDrawer.Screen name='Home Page' component={HomePage} />
        <ChatDrawer.Screen name='Chatroom' component={Chatroom} />
      </ChatDrawer.Navigator>
    </NavigationContainer>
  );
}