import React, { useState } from 'react';
import {
    SafeAreaView, View, Text, TextInput, StyleSheet,
    Alert, Pressable, Image, Dimensions
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';
import Modal from 'react-native-modal';

const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resetEmail, setResetEmail] = useState('');
    const [otp, setOtp] = useState(['', '', '', '']);
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [showPassResetModal, setShowPassResetModal] = useState(false);
    const [showOtpModal, setShowOtpModal] = useState(false);

    const navigation = useNavigation();
    const otpInputs = [];

    // Validation states
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [resetEmailError, setResetEmailError] = useState('');
    const [otpError, setOtpError] = useState('');

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleLogin = () => {
        let valid = true;

        if (!email || !isValidEmail(email)) {
            setEmailError('Please enter a valid email');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password cannot be empty');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            navigation.navigate('Home');
        }
    };

    const handlePasswordReset = () => {
        if (!resetEmail || !isValidEmail(resetEmail)) {
            setResetEmailError('Enter a valid email');
            return;
        }
        setResetEmailError('');
        setShowPassResetModal(false);
        setShowOtpModal(true);
    };

    const handleOtpChange = (text, index) => {
        if (/^\d?$/.test(text)) {
            const newOtp = [...otp];
            newOtp[index] = text;
            setOtp(newOtp);
            if (text && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        }
    };

    const handleOtpVerification = () => {
        if (otp.join('').length < 4 || otp.some(d => d === '')) {
            setOtpError('Please enter the complete 4-digit OTP');
            return;
        }
        setOtpError('');
        Alert.alert("OTP Verified", "Your OTP has been successfully verified.", [
            {
                text: "OK",
                onPress: () => navigation.navigate('SetNewPasswordScreen')
            }
        ]);
    };

    const gotoRegisterPage = () => {
        navigation.navigate("Register");
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoImgTextContainer}>
                <Image source={require("../../assets/XKillZ_Logo.png")} style={{ width: 150, height: 100 }} />
                <Text style={styles.GladText}>Glad to have you back!</Text>
            </View>

            <View style={styles.loginTextFieldContainer}>
                <Text style={styles.loginAccountText}>Login to your Account</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
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

                <View style={styles.checkboxTextResetPass}>
                    <Pressable onPress={() => setIsChecked(!isChecked)} style={styles.checkboxContainer}>
                        <View style={[styles.checkbox, isChecked && styles.checked]}>
                            {isChecked && <Text style={styles.checkmark}>✓</Text>}
                        </View>
                        <Text style={styles.remeberMeText}>Remember Me</Text>
                    </Pressable>

                    <Pressable onPress={() => setShowPassResetModal(true)}>
                        <Text style={styles.resetPasswordText}>Reset Password?</Text>
                    </Pressable>
                </View>
            </View>

            <View style={styles.loginBtnContainer}>
                <Pressable style={styles.loginBtn} onPress={handleLogin}>
                    <Text style={styles.loginBtnText}>Sign In</Text>
                </Pressable>
            </View>

            <View style={styles.minusIconSignInText}>
                <Entypo name="minus" />
                <Text>Or Sign in with</Text>
                <Entypo name="minus" />
            </View>

            <View style={styles.socialIcons}>
                <View style={styles.iconBox}>
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
                <Text style={styles.accountText}>Don't have an account?</Text>
                <Pressable onPress={gotoRegisterPage}>
                    <Text style={styles.registerTextBtn}>Register</Text>
                </Pressable>
            </View>

            {/* Reset Password Modal */}
            <Modal
                isVisible={showPassResetModal}
                onBackdropPress={() => {
                    setShowPassResetModal(false);
                    setResetEmailError('');
                }}
                style={styles.modal}
                animationIn="fadeIn"
                animationOut="fadeOut"
            >
                <View style={styles.modalContent}>
                    <Text style={styles.resetPassText}>Reset Your Password</Text>
                    <Text style={{ marginBottom: "7%" }}>
                        Type your email below and we’ll send you four digits OTP to your email account to reset password.
                    </Text>
                    <TextInput
                        placeholder="Enter your email"
                        style={styles.inputModal}
                        value={resetEmail}
                        onChangeText={setResetEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    {resetEmailError ? <Text style={{ color: 'red', marginBottom: 10 }}>{resetEmailError}</Text> : null}

                    <View style={styles.cancelSendBtn}>
                        <Pressable style={[styles.btn, styles.cancelBtn]} onPress={() => setShowPassResetModal(false)}>
                            <Text style={styles.cancelBtnText}>Cancel</Text>
                        </Pressable>
                        <Pressable style={styles.btn} onPress={handlePasswordReset}>
                            <Text style={styles.sendBtnText}>Send</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

            {/* OTP Modal */}
            <Modal
                isVisible={showOtpModal}
                onBackdropPress={() => {
                    setShowOtpModal(false);
                    setOtpError('');
                }}
                style={styles.modal}
                animationIn="fadeIn"
                animationOut="fadeOut"
            >
                <View style={styles.modalContent}>
                    <Text style={styles.resetPassText}>Verify OTP</Text>
                    <Text style={{ marginBottom: "7%" }}>
                        We sent a four-digit OTP to your {resetEmail}. Please enter it below.
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
                        {otp.map((digit, index) => (
                            <TextInput
                                key={index}
                                ref={ref => otpInputs[index] = ref}
                                value={digit}
                                onChangeText={text => handleOtpChange(text, index)}
                                keyboardType="numeric"
                                maxLength={1}
                                style={styles.otpTextBox}
                            />
                        ))}
                    </View>
                    {otpError ? <Text style={{ color: 'red', marginBottom: 10 }}>{otpError}</Text> : null}

                    <View style={styles.cancelOTPBtn}>
                        <Pressable style={[styles.btn, styles.cancelBtn]} onPress={() => setShowOtpModal(false)}>
                            <Text style={styles.cancelBtnText}>Cancel</Text>
                        </Pressable>
                        <Pressable style={[styles.btn, styles.verifyOTPBtn]} onPress={handleOtpVerification}>
                            <Text style={styles.sendBtnText}>Verify OTP</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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
    },
    // Modal Styles
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,

    },

    blur: {
        position: 'absolute',
        // width: "100%",
        // height: "100%",
        width,
        height,
        backgroundColor: 'rgba(255, 255, 255, 0)', // Set a semi-transparent white background
    },

    modalContent: {
        width: '80%',
        backgroundColor: '#ffffff', // Ensure white background inside modal
        padding: 25,
        borderRadius: 20,
        elevation: 5,
    },

    resetPassText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: "#0D62EA",
        textAlign: "center"
    },

    inputModal: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 12,
        marginBottom: 20,
    },

    cancelSendBtn: {
        flexDirection: 'row',
        justifyContent: 'flex-end', // Align buttons horizontally
        gap: 10, // Spacing between buttons
    },

    btn: {
        backgroundColor: '#0D62EA',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        width: '30%', // Make the buttons have the same width
    },



    cancelBtn: {
        backgroundColor: "transparent", // Lighter background for the cancel button
        borderColor: 'rgba(0, 0, 0, 0.3)', // Border color for cancel button
        borderWidth: 1,
        opacity: 1
    },

    sendBtnText: {
        color: '#fff',
        fontWeight: '500',
    },
    cancelBtnText: {
        color: "#0D62EA",
        fontWeight: "500"
    },
    // otp
    otpTextBox: {
        borderWidth: 1,
        borderColor: '#0D62EA',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        width: 50,
        height: 50,
    },
    cancelOTPBtn: {
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 10,
    },
    verifyOTPBtn: {
        width: "35%"
    }

});
