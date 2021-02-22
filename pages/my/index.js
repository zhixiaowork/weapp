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
  
  getUserInfo(event) {
    console.log(event)
    let userInfo = event.detail.userInfo;
    console.log(userInfo)
    if (userInfo) {
      wx.reLaunch({
        url: '/pages/my/index',
      })
    } else {
      wx.showToast({
        icon: 'none',
        title: '请允许授权',
      })
    }
  },

  logout() {
    setValue('userId', '');
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
});