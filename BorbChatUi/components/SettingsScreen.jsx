import React from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import { SettingsCard } from "../helpers/SettingsCard";

export default function SettingsScreen(props) { 

    const names = ["Example setting 1", "Example setting 2", "Example setting 3", "Example setting 4", "Example setting 5"]

    return(
        <View style={{flex: 1, marginTop: 15}}>
            <ScrollView>
                {
                    names.map((name, index) => {
                        return <SettingsCard name={name} key={index}/>
                    })
                }
            </ScrollView>
        </View>
    );
}