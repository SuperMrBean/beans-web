(function () {
  //pc.js
  //设计图纸为1366
  function pagePc() {
    let rootValue = 100;
    let pc = rootValue / 1366; // 表示1366的设计图,使用100px的默认值
    let width = window.innerWidth; // 当前窗口的宽度
    let rem = "";
    rem = width * pc; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应font-size值
    document.documentElement.style.fontSize = rem + "px";
  }
  pagePc();
  window.onresize = function () {
    pagePc();
  };
})();
