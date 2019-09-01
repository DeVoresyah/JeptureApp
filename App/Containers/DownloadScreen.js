import React, { Component } from 'react'
import { StatusBar, View, ScrollView, Text, RefreshControl } from 'react-native'
import { Tab, Tabs, ScrollableTab } from 'native-base'
import { connect } from 'react-redux'
import { Colors } from '../Themes'
import PlaylistCard from '../Components/PlaylistCard'
import EpisodeCard from '../Components/EpisodeCard'
import {
  Placeholder,
  PlaceholderLine,
  Fade
} from "rn-placeholder"

// Styles
import styles from './Styles/DownloadScreenStyle'

class DownloadScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  })

  constructor (props) {
    super(props)

    this.state = {
      fetchingPlaylist: false,
      fetchingEpisode: false,
      refreshPlaylist: false,
      refreshEpisode: false
    }
  }

  componentDidMount() {
    this.onFetching()
  }

  onFetching = () => {
    this.setState({
      fetchingEpisode: true,
      fetchingPlaylist: true
    })

    setTimeout(() => {
      this.setState({
        fetchingEpisode: false,
        fetchingPlaylist: false
      })
    }, 1500)
  }

  onRefreshPlaylist = () => {
    this.setState({ fetchingPlaylist:true, refreshPlaylist:true })

    setTimeout(() => this.setState({ fetchingPlaylist:false, refreshPlaylist:false }), 1500)
  }

  onRefreshEpisode = () => {
    this.setState({ fetchingEpisode:true, refreshEpisode:true })
    
    setTimeout(() => this.setState({ fetchingEpisode:false, refreshEpisode:false }), 1500)
  }

  _renderLoadingPlaylist = () => {
    const arr = [1, 2, 3, 4, 5]

    return arr.map((item, index) => (
      <Placeholder Animation={Fade} key={index}>
        <View key={index} style={styles.cardContainer}>
          <View style={{flex:0.35}}>
            <View style={styles.mediaPlaceholder} />
          </View>

          <View style={{flex:0.65}}>
            <PlaceholderLine width={100} />

            <PlaceholderLine width={90} />
            <PlaceholderLine width={80} />

            <PlaceholderLine width={60} />
          </View>
        </View>
      </Placeholder>
    ))
  }

  _renderPlaylist = () => {
    const { playlist } = this.props.download

    return playlist.map((item, index) => (
      <PlaylistCard key={index} data={item} />
    ))
  }

  _renderLoadingEpisode = () => {
    const arr = [1,2,3,4,5]

    return arr.map((item, index) => (
      <Placeholder Animation={Fade} key={index}>
        <View style={styles.episodeContainer}>
          <PlaceholderLine width={95} />

          <PlaceholderLine width={40} />

          <PlaceholderLine width={100} />
          <PlaceholderLine width={100} />
        </View>
      </Placeholder>
    ))
  }

  _renderEpisode = () => {
    const { episode } = this.props.download

    return episode.map((item, index) => (
      <EpisodeCard key={index} data={item} />
    ))
  }

  render () {
    const { fetchingEpisode, fetchingPlaylist, refreshEpisode, refreshPlaylist } = this.state

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='white' barStyle='dark-content' />
        
        <View style={styles.headerWrapper}>
          <View style={{flex:0.6}}>
            <Text style={styles.headerTitle}>Download</Text>
            <Text style={styles.headerDesc}>Listen to all your playlists offline right here.</Text>
          </View>
        </View>

        <Tabs 
          style={{marginTop:15}}
          renderTabBar={() => (
            <ScrollableTab tabsContainerStyle={{justifyContent:'flex-start', height:35}} style={{borderWidth:0}} />
          )}
          tabBarUnderlineStyle={{height:2, backgroundColor:Colors.primary}}
          tabBarBackgroundColor={Colors.snow}
        >
          <Tab
            heading='Playlist' 
            tabStyle={styles.defaultTab} 
            activeTabStyle={styles.activeTab}
            textStyle={styles.defaultTabLabel}
            activeTextStyle={styles.activeTabLabel}
          >
            <ScrollView 
              style={{flex:1}}
              refreshControl={<RefreshControl
                refreshing={refreshPlaylist}
                onRefresh={this.onRefreshPlaylist}/>
              }
            >
              {fetchingPlaylist ? this._renderLoadingPlaylist() : this._renderPlaylist()}
            </ScrollView>
          </Tab>

          <Tab
            heading='Episode' 
            tabStyle={styles.defaultTab} 
            activeTabStyle={styles.activeTab}
            textStyle={styles.defaultTabLabel}
            activeTextStyle={styles.activeTabLabel}
          >
            <ScrollView 
              style={{flex:1}}
              refreshControl={<RefreshControl
                refreshing={refreshEpisode}
                onRefresh={this.onRefreshEpisode}/>
              }
            >
              {fetchingEpisode ? this._renderLoadingEpisode() : this._renderEpisode()}
            </ScrollView>
          </Tab>
        </Tabs>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    download: state.download
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadScreen)
