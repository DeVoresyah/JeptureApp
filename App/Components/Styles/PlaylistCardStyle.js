import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '99%',
    marginTop: 1,
    marginLeft: 1,
    borderRadius: 4,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    flexDirection: 'row',
    marginBottom: 10,
    backgroundColor: Colors.snow
  },
  thumbnail: {
    width: 95,
    height: 84
  },
  title: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.small,
    color: Colors.black,
    marginBottom: 5
  },
  desc: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.small,
    color: Colors.muted,
    marginBottom: 5
  },
  footerLabel: {
    fontFamily: Fonts.type.regular,
    fontSize: 10,
    color: Colors.muted,
  },
  playIcon: {
    width: 15,
    height: 15,
    marginRight: 5
  }
})
