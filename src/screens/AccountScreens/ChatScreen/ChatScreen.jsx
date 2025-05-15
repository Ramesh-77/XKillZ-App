import React, { useState, useEffect, useRef } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Pressable, TextInput, ScrollView, Image, KeyboardAvoidingView, Keyboard, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const ChatScreen = ({ route }) => {
    const { selectedUser } = route.params;
    const navigation = useNavigation();
    const scrollViewRef = useRef();

    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, text: "Hey, how's it going?", user: selectedUser?.name, avatar: selectedUser?.image },
        { id: 2, text: "I'm good, thanks for asking!", user: 'You', avatar: `${require('../../../assets/coder.jpg')}` },

        {
            id: 3,
            text: (
                <View>
                    <Text style={{ fontSize: 10, textAlign: "center" }}>
                        Let's find a mutually convenient time to schedule our class and make the most of our shared skills!
                    </Text>
                    <TouchableOpacity style={{ backgroundColor: "#09B4E4", flexDirection: "row", alignItems: 'center', justifyContent: "center", padding: 10, borderRadius: 10, marginVertical: 5 }} onPress={() => alert("Button clicked!")}>
                        <Text style={{ color: '#fff', letterSpacing: 1 }}>Tap To Schedule</Text>
                    </TouchableOpacity>
                </View>
            ),
            user: 'You',
            avatar: `${require('../../../assets/coder.jpg')}`
        },
        {
            id: 4,
            text: (
                <View>
                    <Text style={{ fontSize: 10, textAlign: "center" }}>
                        Let's find a mutually convenient time to schedule our class and make the most of our shared skills!
                    </Text>
                    <TouchableOpacity style={{ backgroundColor: "#18A800", flexDirection: "row", alignItems: 'center', justifyContent: "center", padding: 10, borderRadius: 10, marginVertical: 5 }} onPress={() => alert("Button clicked!")}>
                        <Text style={{ color: '#fff', letterSpacing: 1 }}>Tap To Schedule</Text>
                    </TouchableOpacity>
                </View>
            ),
            user: selectedUser?.name,
            avatar: selectedUser?.image
        },




    ]);
    const [keyboardVisible, setKeyboardVisible] = useState(false);

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            const newMessageData = {
                id: messages.length + 1,
                text: newMessage,
                user: 'You',
                avatar: `${require('../../../assets/coder.jpg')}`
            };
            setMessages([...messages, newMessageData]);
            setNewMessage('');
        }
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardVisible(false);
        });

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    useEffect(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
    }, [messages]);

    const text1 = 'For detailed timetable information, please visit the '
    const text2 = 'section in the menu on Account Page. There you will find comprehensive details of all scheduled classes and their respective timings. Explore it now to plan your classes effectively.'
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 15 }}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-outline" size={30} color="#ffffff" />
                    </Pressable>
                    <Text style={styles.headerText}>Schedule Class</Text>
                </View>
                <TouchableOpacity>
                    <EvilIcons name="user" size={40} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.mainContents}>
                <View style={styles.chatBoxHeader}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                        <Image source={selectedUser?.image} style={{ width: 50, height: 50, borderRadius: 25 }} />
                        <View>
                            <Text>{selectedUser?.name}</Text>
                            <Text style={{ color: "#09B4E4", fontWeight: "500" }}>Online</Text>
                        </View>
                    </View>
                    <Ionicons name="ellipsis-horizontal-sharp" size={30} color="#09B4E4" />
                </View>

                {/* <ScrollView
                    ref={scrollViewRef}
                    contentContainerStyle={styles.chatContainer}
                    showsVerticalScrollIndicator={false}
                >
                    {messages.map((message) => (
                        <View
                            key={message.id}
                            style={[
                                styles.messageRow,
                                message.user === 'You' ? styles.messageRight : styles.messageLeft
                            ]}
                        >
                            {message.user !== 'You' && (
                                <Image source={message?.avatar} style={styles.avatar} />
                            )}

                            <View style={[
                                styles.messageBubble,
                                message.user === 'You'
                            ]}>
                                <Text style={message.user === 'You' ? styles.userMessage : styles.receiverMessage}>
                                    {message.text}
                                </Text>
                            </View>

                            {message.user === 'You' && (
                                <Image source={message?.avatar} style={styles.avatar} />
                            )}
                        </View>
                    ))}
                </ScrollView> */}
                <ScrollView
                    ref={scrollViewRef}
                    contentContainerStyle={styles.chatContainer}
                    showsVerticalScrollIndicator={false}
                >
                    {messages.map((message) => {
                        const isCurrentUser = message.user === 'You';
                        const isComponent = typeof message.text !== 'string';

                        return (
                            <View
                                key={message.id}
                                style={[
                                    styles.messageRow,
                                    isCurrentUser ? styles.messageRight : styles.messageLeft
                                ]}
                            >
                                {!isCurrentUser && (
                                    <Image source={message.avatar} style={styles.avatar} />
                                )}

                                <View
                                    style={[
                                        styles.messageBubble,
                                        isComponent && { backgroundColor: '#fff', width: "55%" } // custom background for special message
                                    ]}
                                >
                                    {isComponent ? (
                                        message.text
                                    ) : (
                                        <Text style={isCurrentUser ? styles.userMessage : styles.receiverMessage}>
                                            {message.text}
                                        </Text>
                                    )}
                                </View>

                                {isCurrentUser && (
                                    <Image source={message.avatar} style={styles.avatar} />
                                )}
                            </View>
                        );
                    })}
                    <View style={{backgroundColor: "#AFE8F6", padding: 10}}>
                        <Text>
                            {text1} <Text style={{ fontWeight: 'bold' }}>schedule</Text> {text2}
                        </Text>
                    </View>
                </ScrollView>


            </View>

            <KeyboardAvoidingView
                style={[styles.inputWrapper, keyboardVisible && { marginBottom: Platform.OS === 'ios' ? 250 : 260 }]}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
            >
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type a message..."
                        value={newMessage}
                        onChangeText={setNewMessage}
                        multiline
                        numberOfLines={5}
                        textAlignVertical='top'
                    />
                    <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={styles.plusEmojiFileContainer}>
                            <Pressable><Feather name="plus-square" size={20} color="#B1B1B1" /></Pressable>
                            <Pressable><Entypo name="emoji-happy" size={20} color="#B1B1B1" /></Pressable>
                            <Pressable><Entypo name="attachment" size={20} color="#B1B1B1" /></Pressable>
                        </View>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Pressable style={styles.voiceIconContainer}>
                                <MaterialIcons name="keyboard-voice" size={20} color='#000' />
                            </Pressable>
                            <Pressable style={{ backgroundColor: "#09B4E4", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }} onPress={handleSendMessage}>
                                <Text style={{ fontWeight: "bold" }}>Send Now</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#D4EDF3',
    },
    header: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#09B4E4',
        padding: 20,
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        marginVertical: "5%",
    },
    headerText: {
        fontSize: 25,
        fontWeight: '600',
        color: "#ffffff",
    },
    mainContents: {
        paddingTop: 93,
        marginVertical: 20,
        paddingBottom: 100, // Added padding to avoid overlap with the input field
        width: "100%",
    },
    chatBoxHeader: {
        backgroundColor: "#ffffff",
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 10,
    },
    chatContainer: {
        paddingTop: 10,
        paddingBottom: 80, // Added padding to avoid overlap with the input field
        paddingHorizontal: 20,
    },
    messageContainer: {
        marginBottom: 10,
        // padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        maxWidth: '70%',
    },
    userMessage: {
        fontSize: 16,
        color: '#fff',
        backgroundColor: '#09B4E4',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-end',
    },
    receiverMessage: {
        fontSize: 16,
        color: '#000',
        backgroundColor: '#AFE8F6',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-start',
    },
    inputContainer: {
        position: 'absolute', // Fixing the input container at the bottom
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        zIndex: 2,
    },
    inputWrapper: {
        width: '100%',
        position: 'absolute', // Fixing the input container at the bottom
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
    },
    input: {
        width: '100%',
        paddingVertical: 10,
        fontSize: 16,
        marginVertical: 5,
    },
    plusEmojiFileContainer: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center",
        paddingTop: 10,
    },
    voiceIconContainer: {
        width: 30,
        height: 30,
        backgroundColor: '#09B4E4',
        borderRadius: 15, // Half of width/height for a circle
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    messageLeft: {
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
    },

    messageRight: {
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        // flexDirection: 'row-reverse', // Avatar after message for 'You'
    },

    avatar: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        marginHorizontal: 5,
    },

    messageBubble: {
        borderRadius: 10,
        padding: 10,
        maxWidth: '75%',
    },



});

