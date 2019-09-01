import React, { Component } from 'react'
import { StatusBar, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Images } from '../Themes'

// Styles
import styles from './Styles/ProfileScreenStyle'

class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  constructor (props) {
    super(props)

    this.state = {
      menu: [
        'Account',
        'Device',
        'Playback',
        'Social',
        'Drive',
        'Inspiration Quality',
        'Notification',
        'Ads'
      ]
    }
  }

  render () {
    const { menu } = this.state
    const { name, avatar, playlist, downloads } = this.props.profile

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.snow} barStyle='dark-content' />

        <View style={styles.headerWrapper}>
          <Image source={avatar} style={styles.avatar} resizeMode='stretch' />

          <Text style={styles.name}>{name}</Text>

          <TouchableOpacity activeOpacity={0.9} style={styles.btnFind}>
            <Text style={styles.btnFindLabel}>Find Friend</Text>
          </TouchableOpacity>

          <View style={{flexDirection:'row', alignItems:'center', width:'100%'}}>
            <View style={styles.col}>
              <Image source={Images.profilePlaylist} style={styles.colIcon} resizeMode='stretch' />
              <Text style={styles.colLabel}>{playlist} Playlists</Text>
            </View>

            <View style={styles.col}>
              <Image source={Images.profileDownload} style={styles.colIcon} resizeMode='stretch' />
              <Text style={styles.colLabel}>{downloads} Downloads</Text>
            </View>
          </View>
        </View>
      
        <View style={{marginBottom: 20}}>
          {menu.map((item, index) => (
            <TouchableOpacity activeOpacity={0.9} style={styles.btnMenu} key={index} onPress={() => alert(`Menu ${item}`)}>
              <View style={{flex:0.9}}>
                <Text style={styles.btnMenuLabel}>{item}</Text>
              </View>

              <View style={{flex:0.1, alignItems:'flex-end'}}>
                <Image source={Images.arrowRight} style={styles.arrowIcon} resizeMode='stretch' />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity activeOpacity={0.9} style={styles.btnSignOut} onPress={() => this.props.navigation.navigate('Auth')}>
          <Text style={styles.btnSignOutLabel}>SIGN OUT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profile
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
