import { createSelector } from 'reselect'
import {
  getCassetteTypes,
  getCrankTypes,
} from './'

export const getCassetteSelectOptions = createSelector(
  getCassetteTypes, cassetteTypes => cassetteTypes.map(({ id, label }) => ({ value: id, label }))
)

export const getCrankSelectOptions = createSelector(
  getCrankTypes, crankTypes => crankTypes.map(({ id, label }) => ({ value: id, label }))
)
