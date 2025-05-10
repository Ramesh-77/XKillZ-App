import React from 'react';
import { SafeAreaView, Text, View, TextInput, StyleSheet, Pressable, Image} from 'react-native';
import Header from '../../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SingleSkillList = ({route}) => {
    const { skillName = 'SKill' } = route.params; // Get the skill name from the route params
    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header */}
            <Header showBack={true} title='Group & Community' />
            {/* search input and voice icon part */}
            <View style={styles.searchInputIconVoiceIconContainer}>
                <View style={styles.searchIconInputContainer}>
                    <Ionicons name="search" style={styles.searchIcon} />
                    <TextInput placeholder={skillName} style={styles.textInput} />
                </View>
                <Pressable style={styles.voiceIconContainer} >
                    <MaterialIcons name="keyboard-voice" size={25} color='#000' />
                </Pressable>
            </View>
            {/* other content */}
            <View style={styles.mainContent}>
                <View style={styles.textFilterBox}>
                    <View style={styles.fiterIconTextBox}>
                        <Ionicons name="filter" size={20} color="#808080" />
                        <Text style={{ fontSize: 10, fontWeight: "bold", marginLeft: 10, color: "#808080", letterSpacing: 2 }}>Filter</Text>
                    </View>

                </View>
                {/* individual skill list */}
                <View style={{ flex: 1, flexDirection: "column",  }}>
                   <View style={{backgroundColor: "#09B4E4", width: "100%", borderRadius: 5, padding: 50, marginBottom: 10}}>
                    <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                        <Image source={require('../../assets/XKillZ_Logo.png')} style={{width: 80, height: 80}}/>
                        <View style={{}}>
                            <Text style={{fontSize: 20, fontWeight: "bold", color: "#ffffff"}}>Benjamin Engel</Text>
                            <Text style={{fontSize: 15, fontWeight: "bold", color: "#ffffff"}}>Java Developer - star</Text>
                            <Text style={{fontSize: 15, fontWeight: "bold", color: "#ffffff"}}>Java Developer - star</Text>
                            <Pressable><Text>Swap</Text></Pressable>
                        </View>
                    </View>
                   </View>
                   
                    
                </View>
            </View>

        </SafeAreaView>
    );
};

export default SingleSkillList;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#D4EDF3',
    },

    // headingText: {
    //     fontSize: 25,
    //     // textAlign: 'center',
    //     fontWeight: 'bold',
    //     marginTop: "5%"
    // },
    searchInputIconVoiceIconContainer: {
        width: "100%",
        // height: 50,
        backgroundColor: "#ffffff",
        paddingVertical: 18,
        marginTop: 110,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        // marginHorizontal: -30,
    },
    searchIconInputContainer: {
        flex: 0.8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 10,
        marginRight: 10,
        borderRadius: 10,
        opacity: 0.8,

    },
    searchIcon: {
        fontSize: 20,
        opacity: 0.5,
        marginRight: 8,
        paddingLeft: 10,
        opacity: .8
    },
    textInput: {
        flex: 1,
        height: 40,
    },
    voiceIconContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#09B4E4',
        borderRadius: 20, // Half of width/height for a circle
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainContent: {
        flex: 1,
        backgroundColor: "#D4EDF3",
        paddingHorizontal: 30,
        paddingTop: 20,
    },
    textFilterBox: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 20,
    },
    fiterIconTextBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#D4EDF3",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#09B4E4",
    },



});
