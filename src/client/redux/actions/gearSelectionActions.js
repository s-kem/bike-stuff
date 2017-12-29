import {
  SET_COMPARISON_RATIO,
  SET_SELECTED_CASSETTE,
  SET_SELECTED_CRANK,
} from '../constants/gearSelections'

export const setSelectedCrank = payload => ({ type: SET_SELECTED_CRANK, payload })
export const setSelectedCassette = payload => ({ type: SET_SELECTED_CASSETTE, payload })
export const setComparisonRatio = payload => ({ type: SET_COMPARISON_RATIO, payload })

export default {
  setSelectedCrank,
  setSelectedCassette,
  setComparisonRatio,
}
