import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.h4,
    color: Colors.black,
    textAlign: 'center'
  }
})
