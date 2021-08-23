

function actionPluse (){
    var inputA = document.getElementById('input-01');
    var inputB = document.getElementById('input-02');
    var eText = document.createTextNode((Number(inputA.value)) + (Number(inputB.value)));
    var btn = document.getElementById('btn-01');
    var exitP = document.getElementById('text-exit');

    exitP.style.display = 'block';
    exitP.textContent = null;
    exitP.appendChild(eText);
    inputA.Value = null;
    inputB.Value = null;
    inputA.focus();
}