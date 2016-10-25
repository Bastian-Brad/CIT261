var brad = { name: "Brad", age: 36, occupation: "Developer" };
var inputString = null;

function DefaultJSObj() {
    document.getElementById("stringified").style.display = "none";
    document.getElementById("output").style.display = "none";
    document.getElementById("defaultJSObj").style.display = "block";
}

function Stringify() {
    if (document.getElementById("defaultJSObj").style.display === "block") {
        var bradStringified = JSON.stringify(brad);
        document.getElementById("stringified").innerHTML = "<b>Stringified: </b>" + bradStringified;
        document.getElementById("stringified").style.display = "block";
    }
}

function Parse() {
    inputString = document.getElementById("input").value;
    document.getElementById("stringified").style.display = "none";
    if (isJSON(inputString)) {
        document.getElementById("defaultJSObj").style.display = "none";

        var JSObj = JSON.parse(inputString);
        var parsedObj = "";
        for (var key in JSObj) {
            if (JSObj.hasOwnProperty(key)) {
                parsedObj += "<p>" + key + ": " + JSObj[key] + "<br />";
            }
        }
        document.getElementById("output").innerHTML = parsedObj;
        document.getElementById("output").style.display = "block";
    }
    else {
        document.getElementById("defaultJSObj").style.display = "none";
        document.getElementById("output").innerHTML = "Not a valid JSON string";
        document.getElementById("output").style.display = "block";
    }
}

function isJSON(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}