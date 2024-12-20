import React, { useState, useEffect } from "react";
import {
  CaretUpOutlined,
  CaretDownOutlined,
  CloudDownloadOutlined,
} from "@ant-design/icons";
import { Divider, List, Tag, Spin, Badge } from "antd";
import {
  baiduRD,
  bili,
  chongBluo,
  douban,
  douyinHot,
  get36Ke,
  huPu,
  huXiu,
  itNews,
  pengPai,
  toutiao,
  wbHot,
  woShiPm,
  zhihuDay,
  zhihuHot,
} from "../../services/hxhAPI/base";

/**
 * @desc 新闻列表
 * **/
export default function HomePage(props) {
  const { title = "" } = props;
  // 加载状态
  const [loading, setLoading] = useState(false);
  // 新闻列表
  const [list, setList] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getNewListData({
      api: apiMap[title],
      setLoading,
      setList,
      setHeader,
    });
  };

  return (
    <div className="new-list-box">
      <Spin tip="正在加载中...." spinning={loading}>
        <List
          size="small"
          header={<div>{header}</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={list}
          renderItem={(item) => <NewListItem item={item} />}
        />
      </Spin>
    </div>
  );
}

const NewListItem = (props) => {
  const { item } = props;
  const { index, hot, title, url } = item;
  return (
    <Badge.Ribbon text={hot ?? ''} color={colors[index] || "#0071f9"} style={{display: !!hot ? 'block' : 'none'}}>
      <List.Item>
        <div style={{ width: "100%", display: "block" }}>
          <a
            className="new-list-item"
            onClick={() => {
              if (url) {
                window.utools.shellOpenExternal(url);
              } else {
                alert("无效的链接，无法跳转！");
              }
            }}
          >
            <Tag color={colors[index]}>{index}</Tag>
            {title}
          </a>
        </div>
      </List.Item>
    </Badge.Ribbon>
  );
};

const colors = {
  1: "#f91c29",
  2: "#fe7f25",
  3: "#fcd334",
};

// 获取该故障的基础信息
function getNewListData(props) {
  const { api, setList, setLoading, setHeader } = props;
  setLoading(true);
  let list = [];
  let header = "热搜列表";
  api()
    .then((res) => {
      if (res.success) {
        list = res.data || [];
        header = res.name + " - " + res.subtitle;
      }
    })
    .finally(() => {
      setList(list);
      setHeader(header);
      // setTimeout(() => {
      setLoading(false);
      // }, 500);
    });
}

// 名称对应的api地址
const apiMap = {
  wbHot: wbHot,
  toutiao: toutiao,
  pengPai: pengPai,
  huPu: huPu,
  zhihuHot: zhihuHot,
  zhihuDay: zhihuDay,
  get36Ke: get36Ke,
  bili: bili,
  baiduRD: baiduRD,
  douyinHot: douyinHot,
  douban: douban,
  itNews: itNews,
  huXiu: huXiu,
  woShiPm: woShiPm,
  chongBluo: chongBluo,
};
