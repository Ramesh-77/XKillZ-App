import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Pressable, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Menu pressed')}>
          <Ionicons name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Search pressed')}>
          <Ionicons name="search" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Content with padding */}
      <View style={styles.container}>
        <Text style={styles.headingText}>Share to Shine, Learn to Rise</Text>
        <Text style={{ fontSize: 15, marginVertical: "2%" }}>Connect with passionate people, Share what your know. Learn what you love</Text>
        <Pressable style={styles.swappingSkillBtn}>
          <Text style={styles.swappingSkillBtnText}>Start Swapping Skills</Text>
        </Pressable>
        <View>
          <Text style={{
            fontSize:
              20, fontWeight: "bold", marginTop: "10%", marginBottom: "5%"
          }}>Free Learnings</Text>
          {/* card */}

          <View style={styles.imageTextCard}>
            <Image
              source={require('../assets/java_freelearning.png')} // Replace with your image URL
              style={{ borderWidth: 10, borderColor: "#4BC2E3", width: "100%", height: 150, borderRadius: 25 }}
              resizeMode="cover"
            />
            <View>
              <Text style={{ fontSize: 18, fontWeight: "bold", padding: "3%", textAlign: "center" }}>Fundamentals of Java Programming</Text>
            </View>
            <View style={styles.textBookmarkIconContainer}>
              <Text>- Ramesh Pathak</Text>
              <Feather name='bookmark' size={30} color="#ababab" />
            </View>
          </View>


        </View>
      </View>

    </SafeAreaView>
  );
};

export default HomeScreen;

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
    zIndex: 1, // Makes sure the header stays on top
    marginVertical: "5%"
  },
  container: {
    flex: 1,
    padding: 30,
    marginTop: 80,
  },
  headingText: {
    fontSize: 25,
    // textAlign: 'center',
    fontWeight: 'bold',
    marginTop: "5%"
  },
  swappingSkillBtn: {

    backgroundColor: "#09B4E4",
    padding: 15,
    borderRadius: 10,
    marginTop: "5%",
    alignItems: "center",
  },
  swappingSkillBtnText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 15,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  // image

  imageTextCard: {
    width: "100%",
    height: 270,
    // borderBottomLeftRadius: 25,
    // borderBottomRightRadius: 25,
    overflow: 'hidden',
    // marginBottom: 20,
    borderWidth: 10,
    borderColor: "#4BC2E3",
    backgroundColor: "#ffffff",
    borderRadius: 25,
  },
  textBookmarkIconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "5%",
    paddingTop: "3%",
    paddingBottom: "2%",
    // marginTop: "5%",
  }
});
