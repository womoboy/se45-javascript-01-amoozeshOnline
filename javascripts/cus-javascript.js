function onClickText () {
     var input = document.getElementById('input-01');
     var pPar = document.createElement('p');
     var pText = document.createTextNode(input.value);
     pPar.appendChild(pText);

     var topDiv = document.getElementById('top-div');
     topDiv.appendChild(pPar);
     input.value = null;
     input.focus();
}