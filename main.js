var width = 1024,
    height = 576;

chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create("index.html", {
        minWidth: width,
        width: width,
        defaultWidth: width,
        maxWidth: width,

        minHeight: height,
        height: height,
        defaultHeight: height,
        maxHeight: height
    });
});
