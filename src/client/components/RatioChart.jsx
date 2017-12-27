import React from 'react'

export default ({
  crankGears,
  cassetteGears,
}) => (
  <div>
    {crankGears && crankGears.toString()}
    {cassetteGears && cassetteGears.toString()}
  </div>
)
