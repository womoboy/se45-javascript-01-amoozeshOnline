function onClickText () {
    var pPar = document.createElement('p');
    var pText = document.createTextNode('Hi World!');
    pPar.appendChild(pText);

    var topDiv = document.getElementById('top-div');
    topDiv.appendChild(pPar);
}