import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatroomScreen from './Chatroom';
import HomePage from './HomePage';
import { useState } from 'react';
import LoginScreen from './LoginScreen';
import LogoutScreen from './LogoutScreen';
// import api from '../apiService';

const ChatDrawer = createDrawerNavigator();

export default function BorbChat() {

  // const [chatrooms, setChatrooms] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const exampleChatrooms = ['Chatterbox', 'BorbChatCentral', 'BadgerFootball', 'BadgerBasketball', 'BadgerHockey'];

  // useEffect(() => {
  //   api.get('/chatrooms')
  //     .then((response) => setChatrooms(response.data))
  //     .catch((error) => console.error('Axios Error:', error));
  // }, []);

  if(isLoggedIn) {
    return (
      <NavigationContainer>
        <ChatDrawer.Navigator
          initialRouteName='Home Page'
          screenOptions={{
            drawerActiveTintColor: 'purple',
          }}
        >
          <ChatDrawer.Screen name='Home Page' component={HomePage} />
          {
            exampleChatrooms.map((chatroom) => {
              return <ChatDrawer.Screen key={chatroom} name={chatroom} component={ChatroomScreen} />
            })
          }
        <ChatDrawer.Screen name='Logout'> 
          {(props) => (
            <LogoutScreen {...props} setIsLoggedIn={setIsLoggedIn} />
          )}
        </ChatDrawer.Screen>
        </ChatDrawer.Navigator>
      </NavigationContainer>
    );
  }
  else {
    return (
      <LoginScreen isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    );
  }
}