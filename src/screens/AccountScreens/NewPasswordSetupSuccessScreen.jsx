import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const NewPasswordSetupSuccessScreen = () => {
    const navigation = useNavigation()
  

    const handleSuccess = () => {
        navigation.navigate('Login')
    };
  



    return (
        <SafeAreaView style={styles.container}>
            {/* container for logo and text */}
            <View style={styles.logoImgTextContainer}>
                <AntDesign name="checkcircleo" color="#29AA06" size={90}/>
                <Text style={styles.GladText}>Success</Text>
            </View>
            {/* Container for login input field, text */}
            <View style={styles.loginTextFieldContainer}>
                <Text style={styles.loginAccountText}>Your password has been successfully reset.</Text>
            </View>
            <Text style={{opacity: 0.5, marginVertical: "2%"}}>Ready to Learn, Teach and Grow Together?</Text>

            {/* sign in btn */}
            <View style={styles.loginBtnContainer}>
                <Pressable style={styles.loginBtn} onPress={handleSuccess}>
                    <Text style={styles.loginBtnText}>Start your journey</Text>
                </Pressable>
            </View>
            
           
         

           



        </SafeAreaView>
    );
};

export default NewPasswordSetupSuccessScreen;
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
        gap: 20, 
        marginBottom: "3%"
    },
    loginAccountText: {
        fontSize: 25,
        fontWeight: "bold",
        // color: "#0D62EA"
    },
 
    
    loginBtnContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%"
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
