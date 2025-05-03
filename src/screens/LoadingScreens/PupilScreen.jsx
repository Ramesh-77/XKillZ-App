import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, Image, Pressable, Alert} from 'react-native'
import Feather from "react-native-vector-icons/Feather"

const PupilScreen = () => {
    const navigation = useNavigation()
    const handleNext = ()=>{
        navigation.navigate("Guide")
    }
    const handleSkip = ()=>{
        navigation.navigate("Login")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Pressable style={styles.skipBtn} onPress={handleSkip}>
                <Text style={styles.skipText}>Skip</Text>
            </Pressable>
            <View style={styles.logoContainer}>
                <Image source={require("../../assets/pupil.png")} style={styles.imageContainer} />
            </View>
            <View style={styles.pupilTextContentContainer}>
                <Text style={styles.pupil}>Pupils</Text>
                <Text style={styles.pupilTextContent}>Master new skills with every  xchange & unlock your potential today!</Text>
            </View>
            <View style={styles.iconContainer}>
                <Pressable onPress={handleNext}>
                <Feather name="arrow-right-circle"  size={50} color="#0D62EA"/>
                </Pressable>
                
            </View>
        </SafeAreaView>
    )
}

export default PupilScreen
const styles = StyleSheet.create({
    container: {
        position: "relative",
        flex: 1,
        padding: 30,
        backgroundColor: "#D4EDF3"
    },
    skipBtn: {
        marginStart: "auto",
        marginTop: "10%"
    },
    skipText: {
        fontSize: 25,
        color: "#0D62EA",
        fontWeight: "bold"
    },
    logoContainer: {
        alignItems: "center"
    },
    imageContainer: {
        height: 200,
        width: 200,
        marginTop: "40%"
    },
    pupilTextContentContainer: {marginTop: "20%", gap: 10},
    pupil: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 30
    },
    pupilTextContent: {
        textAlign: "center",
        fontSize: 15
    },
    // iconContainer: {
    //     position: "absolute", bottom: 50, right: 30
    // }
    
    iconContainer: {
        // position: "absolute", bottom: 50, width:"100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center",
        // backgroundColor: "red"
        // backgroundColor: "red",
        flexDirection: "row", justifyContent: "flex-end",
        marginTop: "50%"
    }

})