import { Pressable, StyleSheet, View, Dimensions } from 'react-native';

export default function BorbCard(props) {
    return <Pressable onPress={props.onPress} onLongPress={props.onLongPress}>
        <View style={[styles.card, props.style]}>
            {props.children}
        </View>
    </Pressable>
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        padding: 16,
        elevation: 5,
        minWidth: windowWidth - 20,
        borderRadius: 10,
        backgroundColor: 'white'
    }
})