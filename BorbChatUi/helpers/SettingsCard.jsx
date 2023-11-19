import { Pressable, StyleSheet, View, Image, Text, Switch, Dimensions } from "react-native";
import { useState } from "react";

export function SettingsCard(props) {

    const [isEnabled, setIsEnabled] = useState(true);

    const toggleSwitch = () => {
        setIsEnabled(isEnabled => !isEnabled);
    };

    return <Pressable style={{minWidth: Dimensions.get('window').width}}>
        <View style={[styles.card, props.style]}>
            <Text style={{fontWeight: "bold", alignSelf: "center", marginBottom: 5}}>{props.name}</Text>
            <Switch
                value={isEnabled}
                onValueChange={() => toggleSwitch()}
                style={{ alignSelf: "center" }}
            />
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.3, // Shadow opacity
        shadowRadius: 4, // Shadow radius
    }
})