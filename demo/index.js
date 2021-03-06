const getSkeleton = require("../src/index");
const spliPageName = (url) => {
  return new URL(url).pathname
    .split("/")
    .pop()
    .replace(/\.html/, "");
};

const skeletonObj = [
  {
    pageUrl:
      "https://test.yangcong345.com/parent-wx-h5Shop-shopShow.html?actId=5e796b01cce13f039dca4ee5",
    filterClass: [],
  },
  {
    pageUrl:
      "https://test.yangcong345.com/parent-wx-h5Shop-list.html?id=5db95977947acb2e6d0c5a2d&fromtype=zheguangtestdddd&code=061qlt7j29zDpB0wE56j2HXe7j2qlt7j&state=parent",
    filterClass: [],
  },
  {
    pageUrl:
      "https://test.yangcong345.com/parent-wx-h5Shop-my.html?id=5db95977947acb2e6d0c5a2d&fromtype=zheguangtestdddd",
    filterClass: [],
  },

  {
    pageUrl:
      "https://test.yangcong345.com/parent-wx-h5Shop-orderList.html?id=5db95977947acb2e6d0c5a2d",
    filterClass: [],
  },
  {
    pageUrl:
      "https://h5-v5-0.yangcong345.com/parent-wx-wrongBook-list.html?unionId=o8Xt4t-FKNinpBkr1dzMRgUsxUGM&fromType=all",
    filterClass: [
      {
        class:'topic',
        color: "#ebebeb",
      }
    ],
  },
];
skeletonObj.map((item) => {
  getSkeleton({
    pageName: spliPageName(item.pageUrl),
    pageUrl: `${item.pageUrl}&role=puppeteer`,
    openRepeatList: true,
    device: "iPhone 6", // 为空则使用默认 PC 页面打开
    minGrayBlockWidth: 20,
    minGrayPseudoWidth: 10,
    debug: false,
    debugTime: 3000,
    filterClass: item.filterClass,
    outputPath:'/Users/lizheguang/GuangheCode/WX_H5/static/skeleton/'//写入你要生成的目录在哪个项目里
  });
});

// .then((result) => {
//   // console.log(result.html)
// });
