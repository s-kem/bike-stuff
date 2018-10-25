import MenuItem from '@material-ui/core/MenuItem'
import React from 'react'
import Select from '@material-ui/core/Select'
import Slider from '@material-ui/lab/Slider'
import Typography from '@material-ui/core/Typography'

const lbToKg = 0.453592
const kgToLb = 2.20462

class WattsPerKgContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ftp: 247,
      weight: 188,
      weightSelection: 'lbs',
      minWeight: 120,
      maxWeight: 200,
    }

    this.handleFtpChange = this.handleFtpChange.bind(this)
    this.handleWeightChange = this.handleWeightChange.bind(this)
    this.handleWeightSelectionChange = this.handleWeightSelectionChange.bind(this)
  }

  handleFtpChange(event, ftp) {
    this.setState({ ftp })
  }

  handleWeightChange(event, weight) {
    this.setState({ weight })
  }

  handleWeightSelectionChange({ target: { value: weightSelection }}) {
    this.setState(prevState => {
      const conversionFactor = weightSelection === 'lbs'
        ? kgToLb
        : lbToKg
        // : 2.20462

      const {
        weight: currentWeight,
        maxWeight: currentMax,
        minWeight: currentMin,
      } = prevState

      const weight = parseInt((currentWeight * conversionFactor).toFixed(0))
      const maxWeight = currentMax * conversionFactor
      const minWeight = currentMin * conversionFactor

      return { weightSelection, weight, maxWeight, minWeight }
    })
  }

  render() {
    const {
      ftp,
      weight,
      weightSelection,
      minWeight,
      maxWeight,
    } = this.state

    const powerToWeight = (weightSelection === 'lbs'
      ? ftp / ( weight * lbToKg)
      : ftp / weight).toFixed(2)

    return (
      <div style={{ width: '25%' }}>
        <Select
          inputProps={{ name: 'weight-selection', id: 'weight-selection' }}
          onChange={this.handleWeightSelectionChange}
          value={weightSelection}
        >
          <MenuItem value={'lbs'}>Pounds</MenuItem>
          <MenuItem value={'kgs'}>Kilograms</MenuItem>
        </Select>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <Typography id='ftp-label'>FTP (watts): {ftp}</Typography>
          </div>
          <div style={{ flex: 3 }}>
            <Slider
              aria-labelledby='ftp-label'
              max={400}
              min={100}
              onChange={this.handleFtpChange}
              step={1}
              value={ftp}
            />
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1 }}>
            <Typography id='weight-label'>Weight ({weightSelection}): {weight}</Typography>
          </div>
          <div style={{ flex: 3 }}>
            <Slider
              aria-labelledby='weight-label'
              max={maxWeight}
              min={minWeight}
              onChange={this.handleWeightChange}
              step={1}
              value={weight}
            />
          </div>
        </div>
        Watts / KG: {powerToWeight}
      </div>
    )
  }
}

export default WattsPerKgContainer
