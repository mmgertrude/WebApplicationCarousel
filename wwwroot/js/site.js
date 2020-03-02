// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function printNextActive() {

    const dynamicContentNode = "This is the changing content";

    //Setting the `innerHTML` 
    document.getElementById('dynamicContent').innerHTML = dynamicContentNode;


}

setInterval(function () { printNextActive(); }, (2 * 1000));
