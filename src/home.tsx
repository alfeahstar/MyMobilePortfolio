import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import globalStyles from './styles/globalStyles';
import glitterAnimation from './animation/glitter.json';
import { useThemeSettings } from './theme';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { darkModeEnabled, switchTheme } = useThemeSettings();

  return (
    <ImageBackground 
      source={darkModeEnabled ? require('./img/dark.png') : require('./img/pink.png')} 
      style={globalStyles.pink} 
      resizeMode="cover"
    >
      {/* Glitter Animation */}
      <View style={globalStyles.overlay} pointerEvents="none">
        <LottieView 
          source={glitterAnimation}
          autoPlay 
          loop 
          style={globalStyles.glitter} 
        />
      </View>

      <View style={globalStyles.container}>
        <View style={globalStyles.profileWrapper}>
          
          <Image source={darkModeEnabled ? require('./img/darkstar.png') : require('./img/star.png')} style={globalStyles.sticker} />
          <Image source={require('./img/profile.jpg')} style={globalStyles.profileImage} />
        </View>

        <Text style={[globalStyles.text, { color: darkModeEnabled ? '#EAEAEA' : '#860A35' }]}>
          Alfeah Star Punzalan
        </Text>
        <Text style={[globalStyles.description, { color: darkModeEnabled ? '#EAEAEA' : '#860A35' }]}>
        I am a third-year Computer Science student at De La Salle Lipa.  Coding can be difficult, 
        but I enjoy the sense of accomplishment that comes with solving problems and making things work. I am continuously learning through projects, 
        exploring new technologies, and refining my skills step by step.
        </Text>

        <TouchableOpacity 
          style={[globalStyles.button, { backgroundColor: darkModeEnabled ? '#4E4E50' : '#944E63' }]} 
          onPress={() => navigation.navigate("About")} 
        >
          <Text style={globalStyles.buttonText}>More About Me</Text>
        </TouchableOpacity>

        
        <TouchableOpacity style={globalStyles.darkModeButton} onPress={switchTheme}>
          <Feather 
            name={darkModeEnabled ? "moon" : "sun"} 
            size={24} 
            color={darkModeEnabled ? "#EAEAEA" : "#662639"} 
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
