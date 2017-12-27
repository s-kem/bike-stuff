import { createSelector } from 'reselect'
import {
  getCassetteTypes,
  getCrankTypes,
  getSelectedCassette,
  getSelectedCrank,
} from './'
import find from 'lodash/find'

export const getSelectedCassetteValues = createSelector(
  getCassetteTypes,
  getSelectedCassette,
  (cassetteTypes, selectedCassette) => {
    const val = find(cassetteTypes, ({ id }) => id === selectedCassette)

    return val && val.teeth
  }
)

export const getSelectedCrankValues = createSelector(
  getCrankTypes,
  getSelectedCrank,
  (crankTypes, selectedCrank) => {
    const val = find(crankTypes, ({ id }) => id === selectedCrank)

    return val && val.teeth
  }
)
