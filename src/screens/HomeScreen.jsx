import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const HEADER_HEIGHT = 70;

const dummyCategories = [
  {
    title: 'Technology & Programming',
    mentors: [
      {
        name: 'The Net Ninja',
        rating: 4.9,
        reviews: 17000,
        image: require('../assets/coder.jpg'),
      },
      {
        name: 'Traversy Media',
        rating: 4.8,
        reviews: 15200,
        image: require('../assets/java_freelearning.png'),
      },
    ],
  },
  {
    title: 'Design & Creativity',
    mentors: [
      {
        name: 'Flux Academy',
        rating: 4.7,
        reviews: 13200,
        image: require('../assets/graphic_designer.png'),
      },
      {
        name: 'CharliMarieTV',
        rating: 4.6,
        reviews: 10800,
        image: require('../assets/programmer.jpg'),
      },
    ],
  },
];


const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('Menu pressed')}>
          <Ionicons name="menu" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Search pressed')}>
          <Ionicons name="search" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Main Scroll View */}
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        <Text style={styles.headingText}>Share to Shine, Learn to Rise</Text>
        <Text style={styles.subText}>
          Connect with passionate people, Share what you know. Learn what you
          love.
        </Text>

        <Pressable style={styles.swappingSkillBtn} onPress={() => navigation.navigate('Group&Community')}>
          <Text style={styles.swappingSkillBtnText}>Start Swapping Skills</Text>
        </Pressable>

        {/* Free Learnings Section */}
        <View>
          <Text style={styles.sectionTitle}>Free Learnings</Text>

          {/* Large Card */}
          <View style={styles.imageTextCard}>
            <Image
              source={require('../assets/java_freelearning.png')}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={styles.cardTitle}>Fundamentals of Java Programming</Text>
            <View style={styles.textBookmarkIconContainer}>
              <Text>- Ramesh Pathak</Text>
              <Feather name="bookmark" size={30} color="#ababab" />
            </View>
          </View>

          {/* mentors sections */}
          <Text style={styles.sectionTitle}>Top mentors in the community</Text>

          {/* Horizontal Scroll Section */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
            style={{ marginTop: 10 }}
            contentContainerStyle={{ paddingRight: 30 }}
          >
            {dummyCategories.map((category, index) => (
              <View key={index} style={styles.horizontalCard}>
                <Text style={styles.horizontalCardTitle}>{category.title}</Text>

                {category.mentors.map((mentor, i) => (
                  <View key={i} style={styles.verticalCard}>
                    <Image
                      source={mentor.image}
                      style={styles.mentorCardImage}
                      resizeMode="cover"
                    />
                    <View style={{ marginLeft: 10 }}>
                      <Text>{mentor.name}</Text>
                      <Text>
                        <AntDesign name="star" size={15} color="#FFD95A" /> {mentor.rating} ({mentor.reviews.toLocaleString()})
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            ))}

          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#D4EDF3',
  },
  header: {
    height: HEADER_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#09B4E4',
    paddingHorizontal: 20,
    marginTop: '10%',
    zIndex: 100,
  },
  scrollContainer: {
    flex: 1,
  },
  container: {
    padding: 30,
    paddingBottom: 50,
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 15,
    marginVertical: 10,
  },
  swappingSkillBtn: {
    backgroundColor: '#09B4E4',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  swappingSkillBtnText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 15,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 15,
  },
  imageTextCard: {
    width: '100%',
    height: 270,
    overflow: 'hidden',
    borderWidth: 10,
    borderColor: '#4BC2E3',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    marginBottom: 20,
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderRadius: 25,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: '3%',
    textAlign: 'center',
  },
  textBookmarkIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingTop: '3%',
    paddingBottom: '2%',
  },
  horizontalCard: {
    width: 300,
    padding: 20,
    marginRight: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  horizontalCardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 15,
  },
  verticalCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  mentorCardImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
