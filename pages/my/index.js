import { getUserInfo } from '../../services/user';
import { getValue, setValue } from '../../utils/common';

Page({
  data: {
    userInfo: {}
  },
  onShow() {
    getUserInfo().then((res) => {
      this.setData({
        userInfo: res.data
      })
    })
  },

  goToLogin() {
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
  
  logout() {
    setValue('userId', '');
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
});