/**
 * Created by Lenovo on 04-04-2016.
 */

$(document).ready(function() {
    $('div').mouseenter(function() {
        $(this).animate({
            height: '+=10px'
        });
    });
    $('div').mouseleave(function() {
        $(this).animate({
            height: '-=10px'
        })
    });
    $('div').click(function() {
        $(this).toggle(1000);
    })
});