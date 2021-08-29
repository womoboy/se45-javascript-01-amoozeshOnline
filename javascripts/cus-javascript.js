var $pInfo = document.getElementById('text-info');
var $firstName = document.getElementById('first-name');

function printText() {
    $pInfo.style.visibility = "visible";
    $pInfo.innerHTML = "your name is: " + $firstName.value;
}
function replaceName(){
    $pInfo.innerHTML = $pInfo.innerHTML.replace(/reza/i, "Sara");
}