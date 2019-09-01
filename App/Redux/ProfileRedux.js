import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { Images } from '../Themes'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  profileRequest: ['data'],
  profileSuccess: ['payload'],
  profileFailure: null
})

export const ProfileTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  data: null,
  fetching: null,
  payload: null,
  error: null,
  avatar: Images.profileAvatar,
  name: 'Benjamin McGuire',
  playlist: 25,
  downloads: 60
})

/* ------------- Selectors ------------- */

export const ProfileSelectors = {
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
  [Types.PROFILE_REQUEST]: request,
  [Types.PROFILE_SUCCESS]: success,
  [Types.PROFILE_FAILURE]: failure
})
