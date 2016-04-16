/**
 * Created by Lenovo on 14-03-2016.
 */

var main = function() {
    var availableCities = [
        "New York",
        "Kansas City",
        "Chicago",
        "Los Angeles",
        "Washington DC",
        "Copenhagen",
        "Paris",
        "London",
        "Frankfurt",
        "Hamburg"
    ];

    $( "#city" ).autocomplete({
        source: availableCities
    });
};

$(document).ready(main);