import { Tabs, Col, message, Row } from "antd";
import {
  VideoCameraOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import VideoCom from "./xxVideoCom";


export default function VideoIndex() {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "随机美女视频",
      label: (
        <>
          <VideoCameraOutlined /> 美女视频
        </>
      ),
      children: <VideoCom title="随机美女视频" />,
    },
  ];

  return (
      <Tabs
        tabPosition="left"
        defaultActiveKey="随机美女视频"
        destroyInactiveTabPane={true}
        items={items}
        onChange={onChange}
        tabBarGutter={8}
      />

  );
}
