
var light = document.getElementById('div-light');
var massage = document.getElementById('massage');

function lightOn() {
    light.style.backgroundColor = "yellow";
    massage.style.visibility = "visible";
    massage.innerHTML='Turn On Light';
    

}
function lightOff(){
    light.style.backgroundColor = null;
    massage.style.visibility = "visible";
    massage.innerHTML='Turn Off Light';
}