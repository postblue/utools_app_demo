import React, { useState } from "react";
import { Outlet, Link } from "umi";
import "./index.less";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";

export default function Layout() {
  return (
    <div className="navs">
      <ConfigProvider locale={zhCN} componentSize="small">
        <Outlet />
      </ConfigProvider>
    </div>
  );
}
