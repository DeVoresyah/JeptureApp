import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    paddingTop: 40,
    paddingBottom: 40
  },
  logo: {
    width: 130,
    height: 143,
    marginBottom: 30
  },
  about: {
    fontFamily: Fonts.type.regular,
    color: Colors.black,
    fontSize: Fonts.size.medium,
    textAlign: 'center'
  },
  btnGetStarted: {
    marginTop: 30,
    backgroundColor: Colors.primary,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15
  },
  btnGetStartedLabel: {
    fontFamily: Fonts.type.medium,
    color: Colors.snow,
    fontSize: Fonts.size.regular,
    textAlign: 'center'
  }
})
