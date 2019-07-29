import { request } from '../utils/request';
import { config } from '../utils/config';

// 登录
export function login(param) {
  return request({
    url: config.prefix + 'user/login',
    data: param
  });
}
