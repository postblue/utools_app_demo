import { Card, Col, Row, Radio, Input, Button, message } from "antd";
import React, { useState, useRef, useEffect } from "react";
import "./address.less";
import { convertFrom, gpsType, regeoCode } from "@/pages/address/utils";

// @ts-ignore
const AMap = window.AMap;

const Address = () => {
  // 类型
  const [value, setValue] = useState(1);
  const [address, setAddress]: any = useState();
  // 注释
  const objRef = useRef({
    input: undefined,
    aMap: undefined,
    geocoder: undefined,
    setAddress: undefined,
  });

  useEffect(() => {
    setTimeout(() => {
      initMap();
    }, 100);
  }, []);

  const initMap = () => {
    const map = new AMap.Map("homeMap", {
      // viewMode: "2D",
      zoomEnable: true,
      zoom: 12,
      // center: [118.102725, 24.526469],
      // mapStyle: "amap://styles/whitesmoke",
      // mapStyle: 'amap://styles/grey',
    });
    const geocoder = new AMap.Geocoder({
      // city: "010", //城市设为北京，默认：“全国”
      radius: 1000, //范围，默认：500
    });
    objRef.current.aMap = map;
    objRef.current.geocoder = geocoder;
    objRef.current.setAddress = setAddress;
  };

  // 输入的经纬度
  const handleInput = (e: any) => {
    objRef.current.input = e.target.value;
  };

  // 全部清空
  const handleClear = () => {
    objRef.current.input = undefined;
    setValue(1);
  };

  // 更换坐标系
  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  // 转换坐标
  const handleTo = (e: any) => {
    const { input } = objRef.current;
    const inputs: any = String(input).split(",");
    if (inputs.length > 0 && inputs.length === 2) {
      if (value === 2) {
        regeoCode({
          lnglat: inputs,
          objRef,
        });
      } else {
        convertFrom({
          lnglats: inputs,
          type: gpsType[value] ?? "gps",
          objRef,
        });
      }
    } else {
      message.warning("请输入坐标！");
    }
  };

  return (
    <div className="body">
      <Row gutter={16}>
        <Col span={24}>
          <Card title="请输入坐标" bordered={false}>
            <Row gutter={0}>
              <Col span={4}>坐标：</Col>
              <Col span={18}>
                <Input
                  onChange={handleInput}
                  placeholder="经纬度:118.102725,24.526469。必须是数字和英文标点符号！"
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
              <Col span={4}>地址：</Col>
              <Col span={17}>{address}</Col>
            </Row>
          </Card>
        </Col>
        <Col span={24}>
          <Card title="地图显示" bordered={false}>
            <div style={{ width: "100%", height: "400px" }} id="homeMap" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Address;
