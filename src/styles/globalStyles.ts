import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
  pink: {
    flex: 1,  
  },
  glitter: {
    position: 'absolute', 
    width: '100%', 
    height: '100%', 
    zIndex: 1, 
    top: 0,
    left: 0,
    opacity: 0.8, 
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, 
  },
  
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 80, 
  },
  text: {
    fontSize: 30,
    marginTop: 10,    
    fontFamily: 'Playfair-Display-Bold',
  },
  description: {
    fontSize: 15,
    textAlign: 'justify',
    marginTop: 10,
    paddingHorizontal: 30,
    fontFamily: 'Playfair-Display',
    
  },
  
  profileWrapper: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
    shadowColor: '#402a31', 
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 12,
    elevation: 50,
  },

  sticker: {
    width: 50,  
    height: 50,
    position: 'absolute',
    top: 3,  
    left: '33.5%',  
    transform: [{ translateX: -30 }],  
    zIndex: 999,  
    elevation: 999,  
  },

  button: {
    marginTop: 18,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowColor: '#6a2c3a', 
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  },
  buttonText: {
    color: '#F5EEE6',
    fontSize: 15,
    fontWeight: 'bold',
  },

  darkModeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
});

export default globalStyles;
