
import { login, getUserInfo } from '../../services/user';
import { setValue, getValue } from '../../utils/common';


Page({

  data: {
    username: '',
    password: ''
  },

  onChangeUsername(event) {
    this.setData({
      username: event.detail
    })
  },

  onChangePassword(event) {
    this.setData({
      password: event.detail
    })
  },
  login() {
    login({
      ...this.data
    }).then((res) => {
      if (res.code == 0) {
        setValue('token', res.data.token);
        wx.switchTab({ url: '/pages/home/index' });
      } else {
        wx.showToast({
          icon: 'none',
          title: '登录失败',
        })
      }
    })
  }
})