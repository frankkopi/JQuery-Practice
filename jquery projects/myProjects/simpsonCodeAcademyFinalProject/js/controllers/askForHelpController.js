/**
 * Created by Lenovo on 17-04-2016.
 */

    $('#btnAskForHelp').click(function(){
        var $person = $('input[name = "askForHelp"]:checked').val();
        if($person.toLowerCase() === 'milhouse') {
            var $newHelperDiv1 = createHelper('images/milhouse-van-houten.png', 'Milhouse Van Houten', 150);
            showGameResponse('#askForHelp', $newHelperDiv1);
        }
        else if($person.toLowerCase()=== 'richard') {
            var $newHelperDiv2 = createHelper('images/richard.png', 'Richard', 70);
            showGameResponse('#askForHelp', $newHelperDiv2);
        }
        else {
            var $newHelperDiv3 = createHelper('images/mackleberry-twiins.png', 'The Mackleberry Twiins', 167);
            showGameResponse('#askForHelp', $newHelperDiv3);
        }
    });


    // create an element that shows the helper
    var createHelper = function(image, name, setWidth) {
        var $helper = $("<div id='test' class='gameChoices'>" +
                            "<h2>" + name + "</h2>" +
                            "<img src='"+ image + "' width='" + setWidth + "' height='200'/>" +
                        "</div>");

        return $helper;
    };