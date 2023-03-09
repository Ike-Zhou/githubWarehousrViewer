import React from 'react'
import { Space, Button } from 'antd'
import PropTypes from 'prop-types'

export default function ToDetaile(props) {
  const { change } = props
  const click = () => {
    change()
  }

  return (
    <Space>
      <Button onClick={click}>
        查看详情
      </Button>
    </Space>
  )
}

ToDetaile.propTypes = {
  change: PropTypes.func.isRequired,
}
