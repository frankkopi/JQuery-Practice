/**
 * Created by Lenovo on 14-03-2016.
 */

var main = function(){
    $('.dropdown').click(function(){

        var elemIsVisible = $(this).find('.dropdown-menu').is(':visible');
        $('.dropdown-menu').hide();

        if (elemIsVisible) {
            $(this).find('.dropdown-menu').hide();
        }
        else {
            $(this).find('.dropdown-menu').show();
        }

    });
};


$(document).ready(main);