import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/PlaylistCardStyle'
import moment from 'moment'
import { Images } from '../Themes'

export default class PlaylistCard extends Component {
  // Prop type warnings
  static propTypes = {
    data: PropTypes.object
  }

  render () {
    const { data } = this.props

    return (
      <View style={styles.container}>
        <View style={{flex:0.35}}>
          <Image source={data.thumbnail} style={styles.thumbnail} resizeMode='stretch' />
        </View>

        <View style={{flex:0.65}}>
          <Text style={styles.title}>{data.title}</Text>

          <Text style={styles.desc}>{data.desc}</Text>

          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Text style={styles.footerLabel}>{`${moment(data.created_at).format('MMMM DD, YYYY')} • ${data.duration}`}</Text>

            <View style={{flexDirection:'row', alignItems:'center'}}>
              <Image source={Images.playIcon} style={styles.playIcon} resizeMode='stretch' />
              <Text style={styles.footerLabel}>yesterday</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
