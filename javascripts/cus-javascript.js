var $firstName = document.getElementById('first-name');
var $lastName = document.getElementById('last-name');
var $infoText = document.getElementById('info-text');

function printName() {
    $infoText.style.visibility = "visible";
    $infoText.innerText = $firstName.value + ' ' + $lastName.value;
    $firstName.focus();
}