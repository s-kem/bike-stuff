import { connect } from 'react-redux'
import {
  getSelectedCassetteValues,
  getSelectedCrankValues,
} from '../redux/selectors/getGearSelectValues'
import GearSelectionsContainer from './GearSelectionsContainer'
import RatioChart from '../components/RatioChart'
import RatioComparisonContainer from './RatioComparisonContainer'
import React from 'react'

const RatioContainer = ({
  selectedCassette,
  selectedCrank,
  comparisonRatio,
}) => (
  <div>
    <GearSelectionsContainer />
    <RatioComparisonContainer />
    <RatioChart
      cassetteGears={selectedCassette}
      comparisonRatio={comparisonRatio}
      crankGears={selectedCrank}
    />
  </div>
)

const mapStateToProps = state => ({
  selectedCrank: getSelectedCrankValues(state),
  selectedCassette: getSelectedCassetteValues(state),
  comparisonRatio: parseFloat(state.gearSelections.comparisonRatio, 10),
})

export default connect(mapStateToProps, {})(RatioContainer)
