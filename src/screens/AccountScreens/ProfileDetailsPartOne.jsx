import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

const ProfileDetailsPartOne = () => {
    const navigation = useNavigation()

    // Get today's date
    const today = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(today);
    const handlePrev = () => {
        navigation.navigate('Register')
    };
    const handleNext = ()=>{
        navigation.navigate("ProfileDetailsPartTwo")
    }




    return (
        <SafeAreaView style={styles.container}>

            {/* Container for login input field, text */}
            <View style={styles.personalDetailsText}>
                <Text style={styles.personalDetailText}>Personal Details</Text>
                <Text>Provide your personal details to enhance your skill exchanging experience and connect with like-minded individuals.</Text>
            </View>
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.dobText}>Date of Birth</Text>
                    <Text style={{ color: 'red', marginLeft: 2 }}>*</Text>
                </View>
                <View style={styles.calendarContainer}>
                    <Calendar
                        current={selectedDate}
                        onDayPress={day => setSelectedDate(day.dateString)}
                        markedDates={{
                            [selectedDate]: { selected: true, selectedColor: '#0D62EA' }
                        }}
                        style={styles.calendar}
                        theme={{
                            // selectedDayTextColor: '#ffffff',
                            // todayTextColor: '#0D62EA',
                            backgroundColor: 'transparent',
                            calendarBackground: 'transparent',
                            textSectionTitleColor: '#000',
                            dayTextColor: '#000',
                            todayTextColor: '#0D62EA',
                            selectedDayTextColor: '#ffffff',
                            textDisabledColor: '#ababab', // Brighter color for dates from previous/next month
                            textMonthFontWeight: 'bold',         // Make month text bold
                            textMonthFontSize: 20,
                        }}
                    />
                </View>
            </View>
            {/* sign in btn */}
            <View style={styles.prevNextBtnContainer}>
                <Pressable style={[styles.btnContainer, styles.btnPrev]} onPress={handlePrev}>
                    <Ionicons name="chevron-back-outline" size={20} color="#ffffff" />
                    <Text style={styles.btnText}>Prev</Text>
                </Pressable>
                <Pressable style={styles.btnContainer} onPress={handleNext}>
                    <Text style={styles.btnText}>Next</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="#ffffff" />
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default ProfileDetailsPartOne;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: "#D4EDF3"
    },
    personalDetailsText: {
        marginTop: "20%",
        gap: 10,
        marginBottom: "3%"
    },

    personalDetailText: {
        fontSize: 25,
        fontWeight: "bold",
        // color: "#0D62EA"
    },
    dobText: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: "3%"
    },
    calendarContainer: {
        backgroundColor: 'transparent',

    },

    calendar: {
        backgroundColor: 'transparent',
        // borderWidth: 0,
        // elevation: 0,
        borderWidth: 1,
        borderColor: '#000', // Black border
        borderRadius: 10,
        elevation: 0,
        marginTop: "7%"
    },


    prevNextBtnContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "50%"
    },
    btnContainer: {
        flexDirection: "row",
        backgroundColor: "#000000",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: "3%",
        paddingVertical: "2%",
        gap: 4
    },
    btnPrev: {
        backgroundColor: "rgba(0,0,0, 0.5)"
    },
    btnText: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 15
    },

});
