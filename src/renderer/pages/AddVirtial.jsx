import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Form, Input, Select, message } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { setVirtualList } from './redux/virtualAction.js';

// 新建虚拟机
const AddVirtual = ({ virtualList, setVirtualList, id, serverList }) => {

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
    value.id = virtualList.length ? virtualList[virtualList.length - 1].id + 1 : 1;
    setVirtualList([...virtualList, value]);
    message.success(id ? '虚拟机保存成功' : '虚拟机创建成功');
    hideAddModel();
  }

  const testConnect = () => {
    alert('测试')
  }

  return <>
    <Button onClick={showAddModel}>新建</Button>

    <Modal destroyOnClose title="新建虚拟机" visible={visible} onOk={handleOk} onCancel={hideAddModel} cancelText="取消" okText="新建">
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
          rules={[{ required: true, message: '请填写虚拟机名称!' }]}
        >
          <Input placeholder="请输入虚拟机名称" />
        </Form.Item>
        <Form.Item
          label="IP"
          name="ip"
          rules={[{ required: true, message: '请填写虚拟机ip地址!' }]}
        >
          <Input placeholder="请输入虚拟机IP" addonAfter={<SettingOutlined onClick={testConnect} />} />
        </Form.Item>
        <Form.Item
          label="Url"
          name="url"
          rules={[{ required: true, message: '请填写请求地址!' }]}
        >
          <Input placeholder="请输入请求地址" />
        </Form.Item>
        <Form.Item
          name="serverId"
          label="部署服务器"
          rules={[{ required: true, message: '请选择部署服务器!' }]}
        >
          <Select placeholder="请选择部署服务器">
            {
              serverList.map(l => {
                return <Select.Option key={l.id} value={l.id}>{l.name}</Select.Option>
              })
            }
          </Select>
        </Form.Item>


      </Form>
    </Modal>
  </>
}

const mapState = (state) => ({
  virtualList: state.virtual.list,
  serverList: state.server.list,
})
const mapDispatch = (dispatch) => ({
  setVirtualList(list) {
    console.log("setVirtualList")
    dispatch(setVirtualList(list));
  }
})

export default connect(mapState, mapDispatch)(AddVirtual)