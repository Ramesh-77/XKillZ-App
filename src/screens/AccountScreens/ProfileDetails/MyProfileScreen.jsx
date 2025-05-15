import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Pressable, Image } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


const MyProfileScreen = () => {
    const navigation = useNavigation();
    const aboutMeDescription = `I am a highly skilled and passionate Java Developer with over 8 years of experience in the software industry. With a strong background in backend development and application architecture, I have successfully built scalable and efficient systems across various domains. My ability to write clean, maintainable code and collaborate effectively with cross-functional teams has earned me a solid reputation.`
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 15 }}>
                    <Pressable style={styles.iconContainer} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-outline" size={30} color="#ffffff" />
                    </Pressable>
                    <Text style={styles.headerText}>My Profile</Text>
                </View>
                <TouchableOpacity>
                    <EvilIcons name="user" size={40} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.mainContents}>
                <View style={{ alignItems: "center", justifyContent: "center", gap: 10 }}>
                    <Image source={require('../../../assets/coder.jpg')} style={{ height: 120, width: 120, borderRadius: 60 }} />
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>Benjamin Engel</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>Java Developer (GOOGLE)</Text>
                </View>
                {/* for horzontal line */}
                <View
                    style={{
                        borderBottomColor: '#000000',
                        borderBottomWidth: 1,
                        marginVertical: 10,
                        width: '100%',
                    }}
                />
                {/* about me section */}
                <View>
                    <View style={{ paddingVertical: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>About Me</Text>
                        <Pressable style={{ position: "absolute", right: 0 }}>
                            <Feather name="edit" size={25} color="#09B4E4" />
                        </Pressable>
                    </View>
                    <Text>{aboutMeDescription}</Text>
                </View>
                {/* my skills section */}
                <View>
                    <View style={{ paddingVertical: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>My Skills</Text>
                        <Pressable style={{ position: "absolute", right: 0 }}>
                            <Ionicons name="add-circle-outline" size={30} color="#09B4E4" />
                        </Pressable>
                    </View>
                    <View style={{ flexDirection: "column", gap: 10, paddingVertical: 10 }}>
                        <Text>Java</Text>
                        <Text>UI/UX Design</Text>
                        <Text>Database Administrator</Text>
                        <Text>Data Science</Text>
                        <Text>AI/ML</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default MyProfileScreen;

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
        // paddingStart: 20,
        paddingHorizontal: 30,
        paddingTop: 120,
        marginVertical: 20,
        // alignItems: "center",
    },


});
