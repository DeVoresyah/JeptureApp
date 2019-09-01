import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.snow,
    padding: 20
  },
  headerWrapper: {
    borderBottomWidth: 1,
    borderColor: 'rgba(193,218,237, 1)',
    paddingTop: 15,
    paddingBottom: 15,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: 115,
    height: 115,
    alignSelf: 'center',
    marginBottom: 15
  },
  name: {
    fontFamily: Fonts.type.medium,
    color: Colors.black,
    fontSize: Fonts.size.regular,
    textAlign: 'center',
    marginBottom: 10
  },
  btnFind: {
    borderWidth: 1,
    borderColor: Colors.secondary,
    paddingTop: 2,
    paddingLeft: 15,
    paddingRight: 15,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 40
  },
  btnFindLabel: {
    fontFamily: Fonts.type.regular,
    color: Colors.secondary,
    fontSize: Fonts.size.medium,
    textAlign: 'center',
  },
  col: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  colIcon: {
    width: 15,
    height: 15
  },
  colLabel: {
    fontFamily: Fonts.type.regular,
    color: Colors.black,
    fontSize: Fonts.size.medium,
    marginLeft: 10
  },
  btnMenu: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  btnMenuLabel: {
    fontFamily: Fonts.type.medium,
    color: Colors.black,
    fontSize: Fonts.size.medium
  },
  arrowIcon: {
    width: 11,
    height: 15
  },
  btnSignOut: {
    backgroundColor: Colors.secondary,
    padding: 10,
    width: '80%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  btnSignOutLabel: {
    fontFamily: Fonts.type.semi,
    color: Colors.snow,
    fontSize: Fonts.size.input,
    textAlign: 'center'
  }
})