import BorbCard from "./BorbCard";
import { Pressable, StyleSheet, View, Text } from 'react-native';

function BorbChatMsg (props) {
    return(
        <BorbCard style={{ marginTop: 16, padding: 8, marginLeft: 8, marginRight: 8 }}>
            <Text style={{fontSize: 28, fontWeight: 600, textAlign: "center"}}>{props.title}</Text>
            <Text style={{fontSize: 16, marginTop: 5, marginBottom: 5, textAlign: "center",}}>by {props.poster} | Posted {props.postDate}</Text>
            <Text style={{textAlign: "center", margin: 5}}>{props.content}</Text>
        </BorbCard>
    );
}

export default BorbChatMsg;