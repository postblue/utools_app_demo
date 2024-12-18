// @ts-ignore
import { request } from '../../utils/axiosUtil';

// 随机二次元图片
export async function getRandomAcgPic(params: any) {
  return request({
    method: 'get',
    url: 'https://v2.xxapi.cn/api/randomAcgPic?type=pc',
    data: params,
  });
}

// 随机黑丝图片
export async function getHeiSi(params: any) {
  return request({
    method: 'get',
    url: 'https://v2.xxapi.cn/api/heisi',
    data: params,
  });
}

// 随机白丝图片
export async function getBaiSi(params: any) {
  return request({
    method: 'get',
    url: 'https://v2.xxapi.cn/api/baisi',
    data: params,
  });
}

// 随机美女图片
export async function getMeinvpic(params: any) {
  return request({
    method: 'get',
    url: 'https://v2.xxapi.cn/api/meinvpic',
    data: params,
  });
}

// 随机头像
export async function getHead(params: any) {
  return request({
    method: 'get',
    url: 'https://v2.xxapi.cn/api/head',
    data: params,
  });
}
// 随机4K图片
export async function getRandom4kPic(params: any) {
  return request({
    method: 'get',
    url: 'https://v2.xxapi.cn/api/random4kPic?type=acg',
    data: params,
  });
}

// 随机壁纸图片
export async function getWallpaper(params: any) {
  return request({
    method: 'get',
    url: 'https://v2.xxapi.cn/api/wallpaper',
    data: params,
  });
}

// bing每日一图
export async function getBingImg(params: any) {
  return request({
    method: 'get',
    url: 'https://v2.xxapi.cn/api/bing',
    data: params,
  });
}

// 手机端美女图片接口
export async function getWapmeinvpic(params: any) {
  return request({
    method: 'get',
    url: 'https://v2.xxapi.cn/api/wapmeinvpic',
    data: params,
  });
}

// 电脑端美女图片
export async function getPCMeinvpic(params: any) {
  return request({
    method: 'get',
    url: 'https://v2.xxapi.cn/api/pcmeinvpic',
    data: params,
  });
}

