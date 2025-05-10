import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const Header = ({title={title}, showBack=false}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.header}>
       {showBack ? (
        <Pressable style={styles.iconContainer} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="#ffffff" />
        </Pressable>
      ) : (
        <View style={{ width: 25 }} /> // empty view to keep spacing consistent
      )}
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
  header: {
    height: 70,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#09B4E4',
    padding: 20,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1, // Makes sure the header stays on top
    marginVertical: "5%",
  
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'semi-bold',
    color: "#ffffff",

  },
  iconContainer: {
 
    marginRight: "5%",
   
  }
})
