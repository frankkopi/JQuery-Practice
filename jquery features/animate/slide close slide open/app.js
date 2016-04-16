/**
 * Created by Lenovo on 13-03-2016.
 */

$(document).ready(function(){

    $('#btn1').click(function(){
        $('#box1').hide('slide', {direction:'up'}, 500);
        //$('#box1').slideUp();
    });
    $('#btn2').click(function(){
        $('#box1').show('slide', {direction:'up'}, 500);
        //$('#box1').slideDown();
    });



    $('#btn3').click(function(){
        $('#box2').hide('slide', {direction:'left'}, 500);
    });
    $('#btn4').click(function(){
        $('#box2').show('slide', {direction:'left'}, 500);
    });



    $('#btn5').click(function(){
        $('#box3').hide('slide', {direction:'right'}, 500);
    });
    $('#btn6').click(function(){
        $('#box3').show('slide', {direction:'right'}, 500);
    });
});