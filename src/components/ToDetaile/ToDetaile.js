import React from 'react'
import { Space, Button } from 'antd'
import PropTypes from 'prop-types'

export default function ToDetaile(props) {
  const { toDetaile, reposName } = props
  const click = () => {
    toDetaile(reposName)
  }

  return (
    <Space>
      <Button onClick={click}>
        <span>查看详情</span>
      </Button>
    </Space>
  )
}

ToDetaile.propTypes = {
  toDetaile: PropTypes.func.isRequired,
  reposName: PropTypes.string.isRequired,
}
