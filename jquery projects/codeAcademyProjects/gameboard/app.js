/**
 * Created by Lenovo on 14-03-2016.
 */

var main = function() {
    $('a.more-btn').click(function(){
        $(this).next().toggle();
    });

    $('li.share').click(function(){
        $(this).next().toggle();
    });

    $('span.notification').click(function(){
        $(this).toggleClass('active');
    });
};

$(document).ready(main);