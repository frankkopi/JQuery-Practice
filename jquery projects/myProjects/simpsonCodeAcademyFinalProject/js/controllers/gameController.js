/**
 * Created by Lenovo on 05-04-2016.
 */

    var main = function() {
        $('#startGame').click(function() {
            newGame();
        });
    };

    var newGame = function() {
        // greetings and show first choice pane
        replaceDivs('#introPane', '#greetings');
        $('button#submitName').click(function() {
            var $playerName = $('input[name="playerName"]').val();

            if($playerName === '') {
                $('#greetings h3').addClass('show'); // errorMessage: Please enter your name!
            }
            else {
                $('#welcomeCaption').remove();
                $('#gameScoreCaption').addClass('show');
                $('#points').html(getPlayerPoints());
                replaceDivsAndRemove('#greetings', '#firstChoice');
                $('.playerName').html($playerName);
                setPlayerName($playerName);
            }
        });

        // Button pick first weapon
        $('#pickFirstWeapon').click(function(){
            $('#errorMessage1').remove();
            showErrorMessage = true;
            var $firstWeapon = $('input[name="firstChoice"]:checked').val();
            addWeaponToPlayer($firstWeapon);
            setPlayerWeaponImage();
            replaceDivs('#firstChoice', '#secondChoice');
        });

        // Button help Bart today
        var showErrorMessage = true;
        $('button#helpBartToday').click(function(){
            var $answer = $('input[name="helpBartToday"]').val();
            if ($answer.toLowerCase() === 'yes') {
                plusPlayerPoints(5);
                $('#points').html(getPlayerPoints());
                var $yesAnswerDiv = $("<div id='answer1' class='gameChoices'>" +
                    "<h2>Great! you have earned 5 points</h2>" +
                    "<p>Let's go to school</p>" +
                    "<button id='yes' class='continueButton'>Continue</button></div>");

                showGameResponse('#secondChoice', $yesAnswerDiv);
                $(document).on('click', '#yes', function(){
                    replaceDivs('#answer1', '#meetingNelson');
                    $('#weaponText').html('throw ' + getWeapon(0));
                })
            }
            else if ($answer.toLowerCase() === 'no') {
                minusPlayerPoints(5);
                if (getPlayerPoints() <= 0) {
                    playerLoose();
                } else {
                    $('#points').html(getPlayerPoints());
                    removeWeaponFromPlayer(0);
                    clearPlayerWeaponImage();

                    var $noAnswerDiv = $("<div id='answer1' class='gameChoices'>" +
                        "<h2>You have lost 5 points</h2>" +
                        "<p>Go to school today, and come back tomorrow</p>" +
                        "<button id='no' class='continueButton'>Continue</button></div>");

                    showGameResponse('#secondChoice', $noAnswerDiv);
                    $(document).on('click', '#no', function(){
                        $('input[name="helpBartToday"]').val('');
                        replaceDivsAndRemove('#answer1','#firstChoice');
                    });
                }
            }
            else {
                if (showErrorMessage) {
                    var $newHtml = ("<p id='errorMessage1' class='errorMessage'>Please try again. Type 'yes' or 'no'</p>");
                    $('#insertErrorAfterThisParagraph1').after($newHtml);
                    showErrorMessage = false;
                }
            }
        });

        // button meeting Nelson
        $('#btnMeetingNelson').click(function(){
            var $answer = $('input[name="meetingNelsonChoice"]:checked').val();
            if($answer.toLowerCase() === 'weapon') {
                replaceDivs('#meetingNelson', '#fightingNelson');
                $('#yourWeapon').html(getWeapon(0));
                $('#fightingNelson img').attr('src', getPlayerWeaponImage());
                $('#hits .throws').html($hits);
                $('#misses .throws').html($misses);
            }
            else if($answer.toLowerCase() === 'askforhelp') {
                replaceDivs('#meetingNelson', '#askForHelp');
            }
            else if($answer.toLowerCase() === 'run') {
                minusPlayerPoints(10);
                if(getPlayerPoints() <= 0) {
                    playerLoose();
                }
                else {
                    $('#points').html(getPlayerPoints());
                    replaceDivs('#meetingNelson', '#runOff');
                    $('#btnRunOff').click(function(){
                        replaceDivs('#runOff', '#firstChoice');
                        $('#secondChoice input[name="helpBartToday"]').val('');
                        $('#answer1').remove();
                        removeWeaponFromPlayer(0);
                    });
                }
            }
        });
    };




    // replace one div (fadeOut) with another div (fadeIn)
    var replaceDivs = function(divOne, divTwo) {
        $(divOne).fadeOut(200);
        setTimeout(function() {
            $(divOne).css('display', 'none');
            $(divTwo).fadeIn(500);
            $(divTwo).css('display', 'inline-block');
        }, 300);
    };

    // remove one div (fadeOut) and fadeIn another div
    var replaceDivsAndRemove = function(divOne, divTwo) {
        $(divOne).fadeOut(200);
        setTimeout(function() {
            $(divOne).remove();
            $(divTwo).fadeIn(500);
            $(divTwo).css('display', 'inline-block');
        }, 300);
    };

    // replace the question div with the game response div
    var showGameResponse = function(divOne, divTwo) {
        $(divOne).fadeOut(200);
        setTimeout(function(){
            //$(divOne).remove();
            $(divTwo).css('display', 'inline-block');
            $('#gamePane').append(divTwo);
        }, 300);
    };

    var playerLoose = function() {
        $('#gamePane').empty();
        var $looseAndFinish = $("<div class='gameChoices'>" +
                                    "<h1>Game over</h1>" +
                                    "<h2>Sorry... You loose!</h2></div>");
        $looseAndFinish.css('display', 'inline-block');
        $('#gamePane').append($looseAndFinish);
    };

    var playerWinByNelsonBackingDown = function() {
        $('#gamePane').empty();
        var $winAndFinish = $("<div class='gameChoices'>" +
                                    "<h1>Congratulations You Win!</h1>" +
                                    "<h2>Nelson backed down 3 times</h2>" +
                                    "<h2>He won't pick on Bart again</h2></div>");
        $winAndFinish.css('display', 'inline-block');
        $('#gamePane').append($winAndFinish);
    };

    $(document).ready(function() {
        main();
    });






/*
 var backDown = false;
 function gameLoop() {
 while (backDown === false) {
 var userMove = confirm("Nelson won't back down! Try again!");
 var nelsonStatus = Math.floor((Math.random() * 5) + 1);
 if (nelsonStatus === 4) {
 alert("Nelson backed down -- Nice work!");
 backDown = true;
 };
 };
 };
 */
