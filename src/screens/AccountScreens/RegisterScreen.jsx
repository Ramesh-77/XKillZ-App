import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, Alert, Pressable, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';



const RegisterScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const navigation = useNavigation()
    // validation state
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');



    const handleRegister = () => {
        let valid = true;

        if (!name.trim()) {
            setNameError('Name is required');
            valid = false;
        } else {
            setNameError('');
        }

        if (!email || !isValidEmail(email)) {
            setEmailError('Enter a valid email');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!password || password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            Alert.alert('Register', `You have successfully created account with XKillZ platform. Please proceed further.`, [
                {
                    text: "OK",
                    onPress: () => navigation.navigate('ProfileDetailsPartOne')
                }
            ]);
        }
    };
    const gotoLoginPage = () => {
        navigation.navigate("Login")
    }
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    return (
        <SafeAreaView style={styles.container}>
            {/* container for logo and text */}
            <View style={styles.logoImgTextContainer}>
                <Image source={require("../../assets/XKillZ_Logo.png")} style={{ width: 150, height: 100 }} />
            </View>
            {/* Container for login input field, text */}
            <View style={styles.loginTextFieldContainer}>
                <Text style={styles.loginAccountText}>Create your Account</Text>
                <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
                {nameError ? <Text style={{ color: 'red' }}>{nameError}</Text> : null}
                <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
                {emailError ? <Text style={{ color: 'red' }}>{emailError}</Text> : null}
                <View style={styles.passwordContainer}>
                    <TextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry={!showPassword}
                        style={{ flex: 1 }}
                    />
                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                        <FontAwesome
                            name={showPassword ? "eye" : "eye-slash"}
                            style={styles.passwordIcon}
                        />
                    </Pressable>
                </View>
                {passwordError ? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}
            </View>

            {/* sign in btn */}
            <View style={styles.loginBtnContainer}>
                <Pressable style={styles.loginBtn} onPress={handleRegister}>
                    <Text style={styles.loginBtnText}>Sign Up</Text>
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
                    <Image source={require("../../assets/google.png")} style={{ height: 20, width: 20 }} />
                </View>
                <View style={styles.iconBox}>
                    <FontAwesome name="facebook" size={25} color="#0D62EA" />
                </View>
                <View style={styles.iconBox}>
                    <FontAwesome name="twitter" size={25} color="#55ACEE" />
                </View>
            </View>
            <View style={styles.registerAccountText}>
                <Text style={styles.accountText}>Already have an account?</Text>
                <Pressable onPress={gotoLoginPage}>
                    <Text style={styles.registerTextBtn}>Login</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default RegisterScreen;
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
