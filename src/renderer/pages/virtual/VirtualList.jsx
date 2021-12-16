import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons'
import AddVirtial from './components/AddVirtial';
import TestIPC from './components/TestIPC';
import Publish from './components/Publish';
import { getVirtualList } from './redux/virtualAction';
import { getServerList } from '@/pages/server/redux/serverAction';

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
    title: '请求地址',
    dataIndex: 'url',
    key: 'url',
  },
  {
    title: '部署服务器',
    dataIndex: 'servername',
    key: 'servername',
  },
  {
    title: '操作',
    dataIndex: 'opera',
    key: 'opera',
    render: (item, record) => {
      return <div>
        <AddVirtial text="编辑" id={record.id} buttonProps={{ type: 'link' }} />
        <Publish url={record.ip} path={record.url} />
      </div>
    }
  }
]

const VirtualList = ({ virtualList, getVirtualList, getServerList }) => {

  useEffect(() => {
    getVirtualList();
    getServerList();
  }, [])

  return <div className="layout_main">
    <div className="layout_header">
      <AddVirtial buttonProps={{
        icon: <PlusOutlined />,
        type: "primary"
      }} />
      <TestIPC />
    </div>
    <div className="layout_content">
      <Table rowKey='id' size="middle" style={{ height: '100%' }} dataSource={virtualList} columns={columns} />;
    </div>
  </div>
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
    },
    getServerList() {
      dispatch(getServerList());
    }
  }
}


export default connect(mapState, mapDispatch)(VirtualList)