import { message } from 'antd';
import axios from 'axios';

const instance = axios.create({
  // baseURL: 'https://api.example.com', // 设置基础URL
  timeout: 1000 * 60 * 10, // 设置请求超时时间
  // headers: {
  //   Accept: 'application/json', // 设置 Accept 头部
  //   'Content-Type': 'application/json; charset=UTF-8', // 设置 Content-Type 头部
  // }
});

// 添加请求拦截器，可以在请求前进行一些处理
instance.interceptors.request.use(
  (config) => {
    // 在这里可以进行请求前的操作，如添加请求头等
    return config;
  },
  (error) => {
    message.error('网络请求发生错，请检查网络环境');
    return Promise.reject(error);
  }
);

// 添加响应拦截器，可以在响应后进行一些处理
instance.interceptors.response.use(
  (response) => {
    // 在这里可以对响应数据进行处理

    // return response.data;
    return response.data;
  },
  (error) => {
    if (error.response) {
      message.error(errorText[error.response.status] || "发生未知http状态码错误，请联系管理员");
    } else if (error.request) {
      // 如果没有响应，表示请求已经被发送，但没有收到响应
      console.log('请求发送失败:', error.request);
      message.error('请求发送失败');
    } else {
      // 发生了其他错误
      console.log('发生了其他错误:', error.message);
      message.error('发生了其他错误');
    }

    return Promise.reject(error);
  }
);

// 导出一个函数用于发送请求
export function request(props: any) {
  const { method, url, data, headers } = props;
  return instance({
    method: method,
    url: url,
    data: data,
    headers: headers,
  });
}

export const errorText: any = {
  400: '请求错误，如字段错误!',
  401: '未授权，请登录',
  403: '拒绝访问，您没有权限访问!',
  404: `请求地址出错: `,
  405: '请求方法未允许',
  408: '请求超时',
  422: '登录已失效!',
  500: '服务器内部错误',
  501: '服务未实现',
  502: '网关错误',
  503: '服务不可用',
  504: '网关超时',
  505: 'HTTP版本不受支持',
};

