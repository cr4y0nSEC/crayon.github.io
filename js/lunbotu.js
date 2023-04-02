window.onload=function(){
    let items=document.getElementsByClassName("item");
    let circles=document.getElementsByClassName("circle");
    // 返回左右按钮的引用
    let leftBtn=document.getElementById("btn-left");
    let rightBtn=document.getElementById("btn-right");
    // 获取文档中 id="content" 的元素赋给变量content
    let content=document.querySelector('.content');
    let index=0;
    let timer=0;
    
    //清除class
    let clearclass=function(){
        for(let i=0;i<items.length;i++){
            items[i].className="item";
            circles[i].className="circle";
            circles[i].setAttribute("num",i);
        }
    }
    //只显示一个class
    function move(){
        clearclass();
        items[index].className="item active";
        circles[index].className="circle white";
    }
    //点击右边按钮切换下一张图片
    rightBtn.onclick=function(){
        if(index<items.length-1){
            index++;
        }
        else{
            index=0;
        }
        move();
    }
    // 点击左边按钮切换上一张图片
    leftBtn.onclick=function(){
        if(index<items.length){
            index--;
        }
        else{
            index=items.length-1;
        }
        move();
    }
    //开始定时器，点击右边按钮，实现轮播
    // 周期函数
    timer=setInterval(function(){
        rightBtn.onclick(undefined);
    },1500)
    //点击圆点时，跳转到对应图片
    for(let i=0;i<circles.length;i++){
        // 为元素添加点击事件
        circles[i].addEventListener("click",function(){
            // 获得num的属性值
            index=this.getAttribute("num");
            move();
        })
    
    }
    }
