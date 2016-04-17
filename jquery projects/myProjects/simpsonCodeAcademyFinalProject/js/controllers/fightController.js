/**
 * Created by Lenovo on 13-04-2016.
 */

    var attack = function() {
        return Math.floor((Math.random() * 10) + 1);
    };

    // Throw button - fighting Nelson
    var $count = 3;
    var $hits = 0;
    var $misses = 0;
    var $hitsOutOfThree = 0;
    $('button#fightButton').click(function() {
        $('#weapon' + $count).effect('explode');
        var $hitEffect = attack();
        if($hitEffect >= 3) {
            $hits++;
            $hitsOutOfThree++;
            $('#hits .throws').html($hits);
        }
        else {
            $misses++;
            $('#misses .throws').html($misses);
        }
        $count--;
        if($count < 1) {
            if($hitsOutOfThree === 3) {
                nelson.backdownTimes++;
                if(nelson.backdownTimes >= 3) {
                    playerWinByNelsonBackingDown();
                }
                else {
                    setTimeout(function(){
                        replaceDivs('#fightingNelson', '#nelsonBackedDown');
                        plusPlayerPoints(10);

                        $('#points').html(getPlayerPoints());
                        $hitsOutOfThree = 0;
                    }, 500);
                    $('#nelsonBackedDown .btnKeepGoing').click(function(){
                        replaceDivs('#nelsonBackedDown', '#firstChoice');
                        $('#secondChoice input[name="helpBartToday"]').val('');
                        $('#answer1').remove();
                        $('#fightingNelson img').css('display', 'inline');
                        removeWeaponFromPlayer(0);
                        clearPlayerWeaponImage();
                    });
                }
            }
            else {
                minusPlayerPoints(10);
                if(getPlayerPoints() <= 0) {
                    playerLoose();
                }
                else {
                    $('#points').html(getPlayerPoints());

                    setTimeout(function() {
                        replaceDivs('#fightingNelson', '#wontBackDown');
                        $hitsOutOfThree = 0;
                    }, 500);
                    $('#wontBackDown .btnKeepGoing').click(function(){
                        replaceDivs('#wontBackDown', '#fightingNelson');
                        $('#fightingNelson img').css('display', 'inline');
                    });
                }
            }
            $count = 3;
        }
    });
