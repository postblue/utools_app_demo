import React, { useState, useEffect } from "react";
import { CaretUpOutlined, CaretDownOutlined, CloudDownloadOutlined } from "@ant-design/icons";
import { Tabs, Button, Card, Col, Image, message, Spin, Row } from "antd";
import {getLittlesistervideo, getMeiNvShiPin} from "../../services/video";

/**
 * @desc 随机性感小姐姐
 * **/
export default function HomePage() {
  // 加载状态
  const [loading, setLoading] = useState(false);
  // url地址
  const [url, setUrl] = useState([]);
  const [step, setStep] = useState(-1);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // setUrl(base + "&unix=" + new Date().getTime());
    getImgUrl({
      url,
      setUrl,
      setLoading,
      step,
      setStep,
    });
  };

  // 上一张图片
  const prevImg = () => {
    if (step === 0) {
      message.warning("已经是第一张了");
      return false;
    } else {
      setStep(step - 1);
    }
  };

  // 下一张图片
  const nextImg = () => {
    if (step === url.length - 1) {
      getData();
    } else {
      setStep(step + 1);
    }
  };

  return (
    <div className="img-box">
      <Spin tip="正在加载中...." spinning={loading}>
        <div className="tools">
          <Button
            type="primary"
            shape="circle"
            icon={<CaretUpOutlined />}
            onClick={prevImg}
            title="上一张"
          />
          <Button
            type="primary"
            shape="circle"
            icon={<CaretDownOutlined />}
            onClick={nextImg}
            title="下一张"
          />
          <a href={url[step]} download>
            <Button
              // type="primary"
              shape="circle"
              icon={<CloudDownloadOutlined />}
              title="下载图片"
            />
          </a>
          <span className="num">
            <b>{step + 1}</b> / <span>{url.length}</span>
          </span>
        </div>
        <video muted width={600} controls src={url[step]} autoPlay />
      </Spin>
    </div>
  );
}

// 获取该故障的基础信息
export function getImgUrl(props) {
  const { url, setUrl, setLoading, step, setStep } = props;
  setLoading(true);
  let urlStr = "error";
  getLittlesistervideo()
    .then((res) => {
      if (res.code === 200) {
        urlStr = res.video || url;
      }
    })
    .finally(() => {
      url.push(urlStr);
      setUrl(url);
      setStep(step + 1);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    });
}
