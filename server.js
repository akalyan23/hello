var http = require('http');
var fs = require('fs');
var path = require('path'); // Import Node.js core module

function changeBackground(color) {
    document.body.style.background = color;
 }      
function createButtons(){
    var unit1button = buttons("Unit1", "Unit 1", 'white');
    var unit2button = buttons("Unit2", "Unit 2", 'white');
    var unit3button = buttons("Unit3", "Unit 3", 'white');
    var unit4button = buttons("Unit4", "Unit 4", 'white');
    var unit5button = buttons("Unit5", "Unit 5", 'white');
    var unit6button = buttons("Unit6", "Unit 6", 'white');
}

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        window.addEventListener("load",function() { createButtons()});
    
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.sendFile(__dirname + "public/" + "unit1.html" );

        // set response content    
        window.addEventListener("load",function() { changeBackground('slategrey') });
        res.end();

    }
    else if (req.url == "/unit1") {
        createButtons();
        Unit1.getElementbyId("HeimlersUnit1").onclick = function() {unit1HH()};
        res.write('unit1.html');
        res.end();

    }
    else if (req.url == "/unit2") {
        createButtons();
        Unit2.getElementbyId("HeimlersUnit2").onclick = function() {unit2HH()};

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('unit2.html');
        res.end();

    }
    
    else if (req.url == "/unit3") {
        createButtons();
        Unit3.getElementbyId("HeimlersUnit3").onclick = function() {unit3HH()};

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><head>These are the  notes for unit 3.</head></body></html>');
        res.end();

    }
    else if (req.url == "/unit4") {
        createButtons();
        Unit4.getElementbyId("HeimlersUnit4").onclick = function() {unit4HH()};

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><head>These are the  notes for unit 4.</head></body></html>');
        res.end();

    }
    else if (req.url == "/unit5") {
        createButtons()
        Unit5.getElementbyId("HeimlersUnit5").onclick = function() {unit5HH()};

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><head>These are the  notes for unit 5.</head></body></html>');
        res.end();

    }
    else if (req.url == "/unit6") {
        createButtons();
        Unit6.getElementbyId("HeimlersUnit6").onclick = function() {Unit6SV()};

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><head>These are the  notes for unit 6.</head></body></html>');
        res.end();

    }
    else
        res.end('Invalid Request!');

});

server.listen(5000); // listen for any incoming requests

console.log('Node.js web server running at http://localhost:5000...');