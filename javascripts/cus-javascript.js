var aTag = document.createElement('a');
var aText = document.createTextNode('Salam');
aTag.appendChild(aText);

var bTag = document.createElement('a');
var bText = document.createTextNode('Chetori');
bTag.appendChild(bText);

var topDiv = document.getElementById('top-div');
topDiv.appendChild(aTag);
topDiv.appendChild(bTag);
//topDiv.replaceChild(bTag, aTag);
//topDiv.removeChild(bTag);