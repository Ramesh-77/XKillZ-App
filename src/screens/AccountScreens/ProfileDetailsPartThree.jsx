import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Pressable, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import localImage from "../../assets/uploadImage.png"
import { launchImageLibrary } from 'react-native-image-picker';
import { launchCamera } from 'react-native-image-picker';


const ProfileDetailsPartThree = () => {
    const [image, setImage] = useState(localImage);

    const handlePress = () => {
        Alert.alert("Choose an option", "Do you want to take a photo or choose from a gallery?", [
            {
                text: "Take Photo",
                onPress: handleCameraLaunch
            },
            {
                text: "Choose from Gallery",
                onPress: openImagePicker
            },
            {
                text: "Cancel",
                style: "cancel"
            }
        ], { cancelable: true })
    }


    const navigation = useNavigation()


    const handlePrev = () => {
        navigation.navigate('ProfileDetailsPartTwo')
    };
    const hanldeSave = () => {
        Alert.alert("Profile Created", "Your profile is created successfully", [
            {
                text: "OK",
                onPress: () => navigation.navigate('Login')
, 
            }
        ])
    }

    //  for image upload function 
    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setImage(imageUri);
            }
        });
    };

    const handleCameraLaunch = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchCamera(options, response => {
            if (response.didCancel) {
                console.log('User cancelled camera');
            } else if (response.error) {
                console.log('Camera Error: ', response.error);
            } else if (response.assets && response.assets.length > 0) {
                const imageUri = response.assets?.[0]?.uri
                if (typeof imageUri === 'string') {
                    setImage({ uri: imageUri })
                }
                setImage(imageUri);
            }
        });
    }




    return (
        <SafeAreaView style={styles.container}>

            {/*occupation, skills ownded, experience, location text */}
            <View style={styles.personalDetailsText}>
                <Text style={styles.personalDetailText}>Personal Details</Text>
                <Text>Provide your personal details to enhance your skill exchanging experience and connect with like-minded individuals.</Text>
            </View>
            <View>
                {/* description */}
                <View>
                    <View style={styles.descriptionField}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.descriptionLabel}>Description</Text>
                            <Text style={{ color: 'red', marginLeft: 2 }}>*</Text>
                        </View>
                        <View>
                            <Text style={{ fontWeight: "bold", fontSize: 15 }}>50/100 words</Text>
                        </View>
                    </View>
                    <TextInput
                        style={styles.skillOwnedTextField}
                        placeholder="Describe about yourself..."
                        placeholderTextColor="#555"
                        multiline
                    />
                </View>

                {/* Achievements */}
                <View>
                    <View style={styles.descriptionField}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.descriptionLabel}>Achievements</Text>
                            <Text style={{ color: 'red', marginLeft: 2 }}>*</Text>
                        </View>
                    </View>
                    <TextInput
                        style={styles.skillOwnedTextField}
                        placeholder="Add your achievements..."
                        placeholderTextColor="#555"
                        multiline
                    />
                </View>
                {/* upload profile picture */}
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.experienceLabel}>Upload your profile picture</Text>
                        <Text style={{ color: 'red', marginLeft: 2 }}>*</Text>
                    </View>
                    <TouchableOpacity style={styles.uploadContainer} onPress={handlePress}>
                        <View style={styles.uploadBox}>
                            <Image source={typeof image === 'string' ? { uri: image } : image} resizeMode="contain" style={styles.uploadImage} />
                        </View>
                    </TouchableOpacity>

                </View>



            </View>

            {/* sign in btn */}
            <View style={styles.prevNextBtnContainer}>
                <Pressable style={[styles.btnContainer, styles.btnPrev]} onPress={handlePrev}>
                    <Ionicons name="chevron-back-outline" size={20} color="#ffffff" />
                    <Text style={styles.btnText}>Prev</Text>
                </Pressable>
                <Pressable style={styles.btnContainer} onPress={hanldeSave}>
                    <Text style={styles.btnText}>Save</Text>
                    <Ionicons name="chevron-forward-outline" size={20} color="#ffffff" />
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

export default ProfileDetailsPartThree;
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
    descriptionLabel: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: "3%",
    },
    descriptionField: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: "3%"


    },



    prevNextBtnContainer: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "17%"
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
    uploadBtn: {
        backgroundColor: '#0D62EA',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
    },
    uploadText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    imagePreview: {
        marginTop: 15,
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 1,
        borderColor: '#000',
    },
    uploadContainer: {
        width: '100%',
        marginVertical: 10,
    },
    uploadBox: {
        width: '100%',
        height: 120, // or adjust as needed
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        borderStyle: 'dashed',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#fff',
    },
      uploadImage: {
        width: 100,
        height: 100,
      },


});
