/**
 * Created by Lenovo on 12-03-2016.
 */

var main = function() {
    $('.day').click(function(){
        // .next() will get the immediately following sibling of each element in the set of matched elements. If a selector is provided, it retrieves the next sibling only if it matches that selector.
        $(this).next().toggleClass('hourly');
        // .find() will get the descendants of each element in the current set of matched elements, filtered by a selector, jQuery object, or element.
        $(this).find('.glyphicon').toggleClass('glyphicon-minus');
    });
};

$(document).ready(main);