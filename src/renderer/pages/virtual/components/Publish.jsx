import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { message, Button } from 'antd';

const Publish = ({ url, path }) => {



  let [loading, setLoading] = useState(true);

  let getStatus = () => {
    axios.get(`http://${url}/status`).then(({ data: res }) => {
      if (res.code === 1) {
        setLoading(res.data);
        if (res.data) {
          setTimeout(getStatus, 5000)
        }
      }
    }).catch(e => {
      message.error('失败，请检查服务器');
      setTimeout(getStatus, 5000);
    })

  }

  useEffect(() => {
    return () => {
      getStatus = () => { }
    }
  }, [])

  useEffect(() => {
    if (loading) {
      getStatus()
    }
  }, [loading])

  const handlePublish = () => {
    axios.get(`http://${url}${path}`).then(({ data: res }) => {
      if (res.code === 1) {
        message.success(res.message)
        setLoading(true);
      } else {
        message.error(res.message)
      }
    }).catch(e => {
      message.error('失败，请重试')
    })
  }

  return <Button loading={loading} type="line" onClick={handlePublish}>发布</Button>
}

export default Publish;