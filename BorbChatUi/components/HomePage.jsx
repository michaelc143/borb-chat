import { StyleSheet, Text, View } from 'react-native';

function HomePage() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 24, marginTop: 40}}>Welcome To BorbChat!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
});

export default HomePage;