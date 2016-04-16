/**
 * Created by Lenovo on 13-03-2016.
 */

var main = function() {
    $('img').click(function(){
        // toggle() will display or hide the matched elements.
        $('ul').toggle();
    });
};

$(document).ready(main);