import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Chatroom from './Chatroom';
import HomePage from './HomePage';
import { useState, useEffect } from 'react';

const ChatDrawer = createDrawerNavigator();

export default function BorbChat() {

  const [chatrooms, setChatrooms] = useState([]);

  useEffect(() => {
    fetch('/api/chatrooms').then(res => res.json).then(data => setChatrooms(data));
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