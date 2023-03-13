import React from 'react'
import { Spin } from 'antd'

export default function Loading() {
  return (
    <div style={{
      float: 'left', height: '80vh', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.2)', marginBottom: '16px',
    }}
    >
      <Spin size="large" style={{ height: '100%', width: '100%', paddingTop: '35vh' }} />
    </div>
  )
}
