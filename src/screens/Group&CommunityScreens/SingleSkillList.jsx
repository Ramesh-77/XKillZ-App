import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, TextInput, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { dummySkillUsers } from '../../utils/dummySkillUsers';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { loadSwapState, saveSwapState, toggleSwap } from '../../redux/features/swap/swapSlice';

const SingleSkillList = ({ route }) => {
    const { skillName = 'SKill' } = route.params; // Get the skill name from the route params
    // State to handle the search query
    const [searchQuery, setSearchQuery] = useState('');
    const navigation = useNavigation();

    const dispatch = useDispatch();
    const swappedUsers = useSelector(state => state.swap.swappedUsers);
    const isLoaded = useSelector(state => state.swap.isLoaded);

    useEffect(() => {
        dispatch(loadSwapState());
    }, [dispatch]);
    useEffect(() => {
        if (isLoaded) {
            dispatch(saveSwapState(swappedUsers));
        }
    }, [swappedUsers, isLoaded, dispatch]);

    // get the skill list user
    const users = dummySkillUsers[skillName] || []; // Default to an empty array if no users found for the skill
    // Filter users based on the search query (matching title or name)
    const filteredUsers = searchQuery
        ? users.filter(user =>
            user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : users; // Show all users if no search query

    // handle the swap btn
    const handleToggleSwap = (userId) => {
        dispatch(toggleSwap(userId));
    };


    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header */}
            <Header showBack={true} title='Group & Community' />
            {/* search input and voice icon part */}
            <View style={styles.searchInputIconVoiceIconContainer}>
                <View style={styles.searchIconInputContainer}>
                    <Ionicons name="search" style={styles.searchIcon} />
                    <TextInput placeholder={skillName} style={styles.textInput} value={searchQuery}
                        onChangeText={setSearchQuery} />
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
                {/* Render filtered user list */}
                <ScrollView style={{ flex: 1, flexDirection: "column" }} showsVerticalScrollIndicator={false}>
                    {/* render user data dynamically */}
                    {/* Render user data dynamically */}
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((user) => (
                            <View key={user?.id} style={{ backgroundColor: "#09B4E4", width: "100%", borderRadius: 10, paddingVertical: 20, paddingStart: 15, marginBottom: 10 }} >
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 20 }}>
                                    <Pressable onPress={() => navigation.navigate('SingleSkillUserDetail', { user })}>
                                        <Image source={user?.image} style={{ width: 100, height: 100, borderRadius: 50 }} />
                                    </Pressable>
                                    <View>
                                        <Text style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 1 }}>{user?.name}</Text>
                                        <View style={{ flexDirection: "row", alignItems: "center", gap: 5, marginTop: 5 }}>
                                            <Text style={{ fontSize: 15 }}>{user?.title} - </Text>
                                            <View style={{ flexDirection: "row", alignItems: "center", gap: 1 }}>
                                                {[1, 2, 3, 4, 5].map((_, i) => (
                                                    <Ionicons
                                                        key={i}
                                                        name="star"
                                                        size={15}
                                                        color={i < user.rating ? '#FFD95A' : '#000'}
                                                    />
                                                ))}
                                                {/* <Ionicons name="star" size={15} color="#FFD95A" />
                                        <Ionicons name="star" size={15} color="#FFD95A" />
                                        <Ionicons name="star" size={15} color="#FFD95A" />
                                        <Ionicons name="star" size={15} color="#FFD95A" />
                                        <Ionicons name="star" size={15} color="#000000" /> */}
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: "row", alignItems: "center", gap: 5, marginTop: 5 }}>
                                            <Text style={{ fontSize: 15 }}>Experience = </Text>
                                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>{user?.experience}</Text>
                                        </View>
                                        {/* like swap comment box */}
                                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10, }}>
                                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                                <Ionicons name="heart-outline" size={20} color="#000" />
                                                <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 5 }}>{user?.likes}</Text>
                                            </View>
                                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                                <AntDesign name="swap" size={20} color="#000" />
                                                <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 5 }}>{user?.swaps}</Text>
                                            </View>
                                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                                <Fontisto name="commenting" size={20} color="#000" />
                                                <Text style={{ fontSize: 15, fontWeight: "bold", marginLeft: 5 }}>{user?.comments}</Text>
                                            </View>
                                        </View>
                                        <Pressable
                                            onPress={() => handleToggleSwap(user.id)}
                                            style={{
                                                width: "100%",
                                                backgroundColor: swappedUsers[user.id] ? "#18A800" : "#000000",
                                                alignItems: "center",
                                                paddingVertical: 8,
                                                borderRadius: 10,
                                            }}>
                                            <Text style={{
                                                letterSpacing: 1,
                                                fontWeight: 'bold',
                                                fontSize: 15,
                                                color: swappedUsers[user.id] ? "#ffffff" : "#ffffff",
                                            }}>
                                                {swappedUsers[user.id] ? "UNSWAP" : "SWAP"}
                                            </Text>
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        ))) : (
                        <View>
                            <Text style={{ fontSize: 25, textAlign: "center" }}>No users found for</Text>
                            <Text style={{ fontWeight: "bold", fontSize: 30, textAlign: "center" }}>{searchQuery ? searchQuery : skillName}</Text>
                        </View>
                    )
                    }

                </ScrollView>
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
