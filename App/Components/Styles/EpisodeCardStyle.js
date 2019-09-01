import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(193,218,237, 1)',
    paddingBottom: 15,
    marginBottom: 15  
  },
  headerTitle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  title: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.medium,
    color: Colors.black,
  },
  desc: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.small,
    color: Colors.muted,
  },
  detailIcon: {
    width: 20,
    height: 6
  },
  infoWrapper: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    marginBottom: 5
  }
})
