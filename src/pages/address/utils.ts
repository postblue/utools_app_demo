import { Card, Col, Row, Radio, Input, Button, message } from "antd";
// @ts-ignore
const AMap = window.AMap;
// 转换坐标
export function convertFrom(props: any) {
  const { lnglats, type, objRef } = props;
  const { marker } = objRef.current;
  marker && objRef.current?.aMap?.remove(marker);

  AMap.convertFrom(lnglats, type, function (status: any, result: any) {
    if (result.info === "ok") {
      var lnglat = result.locations[0];
      const marker = new AMap.Marker({
        position: lnglat,
        icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
      });
      objRef.current?.aMap?.add(marker);
      objRef.current?.aMap?.setFitView(marker);
      objRef.current.marker = marker;
      objRef.current.lnglat = lnglat;
      regeoCode({ objRef, lnglat });
    } else {
      message.error("转换失败");
      objRef.current.marker = {};
      objRef.current.lnglat = undefined;
      objRef.current?.setAddress("");
    }
  });
}

// 查询地址
export function regeoCode(props: any) {
  const { lnglat, objRef } = props;
  const { geocoder, setAddress } = objRef.current;

  geocoder.getAddress(lnglat, function (status: any, result: any) {
    if (status === "complete" && result.regeocode) {
      var address = result.regeocode.formattedAddress;
      setAddress(address);
    } else {
      message.error("根据经纬度查询地址失败");
    }
  });
}

export const gpsType: any = {
  1: "gps",
  2: "gaode",
  3: "baidu",
};
