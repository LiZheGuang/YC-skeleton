const getSkeleton = require('../src/index');

getSkeleton({
  pageName: 'baidu',
  pageUrl: 'http://10.8.16.145:8080/parent-wx-h5Shop-my.html?id=5db95977947acb2e6d0c5a2d&fromtype=zheguangtestdddd&role=puppeteer',
  openRepeatList: true,
  device: 'iPhone X', // 为空则使用默认 PC 页面打开
  minGrayBlockWidth: 20,
  minGrayPseudoWidth: 10,
  debug: true,
  debugTime: 3000,
  // cookies: [{
  //   "domain": ".baidu.com",
  //   "expirationDate": 1568267131.555328,
  //   "hostOnly": false,
  //   "httpOnly": false,
  //   "name": "BDORZ",
  //   "path": "/",
  //   "sameSite": "unspecified",
  //   "secure": false,
  //   "session": false,
  //   "storeId": "0",
  //   "value": "yyyyyyyyy",
  //   "id": 2
  // }],
}).then(result => {
  // console.log(result.html)
})
