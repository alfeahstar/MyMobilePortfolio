import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { useFonts, PlayfairDisplay_400Regular, PlayfairDisplay_700Bold } from '@expo-google-fonts/playfair-display';
import { FuzzyBubbles_400Regular, FuzzyBubbles_700Bold } from '@expo-google-fonts/fuzzy-bubbles';
import { Text } from 'react-native';
import HomeScreen from './src/home';
import AboutMeScreen from './src/about';
import { ThemeProvider } from './src/theme'; 

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Fuzzy-Bubbles': FuzzyBubbles_400Regular,
    'Fuzzy-Bubbles-Bold': FuzzyBubbles_700Bold,
    'Playfair-Display': PlayfairDisplay_400Regular,
    'Playfair-Display-Bold': PlayfairDisplay_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.ScaleFromCenterAndroid,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutMeScreen} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </ThemeProvider>
  );
}
