import React from 'react';
import { SafeAreaView, Text, View, TextInput, StyleSheet, Pressable } from 'react-native';
import Header from '../../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const GroupCommunityScreen = () => {
    const navigation = useNavigation();
    const skills = ['Programming', 'Graphic Designer', 'Cooking', 'Dancer', 'Coder'];
    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header */}
            <Header showBack={false} title='Group & Community' />
            {/* search input and voice icon part */}
            <View style={styles.searchInputIconVoiceIconContainer}>
                <View style={styles.searchIconInputContainer}>
                    <Ionicons name="search" style={styles.searchIcon} />
                    <TextInput placeholder="Search skills to learn..." style={styles.textInput} />
                </View>
                <Pressable style={styles.voiceIconContainer} >
                    <MaterialIcons name="keyboard-voice" size={25} color='#000' />
                </Pressable>
            </View>
            {/* other content */}
            <View style={styles.mainContent}>
                <View style={styles.textFilterBox}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Popular Searched Skills</Text>
                    <View style={styles.fiterIconTextBox}>
                        <Ionicons name="filter" size={20} color="#808080" />
                        <Text style={{ fontSize: 10, fontWeight: "bold", marginLeft: 10, color: "#808080", letterSpacing: 2 }}>Filter</Text>
                    </View>

                </View>
                {/* skills list */}
                <View style={{ flex: 1, flexDirection: "column" }}>
                    {skills.map((skill, index) => (
                        <Pressable
                            key={index}
                            style={styles.skillListBtn}
                            onPress={() => navigation.navigate('SingleSkillList', { skillName: skill })}
                        >
                            <Text style={styles.skillListBtnText}>{skill}</Text>
                        </Pressable>
                    ))}
                    {/* <Pressable style={styles.skillListBtn} >
                        <Text style={styles.skillListBtnText}>Programming</Text>
                    </Pressable>
                    <Pressable style={styles.skillListBtn}>
                        <Text style={styles.skillListBtnText}>Graphic  Designer</Text>
                    </Pressable>
                    <Pressable style={styles.skillListBtn}>
                        <Text style={styles.skillListBtnText}>Cooking</Text>
                    </Pressable>
                    <Pressable style={styles.skillListBtn}>
                        <Text style={styles.skillListBtnText}>Dancer</Text>
                    </Pressable>
                    <Pressable style={styles.skillListBtn}>
                        <Text style={styles.skillListBtnText}>Coder</Text>
                    </Pressable> */}

                </View>
            </View>

        </SafeAreaView>
    );
};

export default GroupCommunityScreen;

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
        justifyContent: "space-between",
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
    // skill list css
    skillListBtn: {
        marginBottom: 15,
        borderRadius: 10,
        borderColor: '#09B4E4',
        borderWidth: 1,
        paddingVertical: 15,
        // paddingHorizontal: 20, 
        justifyContent: "center",
        alignItems: "center"
    },
    skillListBtnText: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#09B4E4",
        letterSpacing: 1,
        textTransform: "uppercase"
    }


});
