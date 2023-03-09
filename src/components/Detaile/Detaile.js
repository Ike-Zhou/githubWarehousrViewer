import React from 'react'
import PropTypes from 'prop-types'

export default function Detaile(props) {
  const { reposName } = props
  return (
    <div>
      detaile, reposName:
      {reposName}
    </div>
  )
}

Detaile.propTypes = {
  reposName: PropTypes.string.isRequired,
}
