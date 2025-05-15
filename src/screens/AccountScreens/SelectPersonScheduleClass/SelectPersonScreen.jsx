import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Pressable, ScrollView, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const SelectPersonScreen = () => {
    const navigation = useNavigation();
    const [selectedId, setSelectedId] = useState(null);

    const users = [
        { id: 1, name: 'Benjamin Engel', message: "We're thrilled to have you join...", image: `${require('../../../assets/graphic_designer.png')}` },
        { id: 2, name: 'Alice Smith', message: "Looking forward to your class...", image: `${require('../../../assets/coder.jpg')}` },
        { id: 3, name: 'David Johnson', message: "Great to see you here...", image: `${require('../../../assets/programmer.jpg')}` },
        { id: 4, name: 'Sarah Lee', message: "Ready to learn and share...", image: `${require('../../../assets/java_developer.webp')}` },
    ];

    const toggleSelection = (id) => {
        // Only set the id if it's not already selected
        setSelectedId(prevId => prevId === id ? null : id);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 15 }}>
                    <Pressable style={styles.iconContainer} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-outline" size={30} color="#ffffff" />
                    </Pressable>
                    <Text style={styles.headerText}>Schedule Class</Text>
                </View>
                <TouchableOpacity>
                    <EvilIcons name="user" size={40} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.mainContents}>
                <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 10, gap: 20, paddingHorizontal: 20 }}>
                    <MaterialIcons name="select-all" size={30} color="#000" />
                    <Text style={{ fontSize: 30, fontWeight: "500" }}>Select</Text>
                </View>

                <View style={styles.line}></View>

                <View>
                    {/* mapping the user details */}
                    {users.map((user) => (
                        <React.Fragment key={user.id}>
                            <Pressable style={styles.userDataContainer} onPress={() => toggleSelection(user.id)}>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                                    <Image source={user?.image} style={{ height: 50, width: 50, borderRadius: 25 }} />
                                    <View>
                                        <Text style={{ fontWeight: "bold", fontSize: 18 }}>{user.name}</Text>
                                        <Text style={{ fontSize: 15, opacity: 0.5 }}>{user.message}</Text>
                                    </View>
                                </View>
                                <Fontisto
                                    name={selectedId === user?.id ? 'radio-btn-active' : 'radio-btn-passive'}
                                    size={20}
                                    color="#09B4E4"
                                />
                            </Pressable>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20 }}>
                                <View style={[styles.line, { width: "100%", backgroundColor: "#09B4E4" }]}></View>
                            </View>
                        </React.Fragment>
                    ))}
                </View>

                <View style={{ alignItems: "center", width: '100%', marginTop: 20, borderRadius: 10 }}>
                    <Pressable
                        style={{ width: "90%", backgroundColor: "#09B4E4", paddingVertical: 10, borderRadius: 10, alignItems: "center", justifyContent: "center", marginTop: 20 }}
                        onPress={() => {
                            if (selectedId !== null) {  // Ensure there is a selection
                                const user = users.find(u => u.id === selectedId);  // assuming one selected
                                navigation.navigate('ChatScreen', { selectedUser: user });
                            } else {
                                Alert.alert(
                                    "No User Selected",               // Title
                                    "Please select a user to start the chat.", // Message
                                    [{ text: "OK", onPress: () => console.log("Alert closed") }]
                                  );
                            }
                        }}
                    >
                        <Text style={{ color: "#ffffff", fontWeight: "500", fontSize: 25 }}>Send</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SelectPersonScreen;

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
        paddingTop: 120,
        marginVertical: 20,
        paddingBottom: 50,
        width: "100%",
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#000',
        marginVertical: 10,
    },
    userDataContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginBottom: 10,
        paddingVertical: 10,
    }
});
