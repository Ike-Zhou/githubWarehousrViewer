import { Table, message } from 'antd'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import PropTypes from 'prop-types'
import { getRepos } from '../../service'
import { getReposSuccess } from '../../store/actions/repos'
import { ToDetaile } from '../ToDetaile'
import { Loading } from '../Loading'

function Tables(props) {
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
      ellipsis: true,
      render: (record) => (
        <ToDetaile {...props} reposName={record.name} />
      ),
    },
  ]

  const dispatch = useDispatch()
  const u = useSelector((state) => state)
  useEffect(() => {
    getRepos(u.user.login).then((resp) => {
      dispatch(getReposSuccess(resp))
    }).catch((e) => {
      console.error('Error in Tables:', e.message)
      message.info('发生了未知错误请重试！')
    })
  }, [])

  const r = useSelector((state) => state)
  if (!r.repos.repos) {
    return <Loading />
  }
  return (
    <Table
      columns={columns}
      dataSource={r.repos.repos}
      rowKey={(record) => record.id}
    />
  )
}
export default Tables

Tables.propTypes = {
  toDetaile: PropTypes.func.isRequired,
}
