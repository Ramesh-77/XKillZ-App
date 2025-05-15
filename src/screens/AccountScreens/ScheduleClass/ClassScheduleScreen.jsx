import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Pressable, TextInput, ScrollView } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Calendar } from 'react-native-calendars';
import DateTimePicker from '@react-native-community/datetimepicker';




const ClassScheduleScreen = () => {
    const navigation = useNavigation();
    const [showDaysForm, setShowDaysForm] = useState(false);
    const [totalDays, setTotalDays] = useState('30');
    const [gapDays, setGapDays] = useState('2');
    // for the date pickter
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [swapDate, setSwapDate] = useState(new Date());

    // Get today's date
    const today = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(today);

    // for the timings 
    const [timeRange, setTimeRange] = useState({
        start: new Date(), // default to current time
        end: new Date(new Date().getTime() + 60 * 60 * 1000) // 1 hour later
    });
    const [showStartPicker, setShowStartPicker] = useState(false);
    const [showEndPicker, setShowEndPicker] = useState(false);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        }).toLowerCase(); // => "4:00 pm"
    };

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
                    {/* <View style={{ flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 2, borderColor: "#09B4E4", padding: 10, borderRadius: 10 }}> */}
                    <Pressable
                        onPress={() => setShowDaysForm(!showDaysForm)}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 10,
                            borderWidth: 2,
                            borderColor: "#09B4E4",
                            padding: 10,
                            borderRadius: 10
                        }}
                    >
                        <Text>Days</Text>
                        <AntDesign name={showDaysForm ? "up" : "down"} size={20} color="#000000" />
                    </Pressable>
                    {/* show days form */}
                    {/* </View> */}
                    <TextInput placeholder="Monday, Tuesday, etc." style={{ backgroundColor: "#AFE8F6", width: "70%", paddingHorizontal: 10, borderRadius: 10 }} />
                </View>
                {showDaysForm && (
                    <View style={{
                        backgroundColor: "#AFE8F6",
                        padding: 15,
                        borderRadius: 10,
                        marginTop: 10,
                        gap: 10,
                        width: "70%"
                    }}>
                        <Text>Select your dates and create a class schedule that suits your availability</Text>
                        {/* label and text field for total days */}
                        <View style={{ gap: 10 }}>
                            <Text>Total Days</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", gap: 10, backgroundColor: "#ffffff", borderRadius: 10, opacity: 0.8 }}>
                                {/* Decrease Button */}
                                <Pressable
                                    onPress={() =>
                                        setTotalDays((prev) => {
                                            const num = Math.max(0, Math.min(30, parseInt(prev || '0') - 1));
                                            return num.toString();
                                        })
                                    }
                                >
                                    <AntDesign name="leftcircleo" size={20} color="#000000" />
                                </Pressable>
                                <TextInput
                                    placeholder="Total Days"
                                    value={totalDays}
                                    onChangeText={(text) => {
                                        const num = parseInt(text || '0');
                                        if (!isNaN(num) && num >= 0 && num <= 30) {
                                            setTotalDays(num.toString());
                                        } else if (text === '') {
                                            setTotalDays('');
                                        }
                                    }}
                                    keyboardType="numeric"
                                    style={{
                                        paddingHorizontal: 10,
                                        height: 40,
                                        textAlign: "center",
                                        minWidth: 60
                                    }}
                                />
                                {/* Increase Button */}
                                <Pressable
                                    onPress={() =>
                                        setTotalDays((prev) => {
                                            const num = Math.max(0, Math.min(30, parseInt(prev || '0') + 1));
                                            return num.toString();
                                        })
                                    }
                                >
                                    <AntDesign name="rightcircleo" size={20} color="#000000" />
                                </Pressable>
                            </View>
                        </View>

                        {/* label and text field for gap in days */}
                        <View style={{ gap: 10 }}>
                            <Text>Total Days</Text>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around", gap: 10, backgroundColor: "#ffffff", borderRadius: 10, opacity: 0.8 }}>
                                {/* Decrease Button */}
                                <Pressable
                                    onPress={() =>
                                        setGapDays((prev) => {
                                            const num = Math.max(0, Math.min(30, parseInt(prev || '0') - 1));
                                            return num.toString();
                                        })
                                    }
                                >
                                    <AntDesign name="leftcircleo" size={20} color="#000000" />
                                </Pressable>
                                <TextInput
                                    // placeholder="Gap in days"
                                    value={gapDays}
                                    onChangeText={(text) => {
                                        const num = parseInt(text || '0');
                                        if (!isNaN(num) && num >= 0 && num <= 30) {
                                            setGapDays(num.toString());
                                        } else if (text === '') {
                                            setGapDays('');
                                        }
                                    }}
                                    keyboardType="numeric"
                                    style={{
                                        paddingHorizontal: 10,
                                        height: 40,
                                        textAlign: "center",
                                        minWidth: 60
                                    }}
                                />
                                {/* Increase Button */}
                                <Pressable
                                    onPress={() =>
                                        setGapDays((prev) => {
                                            const num = Math.max(0, Math.min(30, parseInt(prev || '0') + 1));
                                            return num.toString();
                                        })
                                    }
                                >
                                    <AntDesign name="rightcircleo" size={20} color="#000000" />
                                </Pressable>
                            </View>
                        </View>
                        {/* done btn */}
                        <Pressable
                            onPress={() => setShowDaysDropdown(false)}
                            style={{
                                backgroundColor: "#09B4E4",
                                paddingVertical: 10,
                                borderRadius: 10,
                                marginTop: 5,
                                alignItems: "center"
                            }}
                        >
                            <Text style={{ color: "#fff", fontWeight: "600", letterSpacing: 1 }}>Done</Text>
                        </Pressable>
                    </View>
                )}
                {showDaysForm && (

                    <View style={{ flexDirection: "row", alignItems: "center", gap: 20, marginTop: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 2, borderColor: "#09B4E4", padding: 10, borderRadius: 10 }}>
                            <Pressable onPress={() => setShowDatePicker(true)}>
                                <Text>Swap Date</Text>
                            </Pressable>
                        </View>

                        <Pressable
                            style={{
                                backgroundColor: "#AFE8F6",
                                width: "65%",
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                                borderRadius: 10,
                            }}
                            onPress={() => setShowDatePicker(true)}
                        >
                            {/* this give the full date with 28 april 2025 type with the current date */}
                            <Text>{swapDate.toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                            })}</Text>
                        </Pressable>

                        {/* Date Picker (conditionally rendered) */}
                        {showDatePicker && (
                            <DateTimePicker
                                value={swapDate}
                                mode="date"
                                display="default"
                                onChange={(event, selectedDate) => {
                                    setShowDatePicker(false);
                                    if (selectedDate) setSwapDate(selectedDate);
                                }}
                            />
                        )}
                    </View>

                )}
                {/* Timinigs */}
                <View style={{ flexDirection: "row", alignItems: "center", gap: 20, marginTop: 20 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, borderWidth: 2, borderColor: "#09B4E4", padding: 10, borderRadius: 10 }}>
                        <Pressable onPress={() => setShowStartPicker(true)}>
                            <Text>Timings</Text>
                        </Pressable>
                        {/* <AntDesign name="down" size={20} color="#000000" /> */}
                    </View>

                    <Pressable
                        onPress={() => setShowStartPicker(true)}
                        style={{
                            backgroundColor: "#AFE8F6",
                            width: "65%",
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                            borderRadius: 10
                        }}
                    >
                        <Text>{`${formatTime(timeRange.start)} - ${formatTime(timeRange.end)}`}</Text>
                    </Pressable>

                    {/* Start Time Picker */}
                    {showStartPicker && (
                        <DateTimePicker
                            value={timeRange.start}
                            mode="time"
                            is24Hour={false}
                            display="default"
                            onChange={(event, selectedTime) => {
                                setShowStartPicker(false);
                                if (selectedTime) {
                                    setTimeRange(prev => ({ ...prev, start: selectedTime }));
                                    setShowEndPicker(true);
                                }
                            }}
                        />
                    )}

                    {/* End Time Picker */}
                    {showEndPicker && (
                        <DateTimePicker
                            value={timeRange.end}
                            mode="time"
                            is24Hour={false}
                            display="default"
                            onChange={(event, selectedTime) => {
                                setShowEndPicker(false);
                                if (selectedTime) {
                                    setTimeRange(prev => ({ ...prev, end: selectedTime }));
                                }
                            }}
                        />
                    )}
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
                        <Text style={{ color: "#fff", letterSpacing: 1 }}>Clear</Text>
                    </Pressable>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                        <Pressable style={{ backgroundColor: "grey", padding: 10, borderRadius: 10 }}>
                            <Text style={{ color: "#fff", letterSpacing: 1 }}>Cancel</Text>
                        </Pressable>
                        <Pressable style={{ backgroundColor: "#09B4E4", paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10 }} onPress={() => navigation.navigate("SelectPersonScreen")}>
                            <Text style={{ color: "#fff", letterSpacing: 1 }}>OK</Text>
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
