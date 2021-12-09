import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import notFound from './images/404.png';
import './style.less';

export default () => {
  const [time, setTime] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (time <= 1) {
        navigate(-1);
      } else {
        setTime(time => time - 1);
      }
    }, 1000)

  }, [time])

  return (
    <div className="noMatch">
      <img src={notFound} alt="" />
      <div>
        <p>页面丢失了，请进行其他操作</p>
        <p>{time}秒后返回上一级</p>
      </div>
    </div>
  );
}
