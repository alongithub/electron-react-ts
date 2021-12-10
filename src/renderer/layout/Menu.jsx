import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { DesktopOutlined } from '@ant-design/icons';

const { Content, Sider } = Layout;

const Menus = () => {

  return <Layout style={{ height: '100%' }}>
    <Layout>
      <Sider>

        <Menu
          mode="inline"
          theme="dark"
        >
          <Menu.Item key="virtuals">
            <Link to="/virtuals">虚拟机</Link>
          </Menu.Item>
          <Menu.Item key="servers">
            <Link to="/servers">服务器</Link>
          </Menu.Item>
          <Menu.SubMenu key="2" icon={<DesktopOutlined />} title="测试">
            <Menu.Item key="home" >
              <Link to="/home">home</Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="404">
            <Link to="/asdas">404</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  </Layout >
}

export default Menus;