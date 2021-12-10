import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { message, Button } from 'antd';

const Publish = ({ url, path }) => {

  // let [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   axios.get(`http://${url}/isloading`).then(({ data: res }) => {
  //     if (res.code === 1) {
  //       setLoading(res.data);
  //     } else {
  //       message.error(res.message)
  //     }
  //   }).catch(e => {
  //     message.error('失败，请重试')
  //   })
  // }, [])

  const handlePublish = () => {
    axios.get(`http://${url}${path}`).then(({ data: res }) => {
      if (res.code === 1) {
        message.success(res.message)
      } else {
        message.error(res.message)
      }
    }).catch(e => {
      message.error('失败，请重试')
    })
  }

  return <Button type="line" onClick={handlePublish}>发布</Button>
}

export default Publish;