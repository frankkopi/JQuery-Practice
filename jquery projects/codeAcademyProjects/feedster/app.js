/**
 * Created by Lenovo on 13-03-2016.
 */

var main = function() {
    $('div.notification').first().click(function(){
        $('.notification-menu').toggle();
    });

    $('.btn').click(function(){
        $(this).toggleClass('btn-like');
    });
};

$(document).ready(main);