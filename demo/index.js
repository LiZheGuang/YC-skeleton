const getSkeleton = require("../src/index");
const spliPageName = (url) => {
  return new URL(url).pathname
    .split("/")
    .pop()
    .replace(/\.html/, "");
};

// const skeletonObj = {
//   pageUrl:
//     "http://10.8.16.145:8080/parent-wx-h5Shop-shopShow.html?actId=5e796b01cce13f039dca4ee5",
// };

const skeletonObj = [
  {
    pageUrl:
      "http://10.8.16.145:8080/parent-wx-h5Shop-shopShow.html?actId=5e796b01cce13f039dca4ee5",
    openRepeatList: true,
    device: "iPhone 6", // 为空则使用默认 PC 页面打开
    minGrayBlockWidth: 20,
    minGrayPseudoWidth: 10,
    debug: true,
    debugTime: 3000,
    filterClass: ["tab-item", "course-img", "content", "footer-btn"],
  },
  // {
  //   pageUrl: 'http://10.8.16.145:8080/parent-wx-h5Shop-list.html?id=5db95977947acb2e6d0c5a2d&fromtype=zheguangtestdddd&code=061qlt7j29zDpB0wE56j2HXe7j2qlt7j&state=parent',
  //   openRepeatList: true,
  //   device: "iPhone 6", // 为空则使用默认 PC 页面打开
  //   minGrayBlockWidth: 20,
  //   minGrayPseudoWidth: 10,
  //   debug: true,
  //   debugTime: 3000,
  // }
];
skeletonObj.map((item) => {
  getSkeleton({
    pageName: spliPageName(item.pageUrl),
    pageUrl: `${item.pageUrl}&role=puppeteer`,
    openRepeatList: true,
    device: "iPhone 6", // 为空则使用默认 PC 页面打开
    minGrayBlockWidth: 20,
    minGrayPseudoWidth: 10,
    debug: true,
    debugTime: 3000,
    filterClass: item.filterClass,
  });
});

// .then((result) => {
//   // console.log(result.html)
// });
