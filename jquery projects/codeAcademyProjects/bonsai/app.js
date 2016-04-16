/**
 * Created by Lenovo on 11-03-2016.
 */

    var main = function() {
        $('#top-text').keyup(function(){
            $('h1.top-caption').text($(this).val());
        });

        $('#bottom-text').keyup(function(){
            $('h1.bottom-caption').text($(this).val());
        });

        $('#image-url').keyup(function(){
            $('img').attr('src', $(this).val());
        });
    };

    $(document).ready(main);