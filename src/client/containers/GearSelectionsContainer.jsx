import { connect } from 'react-redux'
import {
  getCassetteSelectOptions,
  getCrankSelectOptions,
} from '../redux/selectors/getGearSelectOptions'
import MenuItem from 'material-ui/MenuItem'
import React from 'react'
import SelectField from 'material-ui/SelectField'
import gearSelectionActions from '../redux/actions/gearSelectionActions'

const handleChange = action => (event, index, value) => action(value)

const RatioContainer = ({
  setSelectedCrank,
  setSelectedCassette,
  cassetteTypes,
  crankTypes,
  selectedCassette,
  selectedCrank,
}) => (
  <div>
    <SelectField
      onChange={handleChange(setSelectedCrank)}
      placeholder='Select Crank'
      value={selectedCrank}
    >
      {crankTypes.map(({ value, label }) => (
        <MenuItem key={`${value}-${label}`} primaryText={label} value={value} />
      ))}
    </SelectField>
    <SelectField
      onChange={handleChange(setSelectedCassette)}
      placeholder='Select Cassette'
      value={selectedCassette}
    >
      {cassetteTypes.map(({ value, label }) => (
        <MenuItem key={`${value}-${label}`} primaryText={label} value={value} />
      ))}
    </SelectField>
  </div>
)

const mapStateToProps = state => ({
  cassetteTypes: getCassetteSelectOptions(state),
  crankTypes: getCrankSelectOptions(state),
  selectedCrank: state.gearSelections.selectedCrank,
  selectedCassette: state.gearSelections.selectedCassette,
})

export default connect(mapStateToProps, { ...gearSelectionActions })(RatioContainer)
