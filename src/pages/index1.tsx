import type { RadioChangeEvent } from "antd";
import { Alert, Button, Card, Col, Input, message, Radio, Row } from "antd";
import React, { useState } from "react";
// @ts-ignore
import { getLngLat } from "./utils.js";
import Remark from "@/pages/remark";
import "./index.less";

const { TextArea } = Input;

export default function HomePage() {
  // 类型
  const [value, setValue] = useState(1);
  // gps
  const [gps, setGps]: any = useState();
  // 高德
  const [gaoDe, setGaoDe]: any = useState();
  // 百度
  const [baiDu, setBaiDu]: any = useState();
  // 填写坐标
  const [input, setInput]: any = useState("112.222,29.666;116.111,21.111");
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  // 填入坐标
  const handleTextArea = (e: any) => {
    setInput(e.target?.value);
  };

  // 转换坐标
  const handleTo = (e: any) => {
    if (input) {
      const { stats, gpsStr, gaoDeStr, baiDuStr } = getLngLat(input, value);
      if (!stats) {
        message.error("坐标校验未通过！请检查坐标格式是否正常");
      } else {
        setGps(gpsStr);
        setGaoDe(gaoDeStr);
        setBaiDu(baiDuStr);
      }
    } else {
      message.warning("请输入坐标！");
    }
  };

  // 全部清空
  const handleClear = () => {
    setGps();
    setGaoDe();
    setBaiDu();
    setValue(1);
    setInput();
  };

  // 复制到剪切板
  const handleCopy = (id: any) => {
    const inputDom: any = document.querySelector("#" + id);
    inputDom.select();
    if (document.execCommand("copy")) {
      document.execCommand("copy");
      console.log("复制成功");
      message.success("已经复制到剪切板！");
    }
  };

  return (
    <div className="body">
      <Alert
        message="请输入浮点数经纬度坐标，经度在前，纬度在后。使用英文逗号分隔。批量转换时每行输入一条记录。"
        type="success"
      />
      <Card bordered={false} style={{ marginTop: 10 }}>
        <Row gutter={0}>
          <Col span={4}>坐标：</Col>
          <Col span={18}>
            <TextArea
              value={input}
              onChange={handleTextArea}
              rows={4}
              placeholder="请输入浮点数经纬度坐标，经度在前，纬度在后。使用英文逗号分隔。批量转换时每行输入一条记录。"
            />
          </Col>
          <Col span={4}>坐标系：</Col>
          <Col span={17}>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>gps坐标</Radio>
              <Radio value={2}>高德坐标</Radio>
              <Radio value={3}>百度坐标</Radio>
            </Radio.Group>
            <Button type="primary" onClick={handleTo}>
              转换
            </Button>
            <Button onClick={handleClear}>全部清空</Button>
          </Col>
          <Col span={4}>gps坐标系：</Col>
          <Col span={18}>
            <Input
              id="gps"
              readOnly
              value={gps}
              placeholder="gps坐标系：国际标准。也是最常见的，比如手机、pad等都是"
            />
          </Col>
          <Col span={2}>
            <Button onClick={() => handleCopy("gps")}>复制</Button>
          </Col>

          <Col span={4}>高德坐标系：</Col>
          <Col span={18}>
            <Input
              id="gaoDe"
              value={gaoDe}
              readOnly
              placeholder="高德坐标系：国测局坐标系，也叫火星坐标系。常见的有高德地图、搜狗地图等"
            />
          </Col>
          <Col span={2}>
            <Button onClick={() => handleCopy("gaoDe")}>复制</Button>
          </Col>

          <Col span={4}>百度坐标系：</Col>
          <Col span={18}>
            <Input
              id="baiDu"
              value={baiDu}
              readOnly
              placeholder="百度坐标系：百度坐标系，百度 SDK，百度地图使用。"
            />
          </Col>
          <Col span={2}>
            <Button onClick={() => handleCopy("baiDu")}>复制</Button>
          </Col>
        </Row>
      </Card>
      <Remark />
    </div>
  );
}
