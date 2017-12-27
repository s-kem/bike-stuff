import {
  SET_SELECTED_CASSETTE,
  SET_SELECTED_CRANK,
} from '../constants/gearSelections'

export const setSelectedCrank = payload => ({ type: SET_SELECTED_CRANK, payload })
export const setSelectedCassette = payload => ({ type: SET_SELECTED_CASSETTE, payload })

export default {
  setSelectedCrank,
  setSelectedCassette,
}
