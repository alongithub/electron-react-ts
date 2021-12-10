import React from 'react';
import axios from 'axios';
import { message } from 'antd';

const Publish = ({ url, path }) => {

  const handlePublish = () => {
    axios.get(`${url}${path}`).then(res => {
      message.success(res.message)
    }).catch(e => {
      message.error('失败，请重试')
    })
  }

  return <Button type="line" onClick={handlePublish}>发布</Button>
}

export default Publish;