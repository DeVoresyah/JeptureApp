import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { Images } from '../Themes'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  downloadRequest: ['data'],
  downloadSuccess: ['payload'],
  downloadFailure: null
})

export const DownloadTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  playlist: [{
    title: 'Frist time got an inspiration',
    desc: 'got the first inspiration to stand on standup comedy',
    created_at: new Date("2019-06-03"),
    duration: '54:39',
    thumbnail: Images.image1
  }, {
    title: 'Frist time got an inspiration',
    desc: 'got the first inspiration to stand on standup comedy',
    created_at: new Date("2019-06-02"),
    duration: '52:29',
    thumbnail: Images.image2
  }, {
    title: 'Frist time got an inspiration',
    desc: 'got the first inspiration to stand on standup comedy',
    created_at: new Date("2019-06-02"),
    duration: '54:39',
    thumbnail: Images.image3
  }, {
    title: 'Frist time got an inspiration',
    desc: 'got the first inspiration to stand on standup comedy',
    created_at: new Date("2019-06-01"),
    duration: '44:12',
    thumbnail: Images.image4
  }],
  episode: [{
    title: 'Frist time got an inspiration',
    desc: 'Will Rogers was an American actor, cowboy, columnist and social commentator who believed in keeping forward.',
    created_at: new Date("2019-06-02"),
    duration: '54:39',
  }, {
    title: 'Frist time got an inspiration',
    desc: 'Will Rogers was an American actor, cowboy, columnist and social commentator who believed in keeping forward.',
    created_at: new Date("2019-06-02"),
    duration: '54:39',
  }, {
    title: 'Frist time got an inspiration',
    desc: 'Will Rogers was an American actor, cowboy, columnist and social commentator who believed in keeping forward.',
    created_at: new Date("2019-06-02"),
    duration: '54:39',
  }, {
    title: 'Frist time got an inspiration',
    desc: 'Will Rogers was an American actor, cowboy, columnist and social commentator who believed in keeping forward.',
    created_at: new Date("2019-06-02"),
    duration: '54:39',
  }, {
    title: 'Frist time got an inspiration',
    desc: 'Will Rogers was an American actor, cowboy, columnist and social commentator who believed in keeping forward.',
    created_at: new Date("2019-06-02"),
    duration: '54:39',
  }],
  fetching: null,
  payload: null,
  error: null
})

/* ------------- Selectors ------------- */

export const DownloadSelectors = {
  getData: state => state.data
}

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state, { data }) =>
  state.merge({ fetching: true, data, payload: null })

// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  return state.merge({ fetching: false, error: null, payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DOWNLOAD_REQUEST]: request,
  [Types.DOWNLOAD_SUCCESS]: success,
  [Types.DOWNLOAD_FAILURE]: failure
})
