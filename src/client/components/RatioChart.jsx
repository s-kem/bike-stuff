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

const Row = ({
  crankGears,
  cassetteGears,
  rowIndex,
}) => (
  <TableRow>
    <TableRowColumn>
      {`${rowIndex + 1} -- ${crankGears[rowIndex]}`}
    </TableRowColumn>
    {cassetteGears.map(gear => (<TableRowColumn key={`${rowIndex}-${gear}`}>{fixToTwo(crankGears[rowIndex] / gear)}</TableRowColumn>))}
  </TableRow>
)

export default ({
  crankGears,
  cassetteGears,
}) => crankGears && cassetteGears && crankGears.length && cassetteGears.length
  ? (
    <div>
      <Table selectable multiSelectable>
        <TableHeader adjustForCheckbox={true} displaySelectAll={true}>
          <TableRow>
            <TableHeaderColumn>Crank</TableHeaderColumn>
            {cassetteGears.map((gear, idx) => <TableHeaderColumn key={gear}>{`${idx + 1} - ${gear}t`}</TableHeaderColumn>)}
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox>
          {crankGears.map((crankTeeth, crankIdx) => (
            <TableRow key={crankTeeth}>
              <TableRowColumn>
                {`${crankIdx + 1} -- ${crankTeeth}`}
              </TableRowColumn>
              {cassetteGears.map(cassetteTeeth => (
                <TableRowColumn key={`${crankIdx}-${cassetteTeeth}`}>
                  {fixToTwo(crankTeeth / cassetteTeeth)}
                </TableRowColumn>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>)
  : null
