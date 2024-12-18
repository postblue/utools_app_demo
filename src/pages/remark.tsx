import { Card, Col, Row } from "antd";
import React from "react";

const Remark: React.FC = () => (
  <Row gutter={16}>
    <Col span={24}>
      <Card title="【gps坐标】地球坐标 (WGS84)" bordered={false}>
        <ul>
          <li>1. 国际标准，从 GPS 设备中取出的数据的坐标系</li>
          <li>2. 国际地图提供商使用的坐标系</li>
        </ul>
      </Card>
    </Col>
    <Col span={24}>
      <Card
        title="【高德坐标】火星坐标 (GCJ-02)也叫国测局坐标系"
        bordered={false}
      >
        <ul>
          <li>1. 中国标准，从国行移动设备中定位获取的坐标数据使用这个坐标系</li>
          <li>
            2. 国家规定：
            国内出版的各种地图系统（包括电子形式），必须至少采用GCJ-02对地理位置进行首次加密。
          </li>
        </ul>
      </Card>
    </Col>
    <Col span={24}>
      <Card title="【百度坐标】百度坐标 (BD-09)" bordered={false}>
        <ul>
          <li>1. 百度标准，百度 SDK，百度地图，Geocoding 使用</li>
          <li>2. (本来就乱了，百度又在火星坐标上来个二次加密)</li>
        </ul>
      </Card>
    </Col>
  </Row>
);

export default Remark;
