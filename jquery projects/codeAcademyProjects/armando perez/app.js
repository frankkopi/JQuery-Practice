/**
 * Created by Lenovo on 12-03-2016.
 */

var main = function() {
    $('.nav li').click(function() {
        var category = $(this).attr('class');

        $('.nav li').removeClass('active');
        $(this).addClass('active');

        if(category === 'nav-consumer') {
            $('.main').find('.thumbnail').removeClass('selected');
            $('.main').find('.consumer').addClass('selected');
        }
        else if(category === 'nav-mobile') {
            $('.main').find('.thumbnail').removeClass('selected');
            $('.main').find('.mobile').addClass('selected');
        }
        else if(category === 'nav-commerce') {
            $('.main').find('.thumbnail').removeClass('selected');
            $('.main').find('.commerce').addClass('selected');
        }
        else if(category === 'nav-enterprise') {
            $('.main').find('.thumbnail').removeClass('selected');
            $('.main').find('.enterprise').addClass('selected');
        }
        else if(category === 'nav-all') {
            $('.main').find('.thumbnail').removeClass('selected');
        }

    });
};

$(document).ready(main);