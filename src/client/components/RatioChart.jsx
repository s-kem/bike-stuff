import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table'
import React from 'react'

const fixToTwo = num => parseFloat(num.toFixed(2), 10)
const isWithin5Percent = ( v1, v2 ) => {
  const offset = v2 * 0.05
  const lowerBound = v2 - offset
  const upperBound = v2 + offset

  return v1 > lowerBound && v1 < upperBound
}

export default ({
  crankGears,
  cassetteGears,
  comparisonRatio,
}) => crankGears && cassetteGears && crankGears.length && cassetteGears.length
  ? (
    <div>
      <Table selectable={false}>
        <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Crank</TableHeaderColumn>
            {cassetteGears.map((gear, idx) => <TableHeaderColumn key={gear}>{`${idx + 1} - ${gear}t`}</TableHeaderColumn>)}
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {crankGears.map((crankTeeth, crankIdx) => (
            <TableRow key={crankTeeth}>
              <TableRowColumn>
                {`${crankIdx + 1} -- ${crankTeeth}`}
              </TableRowColumn>
              {cassetteGears.map(cassetteTeeth => {
                const val = fixToTwo(crankTeeth / cassetteTeeth)
                const style = isWithin5Percent(val, comparisonRatio)
                  ? { background: 'rgb(224, 224, 224)' }
                  : {}

                return (
                  <TableRowColumn
                    key={`${crankIdx}-${cassetteTeeth}`} // eslint-disable-line
                    style={style}
                  >
                    {val}
                  </TableRowColumn>)
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>)
  : null
