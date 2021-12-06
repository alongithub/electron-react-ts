import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useRoutes, BrowserRouter, Routes, Outlet, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { SearchOutlined, DesktopOutlined } from '@ant-design/icons';
import AddVirtial from '../pages/AddVirtial.jsx';
import AddServer from '../pages/AddServer.jsx';
import { getVirtualList } from '../pages/redux/virtualAction.js';
import { getServerList } from '../pages/redux/serverAction.js';
// import NoMatch from '../lib/nomatch';

const { Content, Sider } = Layout;


const mapState = (state) => {
  return {
    virtualList: state.virtual.list,
    serverList: state.server.list,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getVirtualList() {
      dispatch(getVirtualList());
    },
    getServerList() {
      dispatch(getServerList());
    }
  }
}

const RouterLayout = connect(mapState, mapDispatch)(({ children, serverList, virtualList, getVirtualList, getServerList }) => {
  let element = useRoutes([
    { path: '/', element: <div >/</div> },
    { path: 'dashboard', element: <div >dashboard</div> },
    {
      path: 'servers',
      element: <div>servers</div>,
      children: [
        { path: ':id', element: <div >server id</div> },
      ]
    },
    {
      path: 'virtuals',
      element: <div>virtuals</div>,
      children: [
        { path: ':id', element: <div >virtual id</div> },
      ]
    },
    // 重定向
    { path: 'home', redirectTo: '/' },
    // 404找不到
    { path: '*', element: <div>not found</div> }
  ]);

  useEffect(() => {
    getVirtualList();
    getServerList();
  }, [])

  return <Layout style={{ height: '100%' }}>
    <Layout>
      <Sider>
        <AddVirtial />
        <AddServer />
        <Menu
          mode="inline"
          theme="dark"
        >
          <Menu.SubMenu key="2" icon={<DesktopOutlined />} title="服务器">
            {
              serverList.map((l, i) => {
                return <Menu.Item key={"server" + i} icon={<DesktopOutlined />}>
                  <Link to={"/servers/" + l.id}>{l.name}</Link>
                </Menu.Item>
              })
            }
          </Menu.SubMenu>
          <Menu.SubMenu key="1" icon={<DesktopOutlined />} title="虚拟机">
            {
              virtualList.map((l, i) => {
                return <Menu.Item key={'virtual' + i} icon={<DesktopOutlined style={{ color: 'yellowgreen' }} />}>
                  <Link to={"/virtuals/" + l.id}>{l.name}</Link>
                </Menu.Item>
              })
            }
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Content>
        {element}
      </Content>
    </Layout>
  </Layout >
})

const Router = () => {
  return <BrowserRouter>
    <RouterLayout />
  </BrowserRouter>
}

export default Router;