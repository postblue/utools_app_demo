import { Tabs, Col,  message, Row } from "antd";
import {
  FireOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import NewList from "./newList";
import "./index.less";

/**
 * @desc 热点头条
 * **/
export default function HotNewsIndex() {
  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: "微博热搜",
      label: (
        <>
          <FireOutlined /> 微博热搜
        </>
      ),
      children: <NewList title="wbHot" />,
    },
    {
      key: "头条热搜",
      label: (
        <>
          <FireOutlined /> 头条热搜
        </>
      ),
      children: <NewList title="toutiao" />,
    },
    {
      key: "澎湃新闻",
      label: (
        <>
          <FireOutlined /> 澎湃新闻
        </>
      ),
      children: <NewList title="pengPai" />,
    },
    {
      key: "虎扑",
      label: (
        <>
          <FireOutlined /> 虎扑
        </>
      ),
      children: <NewList title="huPu" />,
    },
    {
      key: "知乎热搜",
      label: (
        <>
          <FireOutlined /> 知乎热搜
        </>
      ),
      children: <NewList title="zhihuHot" />,
    },
    {
      key: "知乎日报",
      label: (
        <>
          <FireOutlined /> 知乎日报
        </>
      ),
      children: <NewList title="zhihuDay" />,
    },
    {
      key: "36氪",
      label: (
        <>
          <FireOutlined /> 36氪
        </>
      ),
      children: <NewList title="get36Ke" />,
    },
    {
      key: "哔哩哔哩",
      label: (
        <>
          <FireOutlined /> 哔哩哔哩
        </>
      ),
      children: <NewList title="bili" />,
    },
    {
      key: "百度热搜",
      label: (
        <>
          <FireOutlined /> 百度热搜
        </>
      ),
      children: <NewList title="baiduRD" />,
    },
    {
      key: "抖音热搜",
      label: (
        <>
          <FireOutlined /> 抖音热搜
        </>
      ),
      children: <NewList title="douyinHot" />,
    },
    {
      key: "豆瓣",
      label: (
        <>
          <FireOutlined /> 豆瓣
        </>
      ),
      children: <NewList title="douban" />,
    },
    {
      key: "IT资讯",
      label: (
        <>
          <FireOutlined /> IT资讯
        </>
      ),
      children: <NewList title="itNews" />,
    },
    {
      key: "虎嗅网",
      label: (
        <>
          <FireOutlined /> 虎嗅网
        </>
      ),
      children: <NewList title="huXiu" />,
    },
    {
      key: "人人都是产品经理",
      label: (
        <>
          <FireOutlined /> 人人都是产品经理
        </>
      ),
      children: <NewList title="woShiPm" />,
    },
    {
      key: "虫部落",
      label: (
        <>
          <FireOutlined /> 虫部落
        </>
      ),
      children: <NewList title="chongBluo" />,
    },
  ];

  return (
      <Tabs
        tabPosition="left"
        defaultActiveKey="微博热搜"
        destroyInactiveTabPane={true}
        items={items}
        onChange={onChange}
        tabBarGutter={8}
      />

  );
}
