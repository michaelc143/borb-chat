import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

function HomePage() {
    return (
        <View style={styles.container}>
            <ScrollView>
            <Image source={require('../assets/logo.png')} style={styles.image}/>
                <Text style={{fontSize: 24, marginTop: 40, textAlign: 'center', color: '#552583', fontWeight: 'bold'}}>Welcome To BorbChat!</Text>
                <Text style={{fontSize: 16, marginTop: 40, textAlign: 'center', color: '#552583'}}>Use the drawer to navigate to different chatrooms!</Text>
            </ScrollView>
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
    image: {
        width: 300,
        height: 300,
        marginTop: 40
    },
});

export default HomePage;