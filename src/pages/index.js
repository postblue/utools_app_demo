import { Tabs, Segmented} from "antd";
import {
  PictureOutlined,
  VideoCameraOutlined,
  MailOutlined,
  WeiboOutlined
} from "@ant-design/icons";
import React, { useState } from "react";
import VideoIndex from "./video/index";
import ImgIndex from "@/pages/pic/index";
import About from "@/pages/about";
import "./index.less";
import HotNewsIndex from "@/pages/hotNews";



export default function HomePage() {

  const [active, setActive] = useState("图片");


  return (
    <div className="body">
      <Segmented
        block
        size="large"
        options={[
          { label: '图片', value: '图片', icon: <PictureOutlined /> },
          { label: '视频', value: '视频', icon: <VideoCameraOutlined /> },
          { label: '热搜', value: '热搜', icon:  <WeiboOutlined /> },
          { label: '关于我', value: '关于我', icon: <MailOutlined /> },
        ]}
        onChange={(value) => {
          console.log(value); // string
          setActive(value);
        }}
      />


      {
        active === "图片" ? <ImgIndex /> : <></>
      }

      {
        active === "视频" ? <VideoIndex /> : <></>
      }

      {
        active === "热搜" ? <HotNewsIndex /> : <></>
      }

      {
        active === "关于我" ? <About /> : <></>
      }
    </div>
  );
}
