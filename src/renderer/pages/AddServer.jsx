import React, { useCallback, useState, useEffect } from 'react';
import { Button, Modal, Form, Input, message } from 'antd';
import { setServerList } from './redux/serverAction';
import { connect } from 'react-redux';

// 新建部署服务器
const AddServer = ({ setServerList, id, serverList }) => {

  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const showAddModel = useCallback(() => {
    setVisible(true);
  }, [])

  const hideAddModel = useCallback(() => {
    form.resetFields();
    setVisible(false);

  }, [])

  const handleOk = () => {
    const value = form.getFieldsValue();
    console.log(value);
    value.id = serverList.length ? serverList[serverList.length - 1].id + 1 : 1;
    setServerList([...serverList, value]);
    message.success(id ? '服务器保存成功' : '服务器创建成功');
    hideAddModel()
  }

  const testConnect = () => {
    alert('测试')
  }

  return <>
    <Button onClick={showAddModel}>新建服务器</Button>

    <Modal getContainer={false} destroyOnClose centered title="新建部署服务器" visible={visible} onOk={handleOk} onCancel={hideAddModel} cancelText="取消" okText="新建">
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="名称"
          name="name"
          rules={[{ required: true, message: '请输入服务器名称!' }]}
        >
          <Input placeholder="请输入服务器名称" />
        </Form.Item>
        <Form.Item
          label="IP"
          name="ip"
          rules={[{ required: true, message: '请输入服务器ip!' }]}
        >
          <Input placeholder="请输入服务器IP" />
        </Form.Item>
        <Form.Item
          label="端口"
          name="port"
          rules={[{ required: true, message: '请输入服务器端口!' }]}
        >
          <Input placeholder="请输入服务器端口" />
        </Form.Item>
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名!' }]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码!' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>
        <Form.Item
          label="Path"
          name="path"
          rules={[{ required: true, message: '请输入部署地址!' }]}
        >
          <Input placeholder="请输入部署地址" />
        </Form.Item>

      </Form>
    </Modal>
  </>
}

const mapState = state => {
  return {
    serverList: state.server.list,
  }
}

const mapDispatch = dispatch => {
  return {
    setServerList(list) {
      dispatch(setServerList(list))
    }
  }
}

export default connect(mapState, mapDispatch)(AddServer)