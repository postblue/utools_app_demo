import coordtransform from "coordtransform";

export function getLngLat(input = "", type) {
  const li = input.split(";").filter(Boolean);
  let gpsStr = "";
  let gaoDeStr = "";
  let baiDuStr = "";
  let stats = true;

  try {
    li.forEach((item) => {
      const arr = item.split(",");
      if (arr.length === 2) {
        if (checkLong(arr[0]) && checkLat(arr[1])) {
          const newObj = transformationGpsGD(type, arr);
          gpsStr += newObj.gps + ";";
          gaoDeStr += newObj.gaode + ";";
          baiDuStr += newObj.baidu + ";";
        }
      } else {
        stats = false;
      }
    });
  } catch (e) {
    stats = false;
  }

  return {
    stats,
    gpsStr,
    gaoDeStr,
    baiDuStr,
  };
}

function transformationGpsGD(gpsType = 1, gpsList = []) {
  let gpsObj = {};
  if (gpsType === 1) {
    gpsObj.gps = gpsList;
    gpsObj.gaode = coordtransform.wgs84togcj02(gpsList[0], gpsList[1]);
    gpsObj.baidu = coordtransform.gcj02tobd09(gpsObj.gaode[0], gpsObj.gaode[1]);
  } else if (gpsType === 2) {
    gpsObj.gps = coordtransform.gcj02towgs84(gpsList[0], gpsList[1]);
    gpsObj.gaode = gpsList;
    gpsObj.baidu = coordtransform.gcj02tobd09(gpsList[0], gpsList[1]);
  } else if (gpsType === 3) {
    gpsObj.baidu = gpsList;
    gpsObj.gaode = coordtransform.bd09togcj02(gpsList[0], gpsList[1]);
    gpsObj.gps = coordtransform.gcj02towgs84(gpsObj.gaode[0], gpsObj.gaode[1]);
  }
  return gpsObj;
}

/**
 * 校验经度
 * @param {String} lng
 * */
function checkLong(lng = "") {
  const longrg =
    /^(\-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,30})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,30}|180)$/;
  // true：正常  false：未通过校验
  return longrg.test(lng);
}

/**
 * 校验纬度
 * @param {String} lat
 * */
function checkLat(lat = "") {
  const latreg = /^(\-|\+)?([0-8]?\d{1}\.\d{0,30}|90\.0{0,30}|[0-8]?\d{1}|90)$/;
  // true: 正常 false：未通过校验
  return latreg.test(lat);
}
