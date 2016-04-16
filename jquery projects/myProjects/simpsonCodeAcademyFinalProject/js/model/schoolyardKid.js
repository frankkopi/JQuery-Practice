/**
 * Created by Lenovo on 05-04-2016.
 */

/* A SchoolyardKid class (SchoolyardKid constructor function)*/

var SchoolyardKid = function(name) {
    this.name = name;
    this.canHelp = false;
    this.responses = {
        homework: "Sorry, I'm doing homework.",
        scared: "No way, Nelson is a beast!",
        brave: "Sure, I've been meaning to get back at that jerk."
    };
};

/*
 SchoolYardKid.prototype.randomResponse = function() {
 var randomNum = Math.floor((Math.random() * 3) + 1);
 if (randomNum === 1) {
 return this.responses.homework;
 } else if (randomNum === 2) {
 return this.responses.scared;
 else {
 return this.responses.brave;
 }
 };
 */
