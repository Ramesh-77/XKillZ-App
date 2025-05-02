import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, Alert, Pressable, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const navigation = useNavigation()

    const handleLogin = () => {
        Alert.alert('Login', `Email: ${email}\nPassword: ${password}`);
    };
    const gotoRegisterPage = () =>{
        navigation.navigate("Register")
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* container for logo and text */}
            <View style={styles.logoImgTextContainer}>
                <Image source={require("../assets/XKillZ_Logo.png")} style={{width: 150, height: 100}} />
                <Text style={styles.GladText}>Glad to have you back!</Text>
            </View>
            {/* Container for login input field, text */}
            <View style={styles.loginTextFieldContainer}>
                <Text style={styles.loginAccountText}>Login to your Account</Text>
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
                <View style={styles.passwordContainer}>
                    <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
                    <FontAwesome name="eye-slash" style={styles.passwordIcon} />
                </View>
                {/* view for checkbox and reset password */}
                <View style={styles.checkboxTextResetPass}>
                    <Pressable onPress={() => setIsChecked(!isChecked)} style={styles.checkboxContainer}>
                        <View style={[styles.checkbox, isChecked && styles.checked]}>
                            {isChecked && <Text style={styles.checkmark}>✓</Text>}
                        </View>
                        <Text style={styles.remeberMeText}>Remember Me</Text>
                    </Pressable>
                    {/* reset btn */}
                    <Pressable>
                        <Text style={styles.resetPasswordText}>Reset Password?</Text>
                    </Pressable>
                </View>
            </View>

            {/* sign in btn */}
            <View style={styles.loginBtnContainer}>
                <Pressable style={styles.loginBtn} onPress={handleLogin}>
                    <Text style={styles.loginBtnText}>Sign In</Text>
                </Pressable>
            </View>
            {/* sign in with text */}
            <View style={styles.minusIconSignInText}>
                <Entypo name="minus" />
                <Text>Or Sign in with</Text>
                <Entypo name="minus" />
            </View>
            {/* social icons */}
            <View style={styles.socialIcons}>
                <View style={styles.iconBox}>
                    {/* <FontAwesome name="google" size={25} color=""/> */}
                    <Image source={require("../assets/google.png")} style={{height: 20, width: 20}} />
                </View>
                <View style={styles.iconBox}>
                    <FontAwesome name="facebook" size={25} color="#0D62EA"/>
                </View>
                <View style={styles.iconBox}>
                    <FontAwesome name="twitter" size={25} color ="#55ACEE"/>
                </View>
            </View>

            <View style={styles.registerAccountText}>
                <Text style={styles.accountText}>Don't have an account?</Text>
                <Pressable onPress={gotoRegisterPage}>
                    <Text style={styles.registerTextBtn}>Register</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );
};

export default LoginScreen;
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
    checkboxTextResetPass: { 
        flexDirection: "row", 
        justifyContent: "space-between", 
        alignItems: "center"
     },
    // for checkbox
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center', marginVertical: 12
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#555',
        opacity: 0.5,
        borderRadius: 5,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checked: {
        backgroundColor: '#007AFF',
        borderColor: '#007AFF',
        opacity: 1,
    },
    checkmark: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    remeberMeText: { 
        fontSize: 16, 
        opacity: 0.5,
    },
    resetPasswordText: {
        fontSize: 16, 
        fontWeight: "bold", 
        color: "#F30C2E"
    },
    loginBtnContainer: { 
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: "5%"
     },
    loginBtn: { width: "100%", 
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
    minusIconSignInText: { 
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center", 
        gap: 10, 
        marginTop: "10%", 
        opacity: 0.5,
        
     },
    socialIcons: {
        flexDirection: 'row', 
        gap: 20, 
        justifyContent: "center", 
        alignItems: "center", 
        marginTop: "5%"
    },
    iconBox: {
        height: 60, 
        width: 80, 
        elevation: 10, 
        backgroundColor: "#D4EDF3", 
        alignItems: "center", 
        justifyContent: "center", 
        borderRadius: 10
    },
    registerAccountText: {
        flexDirection: "row",
        gap: 5, 
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%"
    },
    accountText: {
        opacity: 0.5,
        fontSize: 17,
    },
    registerTextBtn: {
        color: "#0D62EA", 
        fontWeight: "bold",
        fontSize: 17
    }


});
