//add before, replace, delete---elements with javascript
var aTag = document.createElement('a');
var aTagText = document.createTextNode('aAtag');
aTag.appendChild(aTagText);
aTag.setAttribute('name', 'aTag-name');

var bTag = document.createElement('a');
var bTagText = document.createTextNode('btag');
bTag.appendChild(bTagText);
bTag.setAttribute('name', 'bTag-name');

var topDiv = document.getElementById('top-div');
var aContact = topDiv.children[2];
var aAbout = topDiv.children[1];
//topDiv.insertBefore(aTag , aContact);
//topDiv.replaceChild(aTag, aContact);
//topDiv.removeChild(aContact);
//topDiv.removeChild(aContact);
//topDiv.replaceChild(aTag , aAbout);
//topDiv.appendChild(bTag);

