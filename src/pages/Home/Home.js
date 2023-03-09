import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Layout } from 'antd'
import { Tables, Detaile } from '../../components'

const {
  Header, Content, Footer,
} = Layout

export default function Home() {
  const u = useSelector((state) => state)

  const [to, setToDetaile] = useState(false)
  const change = () => {
    setToDetaile((to) => !to)
  }
  const [reposName, setName] = useState('')
  const toDetaile = async (name) => {
    console.log('before:', name)
    await setName(name)
    await change()
  }

  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="site-layout-sub-header-background" style={{ padding: 0, height: '10vh', backgroundColor: 'skyblue' }}>
        <div style={{ height: '100%', paddingLeft: '90%' }}>
          <img
            src={u.user.avatar_url}
            alt="avatar"
            style={{
              width: '6vh', height: '6vh', marginRight: '10%', borderRadius: '50%', marginTop: '2vh', marginBottom: '2vh',
            }}
          />
          <span>{u.user.login}</span>
        </div>
      </Header>
      <Content style={{ margin: '24px 16px 0', height: '80vh' }}>
        <div className="site-layout-background" style={{ padding: 24 }}>
          {
            to ? (
              <Detaile
                to={to}
                change={change}
                setToDetaile={setToDetaile}
                reposName={reposName}
              />
            ) : (
              <Tables
                to={to}
                change={change}
                setToDetaile={setToDetaile}
                toDetaile={toDetaile}
                reposName={reposName}
              />
            )
          }
        </div>
      </Content>
      <Footer style={{ textAlign: 'center', height: '10vh' }}>silksoftware ©2023 Created by IkeZhou</Footer>
    </Layout>
  )
}
