const getSkeleton = require('../src/index');

getSkeleton({
  pageName: 'baidu',
  pageUrl: 'http://10.8.16.145:8080/parent-wx-h5Shop-list.html?id=5db95977947acb2e6d0c5a2d&fromtype=zheguangtestdddd&code=061qlt7j29zDpB0wE56j2HXe7j2qlt7j&state=parent&role=puppeteer',
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
});
