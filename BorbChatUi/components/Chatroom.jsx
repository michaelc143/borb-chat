import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Modal, TextInput, Button, Alert } from 'react-native';
import BorbChatMsg from '../helpers/BorbChatMsg';
import { useState, useEffect } from 'react';

function ChatroomScreen() {

    const [messages, setMessages] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');

    const exMsgs = [
        { poster: 'Michael Corbishley', content: 'Msg Content for whatever the poster is saying getting pulled from db', title:'Title goes here', postDate:'November 18th, 2023'},
        { poster: 'John Doe', content: 'Hey, how are you doing?', title: 'Casual Chat', postDate: 'November 18th, 2023' },
        { poster: 'Alice Smith', content: 'I just finished reading a great book!', title: 'Book Recommendation', postDate: 'November 18th, 2023' },
        { poster: 'Bob Johnson', content: 'Any plans for the weekend?', title: 'Weekend Plans', postDate: 'November 18th, 2023' },
        { poster: 'Emily Davis', content: 'Just got back from a fantastic vacation!', title: 'Vacation Update', postDate: 'November 18th, 2023' },
        { poster: 'Chris Wilson', content: 'Excited about the upcoming project!', title: 'Work News', postDate: 'November 18th, 2023' },
        { poster: 'Mia Rodriguez', content: 'Whats your favorite movie genre?', title: 'Movie Discussion', postDate: 'November 18th, 2023' },
        { poster: 'Daniel Brown', content: 'Happy birthday!', title: 'Birthday Wishes', postDate: 'November 18th, 2023' },
        { poster: 'Sophia Miller', content: 'Just tried a new recipe and it turned out great!', title: 'Cooking Adventures', postDate: 'November 18th, 2023' },
        { poster: 'Aiden White', content: 'Sports fan? Which team do you support?', title: 'Sports Talk', postDate: 'November 18th, 2023' },
        { poster: 'Olivia Garcia', content: 'Whats your favorite hobby?', title: 'Hobby Discussion', postDate: 'November 18th, 2023' },
    ];

    useEffect(() => {
        setMessages(exMsgs);
    }, []);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const createPost = () => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { poster: 'Example author', content: postBody, title: postTitle, postDate: 'Example Date' },
        ]);
        Alert.alert('Success', 'Your post was successful!');
        // Reset modal fields
        setPostTitle('');
        setPostBody('');
        // Close the modal
        toggleModal();
    }
    
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                {messages.map((message, index) => (
                    <BorbChatMsg
                        key={index}
                        poster={message.poster}
                        content={message.content}
                        title={message.title}
                        postDate={message.postDate}
                    />
                ))}
            </ScrollView>
            <View style={styles.postButtonContainer}>
                <Button title="Create Post" onPress={toggleModal}/>
            </View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={isModalVisible}
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Create Post</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Post Title"
                        value={postTitle}
                        onChangeText={(text) => setPostTitle(text)}
                    />
                    <TextInput
                        style={[styles.input, { height: 100 }]}
                        placeholder="Post Body"
                        value={postBody}
                        onChangeText={(text) => setPostBody(text)}
                    />
                    <View style={styles.modalButtonContainer}>
                        <Button title="Create Post" onPress={createPost} disabled={!postTitle.trim() || !postBody.trim()} />
                        <Button title="Cancel Post" onPress={toggleModal} />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.9)', // semi-transparent white background
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // semi-transparent black background
        padding: 20,
    },
    postButtonContainer: {
        padding: 10,
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 10,
        color: 'white', // text color
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: 200,
        borderRadius: 10,
        backgroundColor: 'white', // input background color
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
});

export default ChatroomScreen;