import React, {useState} from "react";
import {Divider, Typography} from 'antd';

const {Title, Paragraph, Text, Link} = Typography;


export default function About() {

  const handleLink = () => {
    window.utools.shellOpenExternal('https://github.com/postblue');
  }

  return (
    <Typography className="about-layout">
      <Title level={3}>关于我</Title>
      <Paragraph>
        我是一个爱学习，爱分享的人，现在正在学习前端，正在尝试写一个前端项目，欢迎大家交流。
      </Paragraph>

      <Paragraph>
        插件源码：<Link href="https://github.com/postblue/utools_app_demo" target="_blank" onClick={handleLink}>
        https://github.com/postblue/utools_app_demo
      </Link><Text type="secondary">  (复制链接到浏览器打开)</Text>
      </Paragraph>

      {/*<Divider/>*/}
      {/*<Title level={3}>联系我</Title>*/}
    </Typography>

  );
}
