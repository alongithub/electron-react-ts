import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Layout, Menu } from 'antd';
import { getVirtualList } from './redux/virtualAction.js';
import { SearchOutlined, DesktopOutlined } from '@ant-design/icons';
import AddVirtial from './AddVirtial.jsx';
import AddServer from './AddServer.jsx';
const { Header, Content, Sider } = Layout;

const Home = ({ virtualList, getVirtualList }) => {
  // 获取本地保存的虚拟机列表
  const [serverList, setServerList] = useState([])

  useEffect(() => {


    getVirtualList();

    let server = [
      { id: 1, name: '打扮家' },
      { id: 2, name: 'along' }
    ]
    setServerList(server);
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
          <Menu.SubMenu key="1" icon={<DesktopOutlined />} title="虚拟机">
            {
              virtualList.map((l, i) => {
                return <Menu.Item key={'virtual' + i} icon={<DesktopOutlined style={{ color: 'yellowgreen' }} />}>
                  {l.name}
                </Menu.Item>
              })
            }
          </Menu.SubMenu>
          <Menu.SubMenu key="2" icon={<DesktopOutlined />} title="服务器">
            {
              serverList.map((l, i) => {
                return <Menu.Item key={"server" + i} icon={<DesktopOutlined />}>
                  {l.name}
                </Menu.Item>
              })
            }
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Content>
        日志1=290223
      </Content>
    </Layout>
  </Layout >
}

const mapState = (state) => {
  return {
    virtualList: state.virtual.list,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getVirtualList() {
      dispatch(getVirtualList());
    }
  }
}

export default connect(mapState, mapDispatch)(Home);