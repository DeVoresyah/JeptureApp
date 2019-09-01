import React, { Component } from 'react'
import { StatusBar, View, Text, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Images } from '../Themes'

// Styles
import styles from './Styles/OnBoardingScreenStyle'

class OnBoardingScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='white' />
        <Image source={Images.logo} style={styles.logo} resizeMode='stretch' />

        <Text style={styles.about}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat tortor justo, at posuere ex blandit at.</Text>

        <TouchableOpacity style={styles.btnGetStarted} activeOpacity={0.9} onPress={() => this.props.navigation.navigate('App')}>
          <Text style={styles.btnGetStartedLabel}>Get Started</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnBoardingScreen)
