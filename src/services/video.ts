// @ts-ignore
import { request } from '@/utils/axiosUtil';

// 随机美女视频
export async function getMeiNv(params: any) {
  return request({
    method: 'get',
    url: "https://v2.api-m.com/api/meinv",
    data: params,
  });
}

