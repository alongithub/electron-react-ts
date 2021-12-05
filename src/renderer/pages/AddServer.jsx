import React, { useCallback, useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

// 新建部署服务器
export default () => {

  const [config, setConfig] = useState({
    name: '',
    ip: '',
    serverId: 0,
  })
  const [visible, setVisible] = useState(false);

  const showAddModel = useCallback(() => {
    setVisible(true);
  }, [])

  const hideAddModel = useCallback(() => {
    setVisible(false);
  }, [])

  const handleOk = () => {
    alert('保存')
  }

  const testConnect = () => {
    alert('测试')
  }

  return <>
    <Button onClick={showAddModel}>新建服务器</Button>

    <Modal destroyOnClose centered title="新建部署服务器" visible={visible} onOk={handleOk} onCancel={hideAddModel} cancelText="取消" okText="新建">
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item
          label="名称"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="请输入服务器名称" />
        </Form.Item>
        <Form.Item
          label="IP"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="请输入服务器IP" />
        </Form.Item>
        <Form.Item
          label="端口"
          name="username"
          rules={[{ required: true, message: 'Please input your ip!' }]}
        >
          <Input placeholder="请输入服务器端口" />
        </Form.Item>
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="请输入用户名" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input.Password placeholder="请输入用户名" />
        </Form.Item>

      </Form>
    </Modal>
  </>
}