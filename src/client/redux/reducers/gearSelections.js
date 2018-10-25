import {
  SET_COMPARISON_RATIO,
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
  {
    id: 2,
    teeth: [ 11, 12, 13, 14, 16, 18, 20, 22, 25, 28, 32 ],
    label: 'Shimano Ultegra R8000 11/32',
  }, {
    id: 3,
    teeth: [ 11, 13, 15, 17, 19, 21, 24, 27, 31, 35, 40 ],
    label: 'Shimano XT M8000 11/40',
  },
]

const initialCrankList = [
  {
    id: 1,
    teeth: [ 50, 34 ],
    label: 'Shimano 50/34 Compact Crankset',
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

const cassetteTypes = (state = initialCassetteList, action = {}) => {
  switch ( action.type ) {
    default: return state
  }
}

const crankTypes = (state = initialCrankList, action = {}) => {
  switch ( action.type ) {
    default: return state
  }
}

const comparisonRatio = (state = 0, action = {}) => {
  switch ( action.type ) {
    case SET_COMPARISON_RATIO: return action.payload
    default: return state
  }
}

export default combineReducers({
  selectedCrank,
  selectedCassette,
  cassetteTypes,
  crankTypes,
  comparisonRatio,
})
