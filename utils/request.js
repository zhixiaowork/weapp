import { getUserInfo } from './util.js';

/**
 * request 接口请求公共部分
 * @param {Object} params 请求参数
 */
export function request(params) {
  const { url, headers, data, method = 'GET' } = params;
  let ajaxPropmise = new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data,
      method,
      header: {access_token: getUserInfo('token')},
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        resolve(res.data);
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  });
  return ajaxPropmise.then((data) => {
    return data;
  }).catch(err => {
    console.log(err);
    return { data: null };
  });
}