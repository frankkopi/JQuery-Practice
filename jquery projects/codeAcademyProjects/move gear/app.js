/**
 * Created by Lenovo on 15-03-2016.
 */

var main = function(){
    $('.login').click(function(){
        $('.dropdown-menu').toggle();
    });


    $(function(){
        $( "#accordion" ).accordion();
    });

};


$(document).ready(main);