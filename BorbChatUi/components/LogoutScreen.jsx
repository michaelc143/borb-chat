import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function LogoutScreen(props) {

    const logout = () => {
        props.setIsLoggedIn(false);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Are you sure you want to log out?</Text>
            <Button title="Logout" onPress={logout} />
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
});