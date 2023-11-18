import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BorbChat from './components/BorbChat';

export default function App() {
  return (
    <>
      <BorbChat />
      <StatusBar style="auto" />
    </>
  );
}
