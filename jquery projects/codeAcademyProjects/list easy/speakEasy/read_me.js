/**
 * Created by Lenovo on 14-03-2016.
 */

// We'll use the Annyang to add voice commands to the app. Try out the examples on this page.
// Here's a code example for how to use Annyang:

// This code has three parts:
// First the command "show me" is defined, and saved into a variable named commands.
// Anything after the splat (*) is passed as input to the showFlickr function.
// Next, commands is added to Annyang with .addCommands().
// Then, Annyang starts listening for the command with .start().

var showFlickr = function(term) {
    var url = 'http://api.flickr.com/services/rest/?tags='+tag;
    $.getJSON(url);
};

var commands = {
    // Let's define our first command. First the command we expect, and then the function it should call
    // annyang will capture anything after a splat (*) and pass it to the function.
    // e.g. saying "Show me Batman and Robin" is the same as calling showFlickr('Batman and Robin');
    'show me *term': showFlickr,
};

// Add our commands to annyang
annyang.addCommands(commands);

// Start listening
annyang.start();


