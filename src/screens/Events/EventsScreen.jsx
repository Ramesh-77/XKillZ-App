import React, { useState } from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const eventsData = [
    {
        id: '1',
        title: "Google Developer Groups (GDG) Events That Happen Around The Globe",
        location: "Sydney, NSW",
        date: "12 April, 2025 - 01:00 pm",
        image: require('../../assets/coder.jpg')
    },
    {
        id: '2',
        title: "Android Developers Meetup",
        location: "Melbourne, VIC",
        date: "15 April, 2025 - 02:00 pm",
        image: require('../../assets/programmer.jpg')
    },
    {
        id: '3',
        title: "React Native Workshop for Beginners",
        location: "Brisbane, QLD",
        date: "20 April, 2025 - 10:00 am",
        image: require('../../assets/dancer.jpeg')
    }
];


const EventsScreen = () => {
    // State to track liked events
    const [likedEvents, setLikedEvents] = useState({});
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState(null);


    // Function to handle heart icon click
    const toggleLike = (eventId) => {
        setLikedEvents(prevState => ({
            ...prevState,
            [eventId]: !prevState[eventId], // Toggle liked state for the specific event
        }));
    };
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };

    const closeDropdown = () => {
        setDropdownVisible(false);
    };
    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Dropdown Overlay */}
            {isDropdownVisible && (
                <TouchableWithoutFeedback onPress={closeDropdown}>
                    <View style={styles.dropdownOverlay}>
                        <TouchableWithoutFeedback>
                            <View style={styles.dropdownMenu}>
                                <TouchableOpacity onPress={() => setSelectedFilter('All Events')}>
                                    <Text style={[
                                        styles.dropdownItem,
                                        selectedFilter === 'All Events' && styles.selectedDropdownItem
                                    ]}>All Events</Text>
                                </TouchableOpacity>
                                <View style={styles.dropdownDivider} />
                                <TouchableOpacity onPress={() => setSelectedFilter('My Events')}>
                                    <Text style={[
                                        styles.dropdownItem,
                                        selectedFilter === 'My Events' && styles.selectedDropdownItem
                                    ]}>My Events</Text>
                                </TouchableOpacity>
                                <View style={styles.dropdownDivider} />
                                <TouchableOpacity onPress={() => setSelectedFilter('Pick for Me')}>
                                    <Text style={[
                                        styles.dropdownItem,
                                        selectedFilter === 'Pick for Me' && styles.selectedDropdownItem
                                    ]}>Pick for Me</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            )}
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Events</Text>
                <TouchableOpacity onPress={toggleDropdown}>
                    <Ionicons name="ellipsis-horizontal" size={30} color="#fff" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.mainContents}>
                {eventsData.map((event) => (
                    <View key={event.id} style={styles.eventWrapper}>
                        <View style={styles.eventCard}>
                            <Image source={event.image} style={styles.eventImage} />
                            <View style={styles.eventInfo}>
                                <Text style={styles.eventTitle}>{event.title}</Text>

                                <View style={styles.eventLocation}>
                                    <Ionicons name="location-outline" size={16} />
                                    <Text style={styles.locationText}>{event.location}</Text>
                                </View>

                                <Text style={styles.eventDate}>{event.date}</Text>
                            </View>
                            <TouchableOpacity onPress={() => toggleLike(event.id)}>
                                <Ionicons
                                    name={likedEvents[event.id] ? "heart" : "heart-outline"} // Toggle between heart and heart-outline
                                    size={30}
                                    color={likedEvents[event.id] ? 'red' : 'gray'} // Change color when liked
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Horizontal Line */}
                        <View style={styles.horizontalLine} />
                    </View>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default EventsScreen;

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
        marginVertical: "5%",
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'semi-bold',
        color: "#ffffff",
    },

    mainContents: {
        paddingStart: 20,
        paddingTop: 120,  // Increased top padding to account for the header
        paddingBottom: 20,  // Ensure space at the bottom
        alignItems: "center",  // Center the event cards
    },

    eventWrapper: {
        width: '100%',
        marginBottom: 15,
    },

    eventCard: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "95%",
        borderRadius: 10,
        padding: 10,
    },

    eventImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },

    eventInfo: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'flex-start',
    },

    eventTitle: {
        flexWrap: 'wrap', // Ensure text wraps
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },

    eventLocation: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
    },

    locationText: {
        marginLeft: 5,
    },

    eventDate: {
        marginTop: 5,
    },

    horizontalLine: {
        width: '100%',
        height: 1,
        backgroundColor: '#ababab', // Line color
        marginTop: 10, // Adjust for spacing
    },
    // css for dropdown
    dropdownOverlay: {
        position: 'absolute',
        top: 70,
        right: 20,
        left: 0,
        bottom: 0,
        backgroundColor: 'transparent',
        zIndex: 2,
    },

    dropdownMenu: {
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 8,
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },

    dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#ffffff',
    },
    dropdownDivider: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 5,
    },
    selectedDropdownItem: {
        color: '#09B4E4', // Highlight color
        fontWeight: 'bold',
    },
});
