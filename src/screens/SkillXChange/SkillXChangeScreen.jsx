import React, { useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    Pressable,
    TouchableWithoutFeedback
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useDispatch, useSelector } from 'react-redux';
import { acceptUser, declineUser, loadSwapState, saveSwapState, toggleSwap } from '../../redux/features/swap/swapSlice';
import { dummySkillUsers } from '../../utils/dummySkillUsers';
import { useNavigation } from '@react-navigation/native';

const SkillXChangeScreen = () => {
    const [activeTab, setActiveTab] = useState('send');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState("Seen");

    // to show swapped users only
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const swappedUsers = useSelector(state => state.swap.swappedUsers);
    const acceptedUsers = useSelector(state => state.swap.acceptedUsers);
    const declinedUsers = useSelector(state => state.swap.declinedUsers);
    const isLoaded = useSelector(state => state.swap.isLoaded);

    // Load swap state on mount
    useEffect(() => {
        dispatch(loadSwapState());
    }, [dispatch]);

    // Save swap state whenever swappedUsers change (and after load)
    // useEffect(() => {
    //     if (isLoaded) {
    //         dispatch(saveSwapState(swappedUsers));
    //     }
    // }, [swappedUsers, isLoaded, dispatch]);
    // Save state whenever any of the states change
    useEffect(() => {
        if (isLoaded) {

            dispatch(saveSwapState(swappedUsers, acceptedUsers, declinedUsers));
        }
    }, [swappedUsers, acceptedUsers, declinedUsers, dispatch]);

    // Flatten all users from dummySkillUsers
    const allUsers = Object.values(dummySkillUsers).flat();

    // Show only users who are swapped AND not declined
    const swappedUsersData = allUsers.filter(
        user => swappedUsers[user.id] && !declinedUsers[user.id]
    );
    const acceptedUsersData = allUsers.filter(user => acceptedUsers[user.id]);
    const declinedUsersData = allUsers.filter(user => declinedUsers[user.id]);

    const handleToggleSwap = (userId) => {
        dispatch(toggleSwap(userId));
    };
    const handleAccept = (userId) => {
        dispatch(acceptUser(userId));
        Toast.show({
            type: 'success',
            text1: 'Swap Request Accepted',
            text2: 'You have accepted the user\'s request.',
            position: 'top',
            topOffset: 50,
        });
    };

    const handleDelete = (userId) => {
        dispatch(declineUser(userId));
        Toast.show({
            type: 'error',
            text1: 'Swap Request Declined',
            text2: 'You have declined the user\'s request.',
            position: 'top',
            topOffset: 50,
        });
    };



    return (
        <TouchableWithoutFeedback onPress={() => dropdownVisible && setDropdownVisible(false)}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Skill XChange</Text>
                    <TouchableOpacity>
                        <Ionicons name="search" size={30} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={styles.tabContainer}>
                    <TouchableOpacity
                        style={styles.tabButton}
                        onPress={() => setActiveTab('send')}
                    >
                        <Text style={styles.tabText}>SEND</Text>
                        <View
                            style={[
                                styles.underline,
                                activeTab === 'send' && styles.activeUnderline,
                            ]}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.tabButton}
                        onPress={() => setActiveTab('received')}
                    >
                        <Text style={styles.tabText}>RECEIVED</Text>
                        <View
                            style={[
                                styles.underline,
                                activeTab === 'received' && styles.activeUnderline,
                            ]}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.mainContents}>
                    {activeTab === 'send' ? (
                        <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                <View style={styles.fiterIconTextBox}>
                                    <Ionicons name="filter" size={20} color="#808080" />
                                    <Text style={{ fontSize: 10, fontWeight: "bold", marginLeft: 10, color: "#808080", letterSpacing: 2 }}>Filter</Text>
                                </View>
                                <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
                                    <Ionicons name="ellipsis-vertical" size={30} color="#5092A5" />
                                </TouchableOpacity>
                            </View>

                            {dropdownVisible && (
                                <View style={styles.dropdownMenu}>
                                    {['Seen', 'Accepted', 'Declined'].map((item) => (
                                        <Pressable
                                            key={item}
                                            style={[
                                                styles.dropdownItem,
                                                item !== 'Declined' && styles.dropdownItemWithBorder,
                                                selectedStatus === item && styles.activeDropdownItem
                                            ]}
                                            onPress={() => {
                                                setSelectedStatus(item);
                                                setDropdownVisible(false);
                                            }}
                                        >
                                            <Text style={{
                                                fontSize: 14,
                                                fontWeight: '500',
                                                textDecorationLine: selectedStatus === item ? 'underline' : 'none'
                                            }}>{item}</Text>
                                        </Pressable>
                                    ))}
                                </View>
                            )}

                            {/* dynamic content based on selected status */}
                            {/* for the content -> Seen */}
                            {selectedStatus === "Seen" && (

                                <View>
                                    {swappedUsersData?.length === 0 ? (
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25, paddingBottom: 400 }}>No swap request sent yet.</Text>
                                    ) : (
                                        <React.Fragment>

                                            <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 10 }}>All send swap request:</Text>

                                            {swappedUsersData && swappedUsersData?.map(swapUser => (
                                                <ScrollView key={swapUser?.id} style={styles.profileCard} showsVerticalScrollIndicator={false}>
                                                    <View style={styles.profileHeader}>
                                                        <Pressable onPress={() => navigation.navigate("SingleSkillListDetails", { selectedUser: swapUser })}>
                                                            <Image source={swapUser?.image} style={styles.profileImage} />
                                                        </Pressable>
                                                        <View>
                                                            <Text style={styles.profileName}>{swapUser?.name}</Text>
                                                            <View style={styles.profileDetailRow}>
                                                                <Text>{swapUser?.title} - </Text>
                                                                <View style={styles.ratingStars}>
                                                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                                                        <Ionicons
                                                                            key={i}
                                                                            name="star"
                                                                            size={15}
                                                                            color={i < swapUser?.rating ? '#FFD95A' : '#000'}
                                                                        />
                                                                    ))}
                                                                    {/* <Ionicons name="star" size={15} color="#FFD95A" />
                                                            <Ionicons name="star" size={15} color="#FFD95A" />
                                                            <Ionicons name="star" size={15} color="#FFD95A" />
                                                            <Ionicons name="star" size={15} color="#FFD95A" />
                                                            <Ionicons name="star" size={15} color="#000000" /> */}
                                                                </View>
                                                            </View>
                                                            <View style={styles.profileDetailRow}>
                                                                <Text>Experience = </Text>
                                                                <Text style={{ fontWeight: "bold" }}>{swapUser?.experience}</Text>
                                                            </View>
                                                            <View style={styles.statsRow}>
                                                                <View style={styles.statItem}>
                                                                    <Ionicons name="heart-outline" size={20} color="#000" />
                                                                    <Text style={styles.statText}>{swapUser?.likes}</Text>
                                                                </View>
                                                                <View style={styles.statItem}>
                                                                    <AntDesign name="swap" size={20} color="#000" />
                                                                    <Text style={styles.statText}>{swapUser?.swaps}</Text>
                                                                </View>
                                                                <View style={styles.statItem}>
                                                                    <Fontisto name="commenting" size={20} color="#000" />
                                                                    <Text style={styles.statText}>{swapUser?.comments}</Text>
                                                                </View>
                                                            </View>
                                                            <Pressable style={styles.unswapButton}>
                                                                <Text style={styles.unswapText}>UNSWAP</Text>
                                                            </Pressable>
                                                        </View>
                                                    </View>
                                                </ScrollView>
                                            ))}
                                        </React.Fragment>
                                    )}

                                </View>
                            )}

                            {/* for the content -> Accepted */}
                            {selectedStatus === "Accepted" && (
                                <View>
                                    {acceptedUsersData?.length === 0 ? (
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25, paddingBottom: 400 }}>No swap request accepted yet.</Text>
                                    ) : (
                                        <React.Fragment>

                                            <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 10 }}>All accepted swap request:</Text>

                                            {acceptedUsersData && acceptedUsersData?.map(swapUser => (
                                                <ScrollView key={swapUser?.id} style={styles.profileCard} showsVerticalScrollIndicator={false}>
                                                    <View style={styles.profileHeader}>
                                                        <Pressable>
                                                            <Image source={swapUser?.image} style={styles.profileImage} />
                                                        </Pressable>
                                                        <View>
                                                            <Text style={styles.profileName}>{swapUser?.name}</Text>
                                                            <View style={styles.profileDetailRow}>
                                                                <Text>{swapUser?.title} - </Text>
                                                                <View style={styles.ratingStars}>
                                                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                                                        <Ionicons
                                                                            key={i}
                                                                            name="star"
                                                                            size={15}
                                                                            color={i < swapUser?.rating ? '#FFD95A' : '#000'}
                                                                        />
                                                                    ))}
                                                                    {/* <Ionicons name="star" size={15} color="#FFD95A" />
                                                            <Ionicons name="star" size={15} color="#FFD95A" />
                                                            <Ionicons name="star" size={15} color="#FFD95A" />
                                                            <Ionicons name="star" size={15} color="#FFD95A" />
                                                            <Ionicons name="star" size={15} color="#000000" /> */}
                                                                </View>
                                                            </View>
                                                            <View style={styles.profileDetailRow}>
                                                                <Text>Experience = </Text>
                                                                <Text style={{ fontWeight: "bold" }}>{swapUser?.experience}</Text>
                                                            </View>
                                                            <View style={styles.statsRow}>
                                                                <View style={styles.statItem}>
                                                                    <Ionicons name="heart-outline" size={20} color="#000" />
                                                                    <Text style={styles.statText}>{swapUser?.likes}</Text>
                                                                </View>
                                                                <View style={styles.statItem}>
                                                                    <AntDesign name="swap" size={20} color="#000" />
                                                                    <Text style={styles.statText}>{swapUser?.swaps}</Text>
                                                                </View>
                                                                <View style={styles.statItem}>
                                                                    <Fontisto name="commenting" size={20} color="#000" />
                                                                    <Text style={styles.statText}>{swapUser?.comments}</Text>
                                                                </View>
                                                            </View>
                                                            <Pressable style={styles.unswapButton} onPress={() => navigation.navigate('ChatScreen', { selectedUser: swapUser })}>
                                                                <Text style={styles.unswapText}>MESSAGE</Text>
                                                            </Pressable>
                                                        </View>
                                                    </View>
                                                </ScrollView>
                                            ))}
                                        </React.Fragment>
                                    )}

                                </View>
                            )}
                            {/* for the content -> Declined */}
                            {selectedStatus === "Declined" && (
                                <View>
                                    {declinedUsersData?.length === 0 ? (
                                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 25, paddingBottom: 400 }}>No swap request declined yet.</Text>
                                    ) : (
                                        <React.Fragment>

                                            <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 10 }}>All declined swap request:</Text>

                                            {declinedUsersData && declinedUsersData?.map(swapUser => (
                                                <ScrollView key={swapUser?.id} style={styles.profileCard} showsVerticalScrollIndicator={false}>
                                                    <View style={styles.profileHeader}>
                                                        <Pressable>
                                                            <Image source={swapUser?.image} style={styles.profileImage} />
                                                        </Pressable>
                                                        <View>
                                                            <Text style={styles.profileName}>{swapUser?.name}</Text>
                                                            <View style={styles.profileDetailRow}>
                                                                <Text>{swapUser?.title} - </Text>
                                                                <View style={styles.ratingStars}>
                                                                    {[1, 2, 3, 4, 5].map((_, i) => (
                                                                        <Ionicons
                                                                            key={i}
                                                                            name="star"
                                                                            size={15}
                                                                            color={i < swapUser?.rating ? '#FFD95A' : '#000'}
                                                                        />
                                                                    ))}
                                                                    {/* <Ionicons name="star" size={15} color="#FFD95A" />
                                                            <Ionicons name="star" size={15} color="#FFD95A" />
                                                            <Ionicons name="star" size={15} color="#FFD95A" />
                                                            <Ionicons name="star" size={15} color="#FFD95A" />
                                                            <Ionicons name="star" size={15} color="#000000" /> */}
                                                                </View>
                                                            </View>
                                                            <View style={styles.profileDetailRow}>
                                                                <Text>Experience = </Text>
                                                                <Text style={{ fontWeight: "bold" }}>{swapUser?.experience}</Text>
                                                            </View>
                                                            <View style={styles.statsRow}>
                                                                <View style={styles.statItem}>
                                                                    <Ionicons name="heart-outline" size={20} color="#000" />
                                                                    <Text style={styles.statText}>{swapUser?.likes}</Text>
                                                                </View>
                                                                <View style={styles.statItem}>
                                                                    <AntDesign name="swap" size={20} color="#000" />
                                                                    <Text style={styles.statText}>{swapUser?.swaps}</Text>
                                                                </View>
                                                                <View style={styles.statItem}>
                                                                    <Fontisto name="commenting" size={20} color="#000" />
                                                                    <Text style={styles.statText}>{swapUser?.comments}</Text>
                                                                </View>
                                                            </View>
                                                            <Pressable style={[styles.unswapButton, { backgroundColor: "#000000" }]}>
                                                                <Text style={styles.unswapText}>SWAP</Text>
                                                            </Pressable>
                                                        </View>
                                                    </View>
                                                </ScrollView>
                                            ))}
                                        </React.Fragment>
                                    )}

                                </View>
                            )}

                            <View style={styles.infoBox}>
                                <Ionicons name="information-circle-outline" size={30} style={{ alignSelf: "center" }} />
                                <Text style={{ textAlign: "center" }}>
                                    The Response of the person will be notified to your provided{' '}
                                    <Text style={{ color: "#FF5823" }}>gmail</Text>{' '}
                                    account. For more information, contact{' '}
                                    <Text style={{ color: "#FF5823" }}>Help and Support</Text>.
                                </Text>
                            </View>
                        </ScrollView>
                    ) : (
                        <ScrollView style={{ paddingHorizontal: 10 }} showsVerticalScrollIndicator={false}>
                            {/* Content for RECEIVED */}

                            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                <View style={styles.fiterIconTextBox}>
                                    <Ionicons name="filter" size={20} color="#808080" />
                                    <Text style={{ fontSize: 10, fontWeight: "bold", marginLeft: 10, color: "#808080", letterSpacing: 2 }}>Filter</Text>
                                </View>
                            </View>
                            <View style={{ marginBottom: 150 }}>
                                {swappedUsersData?.length === 0 ? (<Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 10 }}>No swap request received yet</Text>) : (

                                    <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 10 }}>All received swap request:</Text>
                                )}
                                {/* swap request from users */}

                                {swappedUsersData && swappedUsersData?.map(swapUser => {
                                    const isAccepted = acceptedUsers[swapUser?.id];
                                    return (
                                        <View style={[styles.profileCard, { backgroundColor: "#ffffff" }]} key={swapUser?.id}>
                                            <View style={styles.profileHeader}>
                                                <Pressable>
                                                    <Image source={swapUser?.image} style={styles.profileImage} />
                                                </Pressable>
                                                <View>
                                                    <Text style={styles.profileName}>{swapUser?.name}</Text>
                                                    <View style={styles.profileDetailRow}>
                                                        <Text>{swapUser?.title} - </Text>
                                                        <View style={styles.ratingStars}>
                                                            {[1, 2, 3, 4, 5].map((_, i) => (
                                                                <Ionicons
                                                                    key={i}
                                                                    name="star"
                                                                    size={15}
                                                                    color={i < swapUser?.rating ? '#FFD95A' : '#000'}
                                                                />
                                                            ))}
                                                            {/* <Ionicons name="star" size={15} color="#FFD95A" />
                                                        <Ionicons name="star" size={15} color="#FFD95A" />
                                                        <Ionicons name="star" size={15} color="#FFD95A" />
                                                        <Ionicons name="star" size={15} color="#FFD95A" />
                                                        <Ionicons name="star" size={15} color="#000000" /> */}
                                                        </View>
                                                    </View>
                                                    <View style={styles.profileDetailRow}>
                                                        <Text>Experience = </Text>
                                                        <Text style={{ fontWeight: "bold" }}>{swapUser?.experience}</Text>
                                                    </View>
                                                    <View style={styles.statsRow}>
                                                        <View style={styles.statItem}>
                                                            <Ionicons name="heart-outline" size={20} color="#000" />
                                                            <Text style={styles.statText}>{swapUser?.likes}</Text>
                                                        </View>
                                                        <View style={styles.statItem}>
                                                            <AntDesign name="swap" size={20} color="#000" />
                                                            <Text style={styles.statText}>{swapUser?.swaps}</Text>
                                                        </View>
                                                        <View style={styles.statItem}>
                                                            <Fontisto name="commenting" size={20} color="#000" />
                                                            <Text style={styles.statText}>{swapUser?.comments}</Text>
                                                        </View>
                                                    </View>
                                                    <Pressable style={[styles.unswapButton, { backgroundColor: isAccepted ? "#90ee90" : "#09B4E4", marginBottom: 10 }]}
                                                        onPress={() => {
                                                            if (!isAccepted) {
                                                                handleAccept(swapUser.id);
                                                            }
                                                        }}>
                                                        <Text style={[styles.unswapText, { color: "#000000" }]}>{isAccepted ? "ACCEPTED" : "ACCEPT"}</Text>
                                                    </Pressable>
                                                    {/* delete button show only if not accepted */}
                                                    {!isAccepted && (
                                                        <Pressable
                                                            style={[styles.unswapButton, { backgroundColor: "#8A8A8A" }]}
                                                            onPress={() => handleDelete(swapUser.id)}
                                                        >
                                                            <Text style={[styles.unswapText, { color: "#ffffff" }]}>DELETE</Text>
                                                        </Pressable>
                                                    )}
                                                    {/* <Pressable style={[styles.unswapButton, { backgroundColor: "#8A8A8A" }]}>
                                                    <Text style={[styles.unswapText, { color: "#ffffff" }]}>DELETE</Text>
                                                </Pressable> */}
                                                </View>
                                            </View>
                                        </View>
                                    )
                                }

                                )}
                            </View>




                            {/* <View style={[styles.profileCard, { backgroundColor: "#ffffff" }]}>
                                    <View style={styles.profileHeader}>
                                        <Pressable>
                                            <Image source={require('../../assets/programmer.jpg')} style={styles.profileImage} />
                                        </Pressable>
                                        <View>
                                            <Text style={styles.profileName}>Ramesh Pathak</Text>
                                            <View style={styles.profileDetailRow}>
                                                <Text>RN Developer - </Text>
                                                <View style={styles.ratingStars}>
                                                    <Ionicons name="star" size={15} color="#FFD95A" />
                                                    <Ionicons name="star" size={15} color="#FFD95A" />
                                                    <Ionicons name="star" size={15} color="#FFD95A" />
                                                    <Ionicons name="star" size={15} color="#FFD95A" />
                                                    <Ionicons name="star" size={15} color="#000000" />
                                                </View>
                                            </View>
                                            <View style={styles.profileDetailRow}>
                                                <Text>Experience = </Text>
                                                <Text style={{ fontWeight: "bold" }}>5 Years</Text>
                                            </View>
                                            <View style={styles.statsRow}>
                                                <View style={styles.statItem}>
                                                    <Ionicons name="heart-outline" size={20} color="#000" />
                                                    <Text style={styles.statText}>5K+</Text>
                                                </View>
                                                <View style={styles.statItem}>
                                                    <AntDesign name="swap" size={20} color="#000" />
                                                    <Text style={styles.statText}>60</Text>
                                                </View>
                                                <View style={styles.statItem}>
                                                    <Fontisto name="commenting" size={20} color="#000" />
                                                    <Text style={styles.statText}>128</Text>
                                                </View>
                                            </View>
                                            <Pressable style={[styles.unswapButton, { backgroundColor: "#09B4E4", marginBottom: 10 }]}>
                                                <Text style={[styles.unswapText, { color: "#000000" }]}>ACCEPT</Text>
                                            </Pressable>
                                            <Pressable style={[styles.unswapButton, { backgroundColor: "#8A8A8A" }]}>
                                                <Text style={[styles.unswapText, { color: "#ffffff" }]}>DELETE</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View> */}

                        </ScrollView>
                    )}
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback >
    );
};

export default SkillXChangeScreen;

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
        zIndex: 1,
        marginVertical: "5%",
    },
    headerText: {
        fontSize: 25,
        fontWeight: '600',
        color: "#ffffff",
    },
    tabContainer: {
        flexDirection: 'row',
        marginTop: 120,
        width: '100%',
    },
    tabButton: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    tabText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    underline: {
        height: 3,
        backgroundColor: '#ffffff',
        width: '100%',
        marginTop: 5,
    },
    activeUnderline: {
        backgroundColor: '#09B4E4',
    },
    mainContents: {
        padding: 20,
    },
    fiterIconTextBox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#D4EDF3",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#09B4E4",
    },
    dropdownMenu: {
        position: 'absolute',
        top: 50,
        right: 10,
        backgroundColor: '#82DAF3',
        borderRadius: 10,
        elevation: 5,
        zIndex: 999,
        paddingVertical: 5,
        width: 120,
    },
    dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    dropdownItemWithBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
    },
    activeDropdownItem: {
        backgroundColor: '#B2E4F2',
    },
    statusContent: {
        marginTop: 15,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    profileCard: {
        backgroundColor: "#09B4E4",
        width: "100%",
        borderRadius: 10,
        paddingVertical: 20,
        paddingStart: 15,
        marginVertical: 10,
    },
    profileHeader: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    profileName: {
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1
    },
    profileDetailRow: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        marginTop: 5
    },
    ratingStars: {
        flexDirection: "row",
        gap: 1
    },
    statsRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10
    },
    statItem: {
        flexDirection: "row",
        alignItems: "center"
    },
    statText: {
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 5
    },
    unswapButton: {
        backgroundColor: "#18A800",
        alignItems: "center",
        paddingVertical: 8,
        borderRadius: 10
    },
    unswapText: {
        letterSpacing: 1,
        fontWeight: 'bold',
        fontSize: 15,
        color: "#ffffff"
    },
    infoBox: {
        borderRadius: 10,
        paddingVertical: 20,
        paddingStart: 15,
        marginVertical: 20,
        gap: 10,
    }
});
