import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Pressable, TextInput, ScrollView } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Calendar } from 'react-native-calendars';




const ClassScheduleScreen = () => {
    const navigation = useNavigation();
        // Get today's date
        const today = new Date().toISOString().split('T')[0];
        const [selectedDate, setSelectedDate] = useState(today);
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 15 }}>
                    <Pressable style={styles.iconContainer} onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-outline" size={30} color="#ffffff" />
                    </Pressable>
                    <Text style={styles.headerText}>Schedule Class</Text>
                </View>
                <TouchableOpacity>
                    <EvilIcons name="user" size={40} color="#fff" />
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.mainContents}>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                    <AntDesign name="clockcircle" size={30} color="#09B4E4" />
                    <Text style={{ fontWeight: "bold", fontSize: 30 }}>Schedule Class</Text>
                </View>
                {/* days */}
                <View style={{ flexDirection: "row", alignItems: "center", gap: 20, marginTop: 20 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 2, borderColor: "#09B4E4", padding: 10, borderRadius: 10 }}>
                        <Pressable>
                            <Text>Days</Text>
                        </Pressable>
                        <AntDesign name="down" size={20} color="#000000" />
                    </View>
                    <TextInput placeholder="Monday, Tuesday, etc." style={{ backgroundColor: "#AFE8F6", width: "70%", paddingHorizontal: 10, borderRadius: 10 }} />
                </View>
                {/* Timinigs */}
                <View style={{ flexDirection: "row", alignItems: "center", gap: 20, marginTop: 20 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 2, borderColor: "#09B4E4", padding: 10, borderRadius: 10 }}>
                        <Pressable>
                            <Text>Timings</Text>
                        </Pressable>
                        <AntDesign name="down" size={20} color="#000000" />
                    </View>
                    <TextInput placeholder="4:00 - 5:00 pm" style={{ backgroundColor: "#AFE8F6", width: "65%", paddingHorizontal: 10, borderRadius: 10 }} />
                </View>
                {/* notes input */}
                <TextInput
                    style={styles.noteTextInput}
                    placeholder="Add Notes Here..."
                    multiline
                    numberOfLines={5}
                />

                {/* calendar */}
                <View style={styles.calendarContainer}>
                    <Calendar
                        current={selectedDate}
                        onDayPress={day => setSelectedDate(day.dateString)}
                        markedDates={{
                            [selectedDate]: { selected: true, selectedColor: '#000000' }
                        }}
                        style={styles.calendar}
                        theme={{
                            // selectedDayTextColor: '#ffffff',
                            // todayTextColor: '#0D62EA',
                            backgroundColor: 'transparent',
                            calendarBackground: 'transparent',
                            textSectionTitleColor: '#000',
                            dayTextColor: '#000',
                            todayTextColor: '#000000',
                            selectedDayTextColor: '#ffffff',
                            textDisabledColor: '#ababab', // Brighter color for dates from previous/next month
                            textMonthFontWeight: 'bold',         // Make month text bold
                            textMonthFontSize: 20,
                        }}
                    />
                </View>
                 {/* btns */}
                 <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 20, marginVertical: 20 }}>
                    <Pressable style={{ backgroundColor: "grey", padding: 10, borderRadius: 10 }}>
                        <Text style={{color: "#fff", letterSpacing: 1}}>Clear</Text>
                    </Pressable>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                    <Pressable style={{ backgroundColor: "grey", padding: 10, borderRadius: 10 }}>
                        <Text style={{color: "#fff", letterSpacing: 1}}>Cancel</Text>
                    </Pressable>
                    <Pressable style={{ backgroundColor: "#09B4E4", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10 }}>
                        <Text style={{color: "#fff", letterSpacing: 1}}>OK</Text>
                    </Pressable>
                    </View>
                 </View>

                {/* for horzontal line */}
                <View
                    style={{
                        borderBottomColor: '#000000',
                        opacity: 0.2,
                        borderBottomWidth: 1,
                        marginVertical: 10,
                        width: '100%',
                    }}
                />

            </ScrollView>
        </SafeAreaView>
    );
};

export default ClassScheduleScreen;

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
        zIndex: 1,
        marginVertical: "5%",
    },

    headerText: {
        fontSize: 25,
        fontWeight: '600',
        color: "#ffffff",
    },

    mainContents: {
        // paddingStart: 20,
        paddingHorizontal: 30,
        paddingTop: 120,
        marginVertical: 20,
        // alignItems: "center",
        paddingBottom: 50,
    },
    noteTextInput: {
        backgroundColor: "#AFE8F6",
        width: "100%",
        paddingHorizontal: 10,
        marginTop: 20,
        height: 120,
        padding: 10,
        textAlignVertical: 'top', // Ensures text starts from the top-left
        borderRadius: 10

    },
    calendarContainer: {
        backgroundColor: 'transparent',

    },

    calendar: {
        backgroundColor: '#AFE8F6',
        // borderWidth: 0,
        // elevation: 0,
        // borderWidth: 1,
        borderColor: '#000', // Black border
        borderRadius: 10,
        elevation: 0,
        marginTop: "7%"
    },


});
