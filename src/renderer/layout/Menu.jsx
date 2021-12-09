import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { DesktopOutlined } from '@ant-design/icons';
import AddVirtial from '../pages/AddVirtial.jsx';
import AddServer from '../pages/AddServer.jsx';
import { getVirtualList } from '../pages/redux/virtualAction.js';
import { getServerList } from '../pages/redux/serverAction.js';

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

const Menus = connect(mapState, mapDispatch)(({ serverList, virtualList, getVirtualList, getServerList }) => {

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
          <Menu.Item   >
            <Link to="/asdas">404</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  </Layout >
})

export default Menus;