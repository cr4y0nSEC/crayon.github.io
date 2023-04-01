window.onload=function(){
    var items=document.getElementsByClassName("item");
    var circles=document.getElementsByClassName("circle");
    var leftBtn=document.getElementById("btn-left");
    var rightBtn=document.getElementById("btn-right");
    var content=document.querySelector('.content');
    var index=0;
    var timer=null;
    
    //清除class
    var clearclass=function(){
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
    timer=setInterval(function(){
        rightBtn.onclick();
    },1500)
    //点击圆点时，跳转到对应图片
    for(var i=0;i<circles.length;i++){
        circles[i].addEventListener("click",function(){
            index=this.getAttribute("num");
            move();
        })
    
    }
    }
