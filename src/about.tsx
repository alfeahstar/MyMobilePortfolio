import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, SafeAreaView, Linking } from 'react-native';
import { Feather, FontAwesome5, AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import aboutStyles from './styles/aboutStyles';
import globalStyles from './styles/globalStyles';
import { useThemeSettings } from './theme';

const profilePic = require('./img/profile.jpg');
const project1 = require('./img/project1-1.png');
const project2 = require('./img/project2-1.png');
const project3 = require('./img/project3-1.png');
const project4 = require('./img/project4-1.png');
const project5 = require('./img/project5-1.png');

interface AboutMeScreenProps {
  navigation: any;
}

const projects = [
  { id: '1', 
    username: 'Inventory Management System', 
    profilePic, 
    description: 'Track and manage inventory efficiently using React.', 
    image: project1, 
    likes: 120, 
    isLiked: false },
  { id: '2', 
    username: 'Coffee Shop Website', 
    profilePic, 
    description: 'A website for a coffee shop with a menu, online orders, and customer reviews.', 
    image: project2, 
    likes: 95, 
    isLiked: false },
  { id: '3', 
    username: 'To-do App', 
    profilePic, 
    description: 'An app to add, edit, complete, and delete tasks easily.', 
    image: project3, 
    likes: 150, 
    isLiked: false },
  { id: '4', 
    username: 'Restaurant Reservation System', 
    profilePic, 
    description: 'A system for booking restaurant tables online, managing reservations, and viewing availability.', 
    image: project4, 
    likes: 200, 
    isLiked: false },
  { id: '5', 
    username: 'Website Portfolio', 
    profilePic, 
    description: 'A personal website to showcase projects and skills with a clean and modern design.', 
    image: project5, 
    likes: 180, 
    isLiked: false },
];

const AboutMeScreen: React.FC<AboutMeScreenProps> = ({ navigation }) => {
  const { darkModeEnabled, switchTheme } = useThemeSettings();
  const [posts, setPosts] = useState(projects);

  const toggleLike = (id: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 } : post
      )
    );
  };

  interface Post {
    id: string;
    username: string;
    profilePic: any;
    description: string;
    image: any;
    likes: number;
    isLiked: boolean;
  }

  const renderPost = ({ item }: { item: Post }) => (
    <View style={[aboutStyles.postContainer, { backgroundColor: darkModeEnabled ? '#444' : '#fde2de' }]}>
      <View style={aboutStyles.postHeader}>
        <Image source={item.profilePic} style={aboutStyles.profilePic} />
        <Text style={[aboutStyles.username, { color: darkModeEnabled ? '#EAEAEA' : '#5A2A27' }]}>{item.username}</Text>
      </View>
      <Image source={item.image} style={aboutStyles.postImage} />
      <View style={aboutStyles.interactionContainer}>
        <TouchableOpacity onPress={() => toggleLike(item.id)}>
          <AntDesign name={item.isLiked ? 'heart' : 'hearto'} size={24} color={item.isLiked ? 'red' : darkModeEnabled ? '#EAEAEA' : '#5A2A27'} />
        </TouchableOpacity>
        <Text style={[aboutStyles.likesText, { color: darkModeEnabled ? '#EAEAEA' : '#5A2A27' }]}>{item.likes} likes</Text>
      </View>
      <Text style={[aboutStyles.description, { color: darkModeEnabled ? '#EAEAEA' : '#5A2A27' }]}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: darkModeEnabled ? '#333' : '#fdd2d9' }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={aboutStyles.aboutContainer}>
          <View style={[aboutStyles.topSection, { backgroundColor: darkModeEnabled ? '#333' : '#fdd2d9' }]}>
            <View style={aboutStyles.profileContainer}>
              <Image source={profilePic} style={aboutStyles.aboutProfile} />
              <View>
                <Text style={[aboutStyles.profileName, { color: darkModeEnabled ? '#EAEAEA' : '#5A2A27' }]}>Alfeah Star A. Punzalan</Text>
                <Text style={[aboutStyles.profileTitle, { color: darkModeEnabled ? '#BBB' : '#7A7A7A' }]}>BS in Computer Science</Text>
              </View>
            </View>
            <TouchableOpacity style={globalStyles.darkModeButton} onPress={switchTheme}>
              <Feather name={darkModeEnabled ? 'moon' : 'sun'} size={24} color={darkModeEnabled ? '#EAEAEA' : '#662639'} />
            </TouchableOpacity>
          </View>
          <View style={[aboutStyles.bottomSection, { backgroundColor: darkModeEnabled ? '#1E1E1E' : '#944E63' }]}>
            <Text style={[aboutStyles.aboutText, { color: darkModeEnabled ? '#EAEAEA' : '#FFE7E7' }]}>Skills</Text>
            <View style={aboutStyles.skillsContainer}>
              {[{ name: 'react', color: '#61DAFB', label: 'React' }, 
              { name: 'code', color: '#00599C', label: 'C++' }, 
              { name: 'html5', color: '#E34F26', label: 'HTML' }, 
              { name: 'css3', color: '#1572B6', label: 'CSS' }, 
              { name: 'node', color: '#68A063', label: 'Node.js' }].map((skill, index) => (
                <View key={index} style={{ alignItems: 'center' }}>
                  <View style={[aboutStyles.skillItem, { backgroundColor: darkModeEnabled ? '#444' : '#FFE7E7' }]}>
                    <FontAwesome5 name={skill.name} size={30} color={skill.color} />
                  </View>
                  <Text style={[aboutStyles.skillText, { color: darkModeEnabled ? '#EAEAEA' : '#fdd2d9' }]}>{skill.label}</Text>
                </View>
              ))}
            </View>
            <View style={[aboutStyles.separator, { backgroundColor: darkModeEnabled ? '#EAEAEA' : '#FFE7E7' }]} />
            <Text style={[aboutStyles.aboutText, { color: darkModeEnabled ? '#EAEAEA' : '#FFE7E7', marginTop: 20 }]}>Projects</Text>
            <FlatList data={posts} keyExtractor={(item) => item.id} renderItem={renderPost} scrollEnabled={false} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }} />
            
            
            <View style={[aboutStyles.separator, { backgroundColor: darkModeEnabled ? '#EAEAEA' : '#FFE7E7' }]} />

            {/* Contact Information Section */}
            <Text style={[aboutStyles.aboutText, { color: darkModeEnabled ? '#EAEAEA' : '#FFE7E7', marginTop: 20 }]}>Contacts</Text>
            <View style={aboutStyles.contactContainer}>
              <TouchableOpacity style={aboutStyles.contactItem} onPress={() => Linking.openURL('mailto:punzalanalfeah@gmail.com')}>
                <MaterialIcons name="email" size={30} color={darkModeEnabled ? '#EAEAEA' : '#FFE7E7'} />
                <Text style={[aboutStyles.contactText, { color: darkModeEnabled ? '#EAEAEA' : '#FFE7E7' }]}>punzalanalfeah@gmail.com</Text>
              </TouchableOpacity>
              <TouchableOpacity style={aboutStyles.contactItem} onPress={() => Linking.openURL('https://github.com/alfeahstar')}>
                <Entypo name="github" size={30} color={darkModeEnabled ? '#EAEAEA' : '#FFE7E7'} />
                <Text style={[aboutStyles.contactText, { color: darkModeEnabled ? '#EAEAEA' : '#FFE7E7' }]}>GitHub/alfeahstar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={aboutStyles.contactItem} onPress={() => Linking.openURL('https://facebook.com/alfeah.punzalan')}>
                <FontAwesome5 name="facebook" size={30} color={darkModeEnabled ? '#EAEAEA' : '#FFE7E7'} />
                <Text style={[aboutStyles.contactText, { color: darkModeEnabled ? '#EAEAEA' : '#FFE7E7' }]}>Facebook/alfeahpunzalan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={aboutStyles.contactItem} onPress={() => Linking.openURL('https://instagram.com/alfeahstar')}>
                <FontAwesome5 name="instagram" size={30} color={darkModeEnabled ? '#EAEAEA' : '#FFE7E7'} />
                <Text style={[aboutStyles.contactText, { color: darkModeEnabled ? '#EAEAEA' : '#FFE7E7' }]}>Instagram/alfeahpunzalan</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={[aboutStyles.aboutButton, { backgroundColor: darkModeEnabled ? '#444' : '#fdd2d9' }]} onPress={() => navigation.goBack()}>
              <Text style={[aboutStyles.aboutButtonText, { color: darkModeEnabled ? '#FFF' : '#944E63' }]}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AboutMeScreen;