import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, Alert, Pressable, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const SetNewPasswordScreen = () => {
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const navigation = useNavigation()
  

    const handleLogin = () => {
        Alert.alert('Set New Password',  "New password setup successfully.",
            [
                {
                    text: "OK",
                    onPress: () => navigation.navigate('NewPasswordSetupSuccessScreen') // Replace with your screen name
                }
            ]);
    };
  



    return (
        <SafeAreaView style={styles.container}>
            {/* container for logo and text */}
            <View style={styles.logoImgTextContainer}>
                <Image source={require("../../assets/XKillZ_Logo.png")} style={{ width: 150, height: 100 }} />
                <Text style={styles.GladText}>Glad to have you back!</Text>
            </View>
            {/* Container for login input field, text */}
            <View style={styles.loginTextFieldContainer}>
                <Text style={styles.loginAccountText}>Set New Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput placeholder="Enter new password" value={newPass} onChangeText={setNewPass} secureTextEntry />
                    <FontAwesome name="eye-slash" style={styles.passwordIcon} />
                </View>
                <View style={styles.passwordContainer}>
                    <TextInput placeholder="Confirm new password" value={confirmPass} onChangeText={setConfirmPass} secureTextEntry />
                    <FontAwesome name="eye-slash" style={styles.passwordIcon} />
                </View>
                
            </View>

            {/* sign in btn */}
            <View style={styles.loginBtnContainer}>
                <Pressable style={styles.loginBtn} onPress={handleLogin}>
                    <Text style={styles.loginBtnText}>Sign In</Text>
                </Pressable>
            </View>
            
           
         

           



        </SafeAreaView>
    );
};

export default SetNewPasswordScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: "#D4EDF3"
    },
    logoImgTextContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        paddingVertical: "20%"
    },
    GladText: {
        fontSize: 25,
        color: "#0D62EA",
        fontWeight: "bold"
    },
    loginTextFieldContainer: {
        gap: 20
    },
    loginAccountText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#0D62EA"
    },
    input: {
        backgroundColor: "#D4EDF3",
        borderRadius: 10,
        elevation: 8,
        paddingLeft: "5%"
    },
    passwordContainer: {
        backgroundColor: "#D4EDF3",
        display: "flex",
        flexDirection: "row",
        elevation: 8,
        alignItems: "center",
        borderRadius: 10,
        justifyContent: "space-between",
        paddingHorizontal: "4%"
    },
    passwordIcon: {
        fontSize: 20,
        opacity: 0.5
    },
    loginBtnContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%"
    },
    loginBtn: {
        width: "100%",
        backgroundColor: "#0D62EA",
        alignItems: "center",
        paddingVertical: "3%",
        borderRadius: 10,
    },
    loginBtnText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 15
    },

});
