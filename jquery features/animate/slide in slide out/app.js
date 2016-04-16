/**
 * Created by Lenovo on 13-03-2016.
 */

$(document).ready(function(){

    $('#btn1').click(function(){
        $('#box1').animate({left: '100px'}, 1000, 'linear');
    });
    $('#btn2').click(function(){
        $('#box1').animate({left: '-210px'}, 1000, 'linear');
    });



    $('#btn3').click(function(){
        $('#box2').animate({top: '-490px'}, 1000, 'linear');
    });
    $('#btn4').click(function(){
        $('#box2').animate({top: '-240px'}, 1000, 'linear')
    });

});