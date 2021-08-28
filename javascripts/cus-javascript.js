

var $firstName = document.getElementById('first-name');
var $lastName = document.getElementById('last-name');
var $age = document.getElementById('age');

var $textInfo = document.getElementById('text-info');

function showInfo() {
    $textInfo.innerHTML = $firstName.value + ' ' + $lastName.value + ' ' + $age.value;
}