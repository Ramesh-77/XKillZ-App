import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';

const ProfileDetailsPartTwo = () => {
    const [open, setOpen] = useState(false); // To control dropdown visibility
    const [value, setValue] = useState(null); // To store the selected occupation
    const [items, setItems] = useState([
        { label: 'Software Developer', value: 'Software Developer' },
        { label: 'Nurse', value: 'Nurse' },
        { label: 'Teacher', value: 'Teacher' },
        { label: 'Accountant', value: 'Accountant' },
        { label: 'Graphic Designer', value: 'Graphic Designer' },
        { label: 'Lawyer', value: 'Lawyer' },
        { label: 'Police Officer', value: 'Police Officer' },
        { label: 'Chef', value: 'Chef' },
        { label: 'Architect', value: 'Architect' },
        { label: 'Research Scientist', value: 'Research Scientist' },
    ]);
    const [experience, setExperience] = useState(0);
    const [location, setLocation] = useState('');



    const navigation = useNavigation()

    const handlePrev = () => {
        navigation.navigate('ProfileDetailsPartOne')
    };
    const handleNext = () => {
        navigation.navigate("ProfileDetailsPartThree")
    }




    return (
        <SafeAreaView style={styles.container}>

            {/*occupation, skills ownded, experience, location text */}
            <View style={styles.personalDetailsText}>
                <Text style={styles.personalDetailText}>Personal Details</Text>
                <Text>Provide your personal details to enhance your skill exchanging experience and connect with like-minded individuals.</Text>
            </View>
            <View>
                {/* occupation */}
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.occupationText}>Occupation</Text>
                        <Text style={{ color: 'red', marginLeft: 2 }}>*</Text>
                    </View>

                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        containerStyle={styles.dropdownContainer}
                        style={styles.dropdown}
                        dropDownStyle={styles.dropdownList}
                        placeholder="------------ Select Occupation ------------"
                        placeholderStyle={styles.placeholder}
                        listItemContainerStyle={styles.listItemContainer}
                        labelStyle={styles.labelStyle}
                    />
                </View>
                {/* skills owned */}
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.occupationText}>Skills Owned</Text>
                        <Text style={{ color: 'red', marginLeft: 2 }}>*</Text>
                    </View>
                    <TextInput
                        style={styles.skillOwnedTextField}
                        placeholder="E.g., JavaScript, UI/UX Design, Public Speaking"
                        placeholderTextColor="#555"
                        multiline
                    />
                </View>
                {/* experience number */}
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.experienceLabel}>Experience</Text>
                        <Text style={{ color: 'red', marginLeft: 2 }}>*</Text>
                    </View>
                    <View style={styles.experienceInput}>
                        <Pressable onPress={() => setExperience(prev => Math.max(prev - 1, 0))}>
                            <Ionicons name="chevron-back-circle-outline" size={30} color="#000" />
                        </Pressable>

                        <Text style={styles.experienceText}>{experience}</Text>

                        <Pressable onPress={() => setExperience(prev => prev + 1)}>
                            <Ionicons name="chevron-forward-circle-outline" size={30} color="#000" />
                        </Pressable>
                    </View>
                </View>
                {/* location */}
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.experienceLabel}>Location</Text>
                        <Text style={{ color: 'red', marginLeft: 2 }}>*</Text>
                    </View>
                    <View style={styles.experienceInput}>

                        <TextInput
                            style={styles.locationInput}
                            placeholder="Enter your location"
                            value={location}
                            onChangeText={setLocation}
                        />
                        <Pressable onPress={() => setExperience(prev => prev + 1)}>
                            <FontAwesome6 name="location-crosshairs" size={30} color="#000" />
                        </Pressable>
                    </View>
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

export default ProfileDetailsPartTwo;
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
    occupationText: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: "3%",
    },



    prevNextBtnContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "23%"
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
    // dropdown occupation 
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    dropdownContainer: {
        height: 50,
        marginBottom: 20,
    },
    dropdown: {
        backgroundColor: '#D4EDF3',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,
        opacity: 0.5
    },
    dropdownList: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 10,

    },
    placeholder: {
        color: '#000',
        textAlign: 'center'
    },
    listItemContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },

    labelStyle: {
        fontSize: 16,
        color: '#000',
    },
    skillOwnedTextField: {
        height: 100,
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        opacity: 0.7,
        backgroundColor: '#D4EDF3',
        textAlignVertical: 'top', // ensures multiline input starts at top
    },
    experienceInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // width: 150,
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        opacity: 0.5
    },

    experienceText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    experienceLabel: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: "3%",
    },
  

});
