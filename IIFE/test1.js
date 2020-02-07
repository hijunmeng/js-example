//$(document).ready(function(){};等同于$(function(){});

//DOM加载完成后执行的回调函数，并且只会执行一次
$( document ).ready(function() {
    $(document.body).append("$(document).ready(function(){}; is now been executed!!!<br /><br />"); 
});

$(function(){
    $(document.body).append("$(function(){}); is now been executed!!!<br /><br />"); 
});
