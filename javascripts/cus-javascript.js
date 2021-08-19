var aTag = document.createElement('a');
var aText = document.createTextNode('Inja click koni miri google');
aTag.appendChild(aText);
aTag.setAttribute('href', 'http://google.com');
aTag.setAttribute('id', 'google-links');

var topDiv = document.getElementById('top-div');
topDiv.appendChild(aTag);