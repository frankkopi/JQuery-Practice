/**
 * Created by Lenovo on 08-04-2016.
 */

    var setPlayerName = function(newName) {
        player.name = newName;
    };

    var addWeaponToPlayer = function(weapon) {
        player.weapons.push(weapon);
    };

    var getWeapon = function(number) {
        return player.weapons[number];
    };

    var removeWeaponFromPlayer = function(index) {
        player.weapons.splice(index, 1); // at position index remove 1 item
    };

    var minusPlayerPoints = function(points) {
        player.points -= points;
    };

    var plusPlayerPoints = function(points) {
        player.points += points;
    };

    var getPlayerPoints = function() {
        return player.points;
    };

    var setPlayerWeaponImage = function() {
        switch(player.weapons[0]) {
            case 'water balloons':
                player.weaponImage = 'images/balloon.png';
                break;
            case 'flour bombs':
                player.weaponImage = 'images/flour.png';
                break;
            case 'pins':
                player.weaponImage = 'images/pin.png';
        }
    };

    var getPlayerWeaponImage = function() {
        return player.weaponImage;
    };

    var clearPlayerWeaponImage = function() {
        player.weaponImage = '';
    };

