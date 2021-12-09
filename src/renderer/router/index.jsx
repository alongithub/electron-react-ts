import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import Menus from '@/layout/Menu'
import NoMatch from '@/lib/nomatch'; // 设置别名后不支持vscode跳转，通过配置jsconfig后，支持文件跳转，不支持文件夹跳转

const RouterLayout = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Menus />,
      children: [
        { path: 'servers/:id', element: <div >server id</div> }
      ]
    },
    { path: 'dashboard', element: <div >dashboard</div> },
    // {
    //   path: 'servers',
    //   element: <div>servers</div>,
    //   children: [
    //     { path: ':id', element: <div >server id</div> },
    //   ]
    // },
    {
      path: 'virtuals',
      element: <div>virtuals</div>,
      children: [
        { path: ':id', element: <div >virtual id</div> },
      ]
    },
    // 重定向
    { path: 'home', redirectTo: '/' },
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