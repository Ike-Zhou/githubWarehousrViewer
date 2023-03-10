import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Layout, Dropdown, message } from 'antd'
import { Link, useNavigate, Navigate } from 'react-router-dom'
import { Tables, Detaile } from '../../components'

const {
  Header, Content, Footer,
} = Layout

export default function Home() {
  const u = useSelector((state) => state)
  if (!u.user.login) {
    message.info('请先登录')
  }

  const [to, setToDetaile] = useState(false)
  const change = () => {
    setToDetaile((to) => !to)
  }
  const [reposName, setName] = useState('')
  const toDetaile = async (name) => {
    await setName(name)
    await change()
  }

  const items = [
    {
      key: '1',
      label: (
        <Link
          to="/login"
          onClick={
          () => {
            console.log(window.history)
            useNavigate('/login')
            window.location.reload()
          }
        }
        >
          退出
        </Link>
      ),
    },
  ]
  if (!u.user.login) {
    return (
      <Navigate to="/login" />
    )
  }
  return (
    <Layout>
      <Header
        className="site-layout-sub-header-background"
        style={{
          padding: 0, height: '90px', width: '100%', backgroundColor: 'skyblue', zIndex: '9', position: 'fixed',
        }}
      >
        <div style={{ lineHeight: '100%', paddingLeft: '90%', paddingTop: '18px' }}>
          <Dropdown
            menu={{
              items,
            }}
          >
            <img
              src={u.user.avatar_url}
              alt="avatar"
              style={{
                width: '54px',
                height: '54px',
                marginRight: '10%',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
            />
          </Dropdown>
          <span>{u.user.login}</span>
        </div>
      </Header>
      <Content style={{ margin: '24px 16px 0', backgroundColor: 'white', marginTop: '100px' }}>
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
