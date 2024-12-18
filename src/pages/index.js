import { Tabs, Segmented} from "antd";
import {
  PictureOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import React, { useState } from "react";
import VideoIndex from "./video/index";
import ImgIndex from "@/pages/pic/index";
import "./index.less";


export default function HomePage() {

  const [active, setActive] = useState("图片");


  return (
    <div className="body">
      <Segmented
        block
        size="large"
        options={[
          // '图片', '视频'
          { label: '图片', value: '图片', icon: <PictureOutlined /> },
          { label: '视频', value: '视频', icon: <VideoCameraOutlined /> },
        ]}
        onChange={(value) => {
          console.log(value); // string
          setActive(value);
        }}
      />

      {
        active === "图片" ? <ImgIndex /> : <VideoIndex />
      }
    </div>
  );
}
