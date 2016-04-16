/**
 * Created by Lenovo on 12-03-2016.
 */

var main = function() {
    $('form').submit(function() {
        console.log("hello");
        var firstName = $('#first').val();
        var lastName = $('#last').val();
        var email = $('#email').val();
        var password = $('#password').val();

        if(firstName === "") {
            $('.first-name-error').text('Please enter your first name');
        } else {
            $('.first-name-error').text('');
        }

        if(lastName === "") {
            $('.last-name-error').text('Please enter your last name');
        } else {
            $('.last-name-error').text('');
        }

        if(email === "") {
            $('.email-error').text('Please enter your email address');
        } else if(email === 'frank@mail.dk') {
            $('.email-error').text('This email is already taken');
        } else {
            $('.email-error').text('');
        }

        if(password === "") {
            $('.password-error').text('Please enter a password');
        } else if(password.length < 8) {
            $('.password-error').text('Short passwords are easy to guess. Try one with a least 8 characters');
        } else {
            $('.password-error').text('');
        }

        return false;
    })
};

$(document).ready(main);
