import React, { Component } from 'react'
import { StatusBar, View, Text } from 'react-native'
import { connect } from 'react-redux'

// Styles
import styles from './Styles/MusicScreenStyle'

class MusicScreen extends Component {
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
        <StatusBar backgroundColor='white' barStyle='dark-content' />

        <Text style={styles.welcome}>Hello World!</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(MusicScreen)
