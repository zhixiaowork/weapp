
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
  onBlurUsername(event) {
    this.setData({
      username: event.detail.value
    })
  },

  onBlurPassword(event) {
    this.setData({
      password: event.detail.value
    })
  },
  login() {
    login({
      ...this.data
    }).then((res) => {
      if (res.code == 0) {
        setValue('userId', res.data.userId);
        wx.switchTab({ url: '/pages/home/index' });
      } else {
        wx.showToast({
          icon: 'none',
          title: res.message,
        })
      }
    })
  }
})