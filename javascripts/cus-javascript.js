var $pInfo = document.getElementById('text-info');
var $firstName = document.getElementById('first-name');
var $textPriority = document.getElementById('text-priority');

function printText() {
    $pInfo.style.visibility = "visible";
    $pInfo.innerHTML = $firstName.value;
}

function replaceName(){
    $pInfo.innerHTML = $pInfo.innerHTML.replace(/reza/i, "Sara");
}

function priorityAction(){
    $textPriority.style.visibility = "visible";
    $textPriority.innerHTML = $pInfo.innerHTML.indexOf('e');
    //$textPriority.innerHTML = $pInfo.innerHTML.charAt(2);
}