import { Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import PropTypes from 'prop-types'
import { getRepos } from '../../service'
import { getReposSuccess } from '../../store/actions/repos'
import { ToDetaile } from '../ToDetaile'

function Tables(props) {
  console.log('props:', props)

  const { toDetaile } = props

  const [reposName, setName] = useState('')
  const clickDetaile = (name) => {
    console.log('name:', name)
    setName(name)
    toDetaile(reposName)
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '10%',
      ellipsis: true,
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Created_at',
      dataIndex: 'created_at',
      key: 'created_at',
      width: '20%',
      ellipsis: true,
      render: (text) => <a>{moment(text).format('MMMM Do YYYY, h:mm:ss a')}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Action',
      key: 'action',
      width: '10%',
      render: () => (
        <ToDetaile {...props} />
      ),
    },
  ]

  const dispatch = useDispatch()
  const u = useSelector((state) => state)
  useEffect(() => {
    getRepos(u.user.login).then((resp) => {
      dispatch(getReposSuccess(resp))
    })
  }, [])

  const r = useSelector((state) => state)
  return (
    <Table
      columns={columns}
      dataSource={r.repos.repos}
      rowKey={(record) => record.id}
      onRow={(record) => ({
        onClick: () => { clickDetaile(record.name) },
      })}
    />
  )
}
export default Tables

Tables.propTypes = {
  toDetaile: PropTypes.func.isRequired,
}
