import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const MyAccountScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Text style={styles.headerText}>MyAccount</Text>
                <TouchableOpacity>
                    <EvilIcons name="user" size={40} color="#fff" />
                </TouchableOpacity>
            </View>
            <View style={styles.mainContents}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    {/* swaps btn */}
                    <LinearGradient
                        colors={['green', 'black']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ borderRadius: 10 }}
                    >
                        <Pressable
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                borderRadius: 10,
                            }}
                            onPress={() => console.log('Swap button pressed')}
                        >
                            <Text style={{ fontSize: 25, fontWeight: "500", color: "#ffffff" }}>Swaps: </Text>
                            <Text style={{ fontSize: 25, fontWeight: "500", color: "#ffffff" }}>10</Text>
                        </Pressable>
                    </LinearGradient>
                    {/* likes btn */}
                    <LinearGradient
                        colors={['#ccc', '#000']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={{ borderRadius: 10 }}
                    >
                        <Pressable
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                paddingVertical: 10,
                                paddingHorizontal: 20,
                                borderRadius: 10,
                            }}
                            onPress={() => console.log('Swap button pressed')}
                        >
                            <Text style={{ fontSize: 25, fontWeight: "500", color: "#ffffff" }}>Likes: </Text>
                            <Text style={{ fontSize: 25, fontWeight: "500", color: "#ffffff" }}>15</Text>
                        </Pressable>
                    </LinearGradient>
                </View>
                {/* subscribe btn */}
                <LinearGradient
                    colors={['#09B4E4', '#ababab', '#09B4E4']} // Blue → White → Blue
                    locations={[0, 0.5, 1]}                    // White appears at the center
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{ borderRadius: 10, marginTop: 20 }}
                >
                    <Pressable
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            paddingVertical: 20,
                            paddingHorizontal: 20,
                            borderRadius: 10,
                        }}
                        onPress={() => console.log('Swap button pressed')}
                    >
                        <Text style={{ fontSize: 25, fontWeight: "500", color: "#ffffff" }}>
                            Subscribe for all features
                        </Text>
                    </Pressable>
                </LinearGradient>
                {/* personal details */}
                <View style={styles.btnContainer}>
                    <View style={styles.iconBtnBox}>
                        <AntDesign name="user" size={20} color="#09B4E4" style={{marginEnd: 10}} />
                        <Pressable onPress={() => navigation.navigate("MyProfile")}>
                            <Text  style={styles.btn}>Personal Details</Text>
                        </Pressable>
                    </View>
                </View>
                {/* schedule classess */}
                <View style={styles.btnContainer}>
                    <View style={styles.iconBtnBox}>
                        <AntDesign name="clockcircleo" size={20} color="#09B4E4" style={{marginEnd: 10}}/>
                        <Pressable onPress={() => navigation.navigate("ClassScheduleScreen")}>
                            <Text  style={styles.btn}>Schedule Classes</Text>
                        </Pressable>
                    </View>
                </View>
                {/* Account settings */}
                <View style={styles.btnContainer}>
                    <View style={styles.iconBtnBox}>
                        <AntDesign name="setting" size={20} color="#09B4E4" style={{marginEnd: 10}} />
                        <Pressable>
                            <Text  style={styles.btn}>Account Settings</Text>
                        </Pressable>
                    </View>
                </View>
                {/* Refer a friend */}
                <View style={styles.btnContainer}>
                    <View style={styles.iconBtnBox}>
                        <AntDesign name="adduser" size={20} color="#09B4E4" style={{marginEnd: 10}} />
                        <Pressable>
                            <Text  style={styles.btn}>Refer a Friend</Text>
                        </Pressable>
                    </View>
                </View>
                {/* help */}
                <View style={styles.btnContainer}>
                    <View style={styles.iconBtnBox}>
                        <Feather name="help-circle" size={20} color="#09B4E4" style={{marginEnd: 10}} />
                        <Pressable>
                            <Text  style={styles.btn}>Help</Text>
                        </Pressable>
                    </View>
                </View>
                {/* sign out */}
                <View style={styles.btnContainer}>
                    <View style={styles.iconBtnBox}>
                        <AntDesign name="logout" size={20} color="#09B4E4" style={{marginEnd: 10}} />
                        <Pressable onPress={()=>navigation.navigate('Login')}>
                            <Text  style={styles.btn}>Sign Out</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default MyAccountScreen;

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
    btnContainer: { 
        marginTop: 20, 
        borderRadius: 10, 
        paddingHorizontal: 20, 
        paddingVertical: 10, 
        borderWidth: 2, 
        borderColor: "#09B4E4", 
    },
    iconBtnBox: { 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "flex-start", 
        gap: 10 
    },
    btn: { 
        color: "#09B4E4", 
        fontSize: 20, 
        fontWeight: "bold"
    }


});
