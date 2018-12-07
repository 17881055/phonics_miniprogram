function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

const host = 'https://wellwell.wang/';

function request(url, method, data, header = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: host + url,
      method: method,
      data: data,
      headers: {
        'content-type': 'application/json'
      },
      success: function (res) {
        resolve(res.data)
      },
      fail: function (res) {
        reject(false)
      },
      complete: function () {}
    })
  })
}

function get(obj) {
  return request(obj.url, 'GET', obj.data)
}

function post(obj) {
  return request(obj.url, 'POST', obj.data)
}

function isEmptyObject(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}


export default {
  isEmptyObject,
  formatNumber,
  formatTime,
  WXrequest: {
    request,
    get,
    post,
    host
  }

}
