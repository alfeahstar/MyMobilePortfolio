import { StyleSheet } from 'react-native';

const aboutStyles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
  },

  topSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    padding: 30,
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  aboutProfile: {
    width: 80,
    height: 80,
    borderRadius: 45,
    marginRight: 10,
    marginTop: 15,
  },

  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 13,
  },

  profileTitle: {
    fontSize: 14,
  },

  bottomSection: {
    flex: 3,
    alignItems: 'center',
    paddingVertical: 30,
  },

  aboutText: {
    fontSize: 25,
    marginBottom: 15,
    fontFamily: 'Playfair-Display-Bold',
    alignSelf: 'flex-start',
    paddingLeft: 20,
  },

  skillsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
    marginBottom: 20,
  },

  skillItem: {
    alignItems: 'center',
    backgroundColor: '#fde2de',
    padding: 13,
    borderRadius: 10,
  },

  skillText: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: 'bold',
  },

  postContainer: {
    marginBottom: 20,
    borderRadius: 15,
    overflow: 'hidden',
    width: '90%',
    alignSelf: 'center',
  },

  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },

  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  postImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },

  interactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  likesText: {
    marginLeft: 10,
    fontSize: 14,
  },

  description: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    fontSize: 14,
  },

  aboutButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    marginTop: 20,
  },

  aboutButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  separator: {
    height: 1,
    width: '100%',
    marginVertical: 20,
  },

  contactContainer: {
    width: '90%',
    alignSelf: 'center',
  },

  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  contactText: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default aboutStyles;