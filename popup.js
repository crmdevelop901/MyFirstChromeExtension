//  java code used for the extension format...

//  code will be used below to match up with the extension...
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            d = document;
            window.open('https://www.c-sharpcorner.com/UploadFile/9582c9/basic-C-Sharp-programming-problem-and-solutions-part1/', 'blank');
        });
    }, false);
}, false);