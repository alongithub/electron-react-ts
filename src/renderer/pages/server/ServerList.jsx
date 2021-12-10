import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AddServer from './components/AddServer';
import { getServerList } from './redux/serverAction';
import { Table, Button } from 'antd';



const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'IP',
    dataIndex: 'ip',
    key: 'ip',
  },
  {
    title: '端口',
    dataIndex: 'port',
    key: 'port',
  },
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: 'path',
    dataIndex: 'path',
    key: 'path',
  },
  {
    title: '操作',
    dataIndex: 'opera',
    key: 'opera',
    render: (item, record) => {
      return <div>
        <Button type="text">编辑</Button>
      </div>
    }
  }
]

const VirtualList = ({ serverList, getServerList }) => {


  useEffect(() => {
    getServerList();
  }, [])

  return <div className="layout_main">
    <div className="layout_header">
      <AddServer />
    </div>
    <div className="layout_content">
      <Table rowKey='id' size="middle" style={{ height: '100%' }} dataSource={serverList} columns={columns} />;
    </div>
  </div>
}


const mapState = (state) => {
  return {
    serverList: state.server.list,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getServerList() {
      dispatch(getServerList());
    }
  }
}


export default connect(mapState, mapDispatch)(VirtualList)