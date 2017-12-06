//导航左侧按钮
$(function(){
    var nav_left=$('.nav_left');
   $(nav_left).mouseover(function(){
       $(this).children().css('background','#ff0000');
   });
    $(nav_left).mouseout(function(){
        $(this).children().css('background','#8f8f8f');
    });
    $(nav_left).click(function(){
        $('#aside').animate({left:0},400);
    });
    $('.aside-top').click(function(){
        $('#aside').animate({left:'-370px'},400);
    })
});
//左侧栏li +
$(function(){
    var s=false;
    $('.total span').click(function(){
        if(s){
            $(this).next().slideUp();
            $(this).text('+');
            s=false;
        }else{
            $(this).next().slideDown();
            $(this).text('-');
            s=true;
        }
    })
});


















