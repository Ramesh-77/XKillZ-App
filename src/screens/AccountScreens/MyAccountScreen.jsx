import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const MyAccountScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Text style={styles.headerText}>MyAccount</Text>
                <TouchableOpacity>
                    <EvilIcons name="user" size={40} color="#fff" />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.mainContents}>

            </ScrollView>
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
        paddingStart: 20,
        paddingTop: 120,
        paddingBottom: 20,
        alignItems: "center",
    },


});
