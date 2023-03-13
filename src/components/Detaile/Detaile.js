import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Button, Descriptions } from 'antd'
import moment from 'moment'
import { getDetaile } from '../../service'
import { NoDescription } from '../NoDescription'
import { Loading } from '../Loading'

export default function Detaile(props) {
  const { reposName, change } = props
  const user = useSelector((state) => state)
  const userName = user.user.login

  const [state, setState] = useState({})
  const setDetaile = async (state) => {
    await setState(state)
  }

  useEffect(() => {
    getDetaile(userName, reposName).then((resp) => {
      console.log('reposDetaile:', resp)
      setDetaile(resp)
    })
  }, [])

  const back = () => {
    change()
  }

  if (!state.name) {
    return (
      <Loading />
    )
  }
  return (
    <div>
      <Button onClick={back}>回到首页</Button>
      <Descriptions title="Repos Info" bordered>
        <Descriptions.Item label="Name">{state.name}</Descriptions.Item>
        <Descriptions.Item label="Owner">{state.owner?.login}</Descriptions.Item>
        <Descriptions.Item label="Language">{state.language}</Descriptions.Item>
        <Descriptions.Item label="Created time">{moment(state.created_at).format('MMMM Do YYYY, h:mm:ss a')}</Descriptions.Item>
        <Descriptions.Item label="Updated Time">{moment(state.updated_at).format('MMMM Do YYYY, h:mm:ss a')}</Descriptions.Item>
        <Descriptions.Item label="Pushed Time">{moment(state.pushed_at).format('MMMM Do YYYY, h:mm:ss a')}</Descriptions.Item>
        <Descriptions.Item label="Default Branch">{state.default_branch}</Descriptions.Item>
        <Descriptions.Item label="Url">{state.url}</Descriptions.Item>
        <Descriptions.Item label="Visibility">{state.visibility}</Descriptions.Item>
        <Descriptions.Item label="git_url">{state.git_url}</Descriptions.Item>
        <Descriptions.Item label="ssh_url">{state.ssh_url}</Descriptions.Item>
        <Descriptions.Item label="clone_url">{state.clone_url}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {
            state.description !== null ? state.description : <NoDescription />
          }
        </Descriptions.Item>
      </Descriptions>
    </div>
  )
}

Detaile.propTypes = {
  reposName: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
}
