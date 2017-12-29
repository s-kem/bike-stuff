import {
  SET_SELECTED_CASSETTE,
  SET_SELECTED_CRANK,
} from '../constants/gearSelections'
import { combineReducers } from 'redux'

const initialCassetteList = [
  {
    id: 1,
    teeth: [ 34, 30, 25, 23, 21, 19, 17, 15, 13, 11 ],
    label: 'Shimano 11/34',
  },
]

const initialCrankList = [
  {
    id: 1,
    teeth: [ 50, 34 ],
    label: 'Shimano Tiagra 50/34',
  },
]
const selectedCrank = (state = 1, action = {}) => {
  switch ( action.type ) {
    case SET_SELECTED_CRANK: return action.payload
    default: return state
  }
}

const selectedCassette = (state = 1, action = {}) => {
  switch ( action.type ) {
    case SET_SELECTED_CASSETTE: return action.payload
    default: return state
  }
}

const cassetteTypes = ( state = initialCassetteList, action = {}) => {
  switch ( action.type ) {
    default: return state
  }
}

const crankTypes = ( state = initialCrankList, action = {}) => {
  switch ( action.type ) {
    default: return state
  }
}

export default combineReducers({
  selectedCrank,
  selectedCassette,
  cassetteTypes,
  crankTypes,
})
