import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet, ActivityIndicator, View, Text, Image } from 'react-native'

const InitialLoadingScreen = ({navigation}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
          navigation.replace('Pupil'); // replace to avoid going back to loader
        }, 3000); // 5 seconds
    
        return () => clearTimeout(timer);
      }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/XKillZ_Logo.png")} style={styles.imageContainer}/>
      </View>
      <View style={styles.loaderNText}>
      <ActivityIndicator size="large" color="#0D62EA" />
      <Text style={styles.loaderText}>Unlock your full potential and discover  endless possibilitiies with XKillZ</Text>
      </View>
    </SafeAreaView>
  )
}

export default InitialLoadingScreen
const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 30, 
        backgroundColor: "#D4EDF3"
    },
    logoContainer: {
        alignItems: "center"
    },
    imageContainer: {
        height: 200, 
        width: 200, 
        marginTop: "40%"
    },
    loaderNText: {
        position: "absolute",
        bottom: 200,
        left: "10%", 
        flexDirection: "column",
        gap: 10
    },
    loaderText: {
        textAlign: "center"
    }
})