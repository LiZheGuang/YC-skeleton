const getSkeleton = require("../src/index");
const spliPageName = (url) => {
  return new URL(url).pathname
    .split("/")
    .pop()
    .replace(/\.html/, "");
};

const skeletonObj = {
  pageUrl:
    "http://10.8.16.145:8080/parent-wx-h5Shop-shopShow.html?actId=5e796b01cce13f039dca4ee5",
};
getSkeleton({
  pageName: spliPageName(skeletonObj.pageUrl),
  pageUrl: `${skeletonObj.pageUrl}&role=puppeteer`,
  openRepeatList: true,
  device: "iPhone 6", // 为空则使用默认 PC 页面打开
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
}).then((result) => {
  // console.log(result.html)
});
