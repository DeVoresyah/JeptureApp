import React, { Component } from 'react'
import { View, StatusBar, Image } from 'react-native'
import { connect } from 'react-redux'
import { Colors, Images } from '../Themes'

// Styles
import styles from './Styles/SplashScreenStyle'

class SplashScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    setTimeout(() => this.props.navigation.navigate('Auth'), 2000)
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={Colors.snow} barStyle='dark-content' />

        <Image source={Images.logo} style={styles.logo} resizeMode='stretch' />
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

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen)
