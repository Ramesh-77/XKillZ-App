import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import Header from '../../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';


const SingleSkillUserDetail = ({ route }) => {
    const { user, isSwaped, isAccepted, isDeclined } = route.params;
    const navigation = useNavigation();
    const description = "I am a highly skilled and passionate Java Developer with over 8 years of experience in the software industry. With a strong background in backend development and application architecture, I have successfully built scalable and efficient systems across various domains. My ability to write clean, maintainable code and collaborate effectively with cross-functional teams has earned me a solid reputation and a consistent 4/5 performance rating."
    const achivements =
        [
            'Developed a high-performance Java application that reduced processing time by 30%.',
            'Led a team of 5 developers in creating a microservices architecture for a large-scale e-commerce platform.',
            'Implemented a CI/CD pipeline that improved deployment efficiency by 40%.',
            'Received the "Best Employee of the Year" award for outstanding contributions to multiple projects.',
            'Contributed to open-source projects, enhancing community engagement and collaboration.',
            'Mentored junior developers, fostering a culture of knowledge sharing and continuous learning.',
        ]

//  // Determine the text for the main swap-related button
//   const getSwapButtonText = () => {
//     if (isAccepted) return 'ACCEPTED';
//     if (isDeclined) return 'DECLINED';
//     if (isSwaped === true) return 'SWAPPED';
//     if (isSwaped === false) return 'UNSWAP';
//     return 'SWAP'; // fallback default
//   };




    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Header */}
            <Header showBack={true} title={user?.title} />

            {/* other content */}
            <View style={styles.mainContent}>

                {/* individual skill list */}
                {/* Render filtered user list */}
                <ScrollView style={{ flex: 1, flexDirection: "column", paddingStart: 30 }} showsVerticalScrollIndicator={false}>

                    <View key={user?.id} style={{ width: "100%", borderRadius: 10, paddingVertical: 20, marginBottom: 10 }} >
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", gap: 40 }}>

                            <Image source={user?.image} style={{ width: 100, height: 100, borderRadius: 50 }} />

                            <View>
                                <Text style={{ fontSize: 20, fontWeight: "bold", letterSpacing: 1 }}>{user?.name}</Text>
                                {/* like swap comment box */}
                                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 10, gap: 10 }}>
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
                               {/* show button based on conditions */}
                               {/* Button Logic */}
                                {/* Buttons based on status */}
                {isDeclined ? (
                  <Pressable
                    disabled={true}
                    style={{
                      width: '100%',
                      backgroundColor: '#FF0000',
                      alignItems: 'center',
                      paddingVertical: 8,
                      borderRadius: 10,
                      marginBottom: 10,
                    }}
                  >
                    <Text
                      style={{
                        letterSpacing: 1,
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: '#ffffff',
                      }}
                    >
                      DECLINED
                    </Text>
                  </Pressable>
                ) : (
                  <>
                    <Pressable
                      disabled={isAccepted}
                      style={{
                        width: '100%',
                        backgroundColor: isSwaped || isAccepted ? '#18A800' : '#000000',
                        alignItems: 'center',
                        paddingVertical: 8,
                        borderRadius: 10,
                        marginBottom: 10,
                      }}
                      onPress={() => {
                        // You can add swap/unswap logic here if needed
                      }}
                    >
                      <Text
                        style={{
                          letterSpacing: 1,
                          fontWeight: 'bold',
                          fontSize: 15,
                          color: '#ffffff',
                        }}
                      >
                        {isAccepted ? 'ACCEPTED' : isSwaped ? 'UNSWAP' : 'SWAP'}
                      </Text>
                    </Pressable>

                    {(isAccepted || isSwaped === true || isSwaped === false) && (
                      <Pressable
                        style={{
                          width: '100%',
                          backgroundColor: '#CDCDCD',
                          alignItems: 'center',
                          paddingVertical: 8,
                          borderRadius: 10,
                        }}
                        onPress={() => navigation.navigate('ChatScreen', { selectedUser: user })}
                      >
                        <Text
                          style={{
                            letterSpacing: 1,
                            fontWeight: 'bold',
                            fontSize: 15,
                          }}
                        >
                          MESSAGE
                        </Text>
                      </Pressable>
                    )}
                  </>
                )}

                            </View>
                        </View>
                    </View>
                    {/* about section */}
                    <View style={styles.aboutContainer}>
                        <View style={styles.aboutIconContainer} >
                            <Text style={{ fontSize: 20 }}>About</Text>
                            <Ionicons name="information-circle-outline" size={30} />
                        </View>
                        <View style={{ flexDirection: "column", gap: 10, }}>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, justifyContent: "flex-start" }}>
                                <FontAwesome name="phone" size={15} style={{ opacity: 0.5 }} />
                                <Text style={{ opacity: 0.5 }}>+61 - 456785672</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, justifyContent: "flex-start" }}>
                                <Fontisto name="email" size={15} style={{ opacity: 0.5 }} />
                                <Text style={{ opacity: 0.5 }}>engelbenzamin77@gmail.com</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center", gap: 10, justifyContent: "flex-start" }}>
                                <Entypo name="linkedin" size={15} style={{ opacity: 0.5 }} />
                                <Text
                                    style={{ opacity: 0.5, textDecorationLine: 'underline' }}
                                    onPress={() => Linking.openURL('https://www.linkedin.com/')}
                                >
                                    https://www.linkedin.com/
                                </Text>
                            </View>
                        </View>

                    </View>
                    {/* description section */}
                    <View style={{ marginTop: 30, gap: 10 }}>
                        <Text style={{ fontSize: 20 }}>Description</Text>
                        <Text>{description}</Text>
                    </View>
                    {/* achievements */}
                    <View style={{ marginTop: 30, gap: 10 }}>
                        <Text style={{ fontSize: 20 }}>Achievements</Text>
                        {achivements.map((achivement, index) => (
                            <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-start', }}>
                                <Text style={{ fontSize: 18, marginRight: 6 }}>{'\u2022'}</Text>
                                <Text style={{ flex: 1 }}>{achivement}</Text>
                            </View>
                        ))}
                    </View>

                </ScrollView>
            </View>

        </SafeAreaView>
    );
};

export default SingleSkillUserDetail;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#D4EDF3',
    },
    mainContent: {
        flex: 1,
        marginTop: 120
    },
    aboutContainer: {
        gap: 10
    },
    aboutIconContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    }


});
