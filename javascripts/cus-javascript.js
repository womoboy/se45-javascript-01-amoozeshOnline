function onClickText () {

    var ppar = document.createElement('p');
    var input = document.getElementById('input-01');
    var ptext = document.createTextNode(input.value);
    ppar.appendChild(ptext);
    
    var topDiv = document.getElementById('top-div');
    topDiv.appendChild(ppar);
    input.value = null;
    input.focus();
}