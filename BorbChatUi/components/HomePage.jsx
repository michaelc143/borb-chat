import { StyleSheet, Text, View } from 'react-native';

function HomePage() {
    return (
        <View style={styles.container}>
            <Text>This is the home page!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default HomePage;