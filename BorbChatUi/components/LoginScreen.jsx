import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function LoginScreen(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const login = () => {
      // Add your authentication logic here
      // For simplicity, let's assume the username and password are correct
      // In a real application, you would typically make an API call to verify credentials
      if (username === "username" && password === "password") {
        props.setIsLoggedIn(true);
      }
      else {
        Alert.alert('Login failed', 'Either username or password is incorrect');
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to BorbChat!</Text>
  
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
  
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
  
        <Button title="Login" onPress={login} />
  
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
  },
  inputContainer: {
    marginTop: 20,
    width: '80%',
  },
  label: {
    textAlign: "center",
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 40,
    paddingLeft: 10,
    marginTop: 5,
  },
});
