import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Chatroom from './Chatroom';
import HomePage from './HomePage';
import { useState, useEffect } from 'react';
import api from '../apiService';

const ChatDrawer = createDrawerNavigator();

export default function BorbChat() {

  // const [chatrooms, setChatrooms] = useState([]);
  const exampleChatrooms = ['Chatterbox', 'BorbChatCentral', 'BadgerFootball', 'BadgerBasketball', 'BadgerHockey'];

  // useEffect(() => {
  //   api.get('/chatrooms')
  //     .then((response) => setChatrooms(response.data))
  //     .catch((error) => console.error('Axios Error:', error));
  // }, []);

  return (
    <NavigationContainer>
      <ChatDrawer.Navigator>
        <ChatDrawer.Screen name='Home Page' component={HomePage} />
        {
          exampleChatrooms.map((chatroom) => {
            return <ChatDrawer.Screen key={chatroom} name={chatroom} component={Chatroom} />
          })
        }
      </ChatDrawer.Navigator>
    </NavigationContainer>
  );
}