import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import VirtualList from "@/pages/virtual/VirtualList"
import ServerList from "@/pages/server/ServerList"
import Menus from '@/layout/Menu'
import NoMatch from '@/lib/nomatch'; // 设置别名后不支持vscode跳转，通过配置jsconfig后，支持文件跳转，不支持文件夹跳转

const RouterLayout = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Menus />,
      children: [
        {
          index: true, element: <div>欢迎使用</div>
        },
        {
          path: 'servers',
          children: [
            { index: true, element: <ServerList /> },
            { path: 'servers/:id', element: <div >server id</div> }
          ]
        },
        {
          path: 'virtuals',
          children: [
            { index: true, element: <VirtualList /> },
            { path: ':id', element: <div >virtual id</div> },
          ]
        },
      ]
    },
    { path: 'dashboard', element: <div >dashboard</div> },
    // 重定向
    // { path: 'home', redirectTo: '/' },  // TODO 目前点击没反应，无法重定向，待解决
    // 404找不到
    { path: '*', element: <NoMatch /> }
  ]);

  return element
}

const Router = () => {
  return <BrowserRouter>
    <RouterLayout />
  </BrowserRouter>
}

export default Router;