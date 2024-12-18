import { Tabs, Col,  message, Row } from "antd";
import {
  PictureOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import XXPic from "@/pages/pic/xxPicCom";


export default function ImgIndex() {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "随机黑丝图片",
      label: (
        <>
          <PictureOutlined /> 黑丝
        </>
      ),
      children: <XXPic title="随机黑丝图片" />,
    },
    {
      key: "随机白丝图片",
      label: (
        <>
          <PictureOutlined  /> 白丝
        </>
      ),
      children: <XXPic title="随机白丝图片" />,
    },
    {
      key: "随机美女图片",
      label: (
        <>
          <PictureOutlined /> 美女
        </>
      ),
      children: <XXPic title="随机美女图片" />,
    },
    {
      key: "手机端美女图片接口",
      label: (
        <>
          <PictureOutlined /> 美女2
        </>
      ),
      children: <XXPic title="手机端美女图片接口" />,
    },
    {
      key: "电脑端美女图片",
      label: (
        <>
          <PictureOutlined /> 美女3
        </>
      ),
      children: <XXPic title="电脑端美女图片" />,
    },
    {
      key: "随机二次元图片",
      label: (
        <>
          <PictureOutlined /> 二次元
        </>
      ),
      children: <XXPic title="随机二次元图片" />,
    },
    {
      key: "随机4K图片",
      label: (
        <>
          <PictureOutlined /> 4K图片
        </>
      ),
      children: <XXPic title="随机4K图片" />,
    },
    {
      key: "随机壁纸图片",
      label: (
        <>
          <PictureOutlined /> 壁纸
        </>
      ),
      children: <XXPic title="随机壁纸图片" />,
    },
    {
      key: "bing每日一图",
      label: (
        <>
          <PictureOutlined /> bing每日一图
        </>
      ),
      children: <XXPic title="bing每日一图" />,
    },
    {
      key: "随机头像",
      label: (
        <>
          <PictureOutlined /> 头像
        </>
      ),
      children: <XXPic title="随机头像" />,
    },
  ];

  return (
      <Tabs
        tabPosition="left"
        defaultActiveKey="随机黑丝图片"
        destroyInactiveTabPane={true}
        items={items}
        onChange={onChange}
        tabBarGutter={8}
      />

  );
}
