import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/EpisodeCardStyle'
import { Images } from '../Themes'
import moment from 'moment'

export default class EpisodeCard extends Component {
  // Prop type warnings
  static propTypes = {
    data: PropTypes.object,
  }

  render () {
    const { data } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.headerTitle}>
          <View style={{flex:0.9}}>
            <Text style={styles.title}>{data.title}</Text>
          </View>

          <View style={{flex:0.1, alignItems:'flex-end'}}>
            <Image source={Images.detailIcon} style={styles.detailIcon} resizeMode='stretch' />
          </View>
        </View>

        <View style={styles.infoWrapper}>
          <Text style={styles.desc}>{`${moment(data.created_at).format('MMMM DD, YYYY')} • ${data.duration}`}</Text>
        </View>

        <Text style={styles.desc}>{data.desc}</Text>
      </View>
    )
  }
}
