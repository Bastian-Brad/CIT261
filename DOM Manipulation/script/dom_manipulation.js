window.onload = addElement;

function addElement() {
    // create a new div element 
    // and give it some content 
    var header = document.createTextNode("DOM Manipulation");
    document.getElementById("header").appendChild(header);
    var newDiv = document.createElement("div");
    var newContent = document.createTextNode("Hi there and greetings!");
    newDiv.appendChild(newContent); //add the text node to the newly created div. 

    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);

    var button = document.createElement("button");
    var btnText = document.createTextNode("Remove content");
    button.onclick = RemoveElement;
    button.appendChild(btnText);
    document.body.appendChild(button);
}

function RemoveElement() {
    var div1 = document.getElementById("div1");
    document.body.removeChild(div1);
}