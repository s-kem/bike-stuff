import { compose, withState } from 'recompose'
import { connect } from 'react-redux'
import { setComparisonRatio } from '../redux/actions/gearSelectionActions'
import React from 'react'
import TextField from 'material-ui/TextField'

const enhance = compose(
  withState('frontGear', 'setFrontGear', 0),
  withState('rearGear', 'setRearGear', 0)
)

const RatioContainer = ({
  comparisonRatio,
  frontGear,
  rearGear,
  setFrontGear,
  setRearGear,
  setComparisonRatio,
}) => {
  const handleChange = (type, value) => {
    const front = type === 'front' ? value : frontGear
    const rear = type === 'rear' ? value : rearGear

    if ( type === 'front' ) {
      setFrontGear(value)
    } else if ( type === 'rear' ) {
      setRearGear(value)
    }
    if ( front && rear ) {
      setComparisonRatio(front / rear)
    }
  }

  return (
    <div>
      <TextField
        floatingLabelText='Input front gear'
        onChange={evt => handleChange('front', evt.target.value)}
        value={frontGear}
      />
      <TextField
        floatingLabelText='Input rear gear'
        onChange={evt => handleChange('rear', evt.target.value)}
        value={rearGear}
      />
      <TextField
        floatingLabelText='Input desired ratio'
        onChange={evt => setComparisonRatio(evt.target.value)}
        value={comparisonRatio}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  comparisonRatio: state.gearSelections.comparisonRatio,
})

export default connect(mapStateToProps, { setComparisonRatio })(enhance(RatioContainer))
