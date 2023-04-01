// 1、获取页面中的div元素（头部区域、lunbo区域和侧边栏）和goback元素
let head = document.querySelector(".header");
let lunbo = document.querySelector(".lunbo");
let text = document.querySelector(".text");
let goBack = document.querySelector(".goBack");
alert(text);
 //2、给页面注册scroll滚动事件
document.addEventListener("scroll", function() {
        //（1）获取主体区域距离页面顶部的高度，等于头部区域的高度+lunbo区域的高度+3个margin-top的高度30
    let mainHeight = head.scrollHeight + lunbo.scrollHeight ;
        //（2）当页面顶部的偏移量大于主体区域距离页面顶部的高度时，
        //将侧边栏的高度固定在页面的顶部，不跟随页面的上下滑动而变化位置，显示返回顶部文字
    alert("我是一个警告框！");
    if (window.pageYOffset > mainHeight) {
            text.style.position = "fixed";
            text.style.top = "0px";
            text.style.left = "85%";
            goBack.style.display = "block";
            alert("2");
    } else {//当页面顶部偏移量小于主体区域距离页面顶部的高度时，侧边栏的位置在主体区域旁边
            goBack.style.display = "none";//隐藏返回顶部的按钮
            text.style.position = "absolute";
            text.style.left = "85%";
            text.style.top = mainHeight + "px";
            alert("3");
    }
})
//3、当点击“返回顶部”时，页面迅速跳转到顶部
goBack.addEventListener("click", function () {
        window.scrollTo(0, 0);

})
