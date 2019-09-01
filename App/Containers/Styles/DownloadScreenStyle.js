import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  headerWrapper: {
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'rgba(193,218,237, 1)',
    paddingBottom: 15,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  headerTitle: {
    fontFamily: Fonts.type.semi,
    color: Colors.black,
    fontSize: Fonts.size.h4
  },
  headerDesc: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.medium,
    color: Colors.muted
  },
  defaultTab: {
    backgroundColor: Colors.snow
  },
  activeTab: {
    backgroundColor: Colors.snow
  },
  defaultTabLabel: {
    fontFamily: Fonts.type.regular,
    fontSize: Fonts.size.regular,
    fontWeight: 'normal',
    color: Colors.muted
  },
  activeTabLabel: {
    fontFamily: Fonts.type.medium,
    fontSize: Fonts.size.regular,
    fontWeight: 'normal',
    color: Colors.black
  },
  cardContainer: {
    flex: 1,
    width: '99%',
    marginTop: 1,
    marginLeft: 1,
    padding: 10,
    borderRadius: 4,
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
  mediaPlaceholder: {
    backgroundColor: '#e2e2e2',
    width: 95,
    height: 84,
    borderRadius: 4
  },
  episodeContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(193,218,237, 1)',
    paddingBottom: 15,
    marginBottom: 15  
  }
})
