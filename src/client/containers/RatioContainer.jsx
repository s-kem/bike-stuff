import { connect } from 'react-redux'
import {
  getSelectedCassetteValues,
  getSelectedCrankValues,
} from '../redux/selectors/getGearSelectValues'
import GearSelectionsContainer from './GearSelectionsContainer'
import RatioChart from '../components/RatioChart'
import React from 'react'

const RatioContainer = ({
  selectedCassette,
  selectedCrank,
}) => (
  <div>
    <GearSelectionsContainer />
    <RatioChart
      cassetteGears={selectedCassette}
      crankGears={selectedCrank}
    />
  </div>
)

const mapStateToProps = state => ({
  selectedCrank: getSelectedCrankValues(state),
  selectedCassette: getSelectedCassetteValues(state),
})

export default connect(mapStateToProps, {})(RatioContainer)
