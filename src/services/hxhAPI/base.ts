// @ts-ignore
import { request } from '../../utils/axiosUtil';

// 微博实时热搜热榜API
export async function wbHot(params: any) {
  return request({
    method: 'get',
    url: 'https://api.vvhan.com/api/hotlist/wbHot',
    data: params,
  });
}

// 今日头条实时热搜热榜API
export async function toutiao(params: any) {
  return request({
    method: 'get',
    url: 'https://api.vvhan.com/api/hotlist/toutiao',
    data: params,
  });
}

// 澎湃新闻时事热搜热榜API
export async function pengPai(params: any) {
  return request({
    method: 'get',
    url: 'https://api.vvhan.com/api/hotlist/pengPai',
    data: params,
  });
}

// 虎扑步行街实时热搜热榜API
export async function huPu(params: any) {
  return request({
    method: 'get',
    url: 'https://api.vvhan.com/api/hotlist/huPu',
    data: params,
  });
}

// 知乎实时热搜热榜API
export async function zhihuHot(params: any) {
  return request({
    method: 'get',
    url: 'https://api.vvhan.com/api/hotlist/zhihuHot',
    data: params,
  });
}
// 知乎每日日报API
export async function zhihuDay(params: any) {
  return request({
    method: 'get',
    url: 'https://api.vvhan.com/api/hotlist/zhihuDay',
    data: params,
  });
}

// 36氪24小时热榜API
export async function get36Ke(params: any) {
  return request({
    method: 'get',
    url: 'https://api.vvhan.com/api/hotlist/36Ke',
    data: params,
  });
}

// 哔哩哔哩全站日榜API
export async function bili(params: any) {
  return request({
    method: 'get',
    url: 'https://api.vvhan.com/api/hotlist/bili',
    data: params,
  });
}

// 百度热点热榜API
export async function baiduRD(params: any) {
  return request({
    method: 'get',
    url: 'https://api.vvhan.com/api/hotlist/baiduRD',
    data: params,
  });
}

// 抖音热点热榜API
export async function douyinHot(params: any) {
  return request({
    method: 'get',
    url: 'https://api.vvhan.com/api/hotlist/douyinHot',
    data: params,
  });
}

// 豆瓣小组精选API
export async function douban(params: any) {
  return request({
    method: 'get',
    url: 'https://api.vvhan.com/api/hotlist/douban',
    data: params,
  });
}

// IT资讯热榜API
export async function itNews(params: any) {
  return request({
    method: 'get',
    url: 'https://api.vvhan.com/api/hotlist/itNews',
    data: params,
  });
}

// 虎嗅网24小时热榜API
export async function huXiu(params: any) {
  return request({
    method: 'get',
    url: 'https://api.vvhan.com/api/hotlist/huXiu',
    data: params,
  });
}

// 人人都是产品经理热文日榜API
export async function woShiPm(params: any) {
  return request({
    method: 'get',
    url: 'https://api.vvhan.com/api/hotlist/woShiPm',
    data: params,
  });
}

// 虫部落最新热门API
export async function chongBluo(params: any) {
  return request({
    method: 'get',
    url: 'https://api.vvhan.com/api/hotlist/chongBluo',
    data: params,
  });
}

