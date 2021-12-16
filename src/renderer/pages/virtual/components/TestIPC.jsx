import { ipcRenderer } from "electron";
import React from 'react';
import { Button } from 'antd';

function sendText() {
  ipcRenderer.send('console', '测试ipc通信');
}

export default () => {
  return <Button onClick={sendText}>test IPC</Button>
}