//$(document).ready(function(){};等同于$(function(){});

////DOM加载完成后执行的回调函数，并且只会执行一次
$(function(){
    $(document.body).append("$(function(){}); is now been executed!!!<br /><br />"); 
});