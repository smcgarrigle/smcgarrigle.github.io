javascript: void

function() {
    (function() {
        var o = document.querySelector("body").getAttribute("class"),
            t = /postid-(\d )/,
            i = t.exec(o)[1],
            n = "/wp-admin/post.php?post="
        i "&action=edit", c = window.location.protocol "//"
        window.location.host n;
        window.open(c)
    })()
}();

javascript: void

function() {
	(function() {

		var o = document.querySelector("meta[name='id']").getAttribute("content");
		n = "https://ci-copilot.aws.conde.io/wrd/articles/" + o,
		c = window.location.protocol "//"
		window.location.host n;
		window.open(c)
	})()
}();

// actual output
javascript:!function()%7B!function()%7B(function()%7Bvar o%3Ddocument.querySelector("meta%5Bname%3D%27id%27%5D").getAttribute("content"),n%3D"https://copilot.aws.conde.io/wrd/articles/"%2Bo%3Bwindow.open(n)%7D)()%7D()%7D()%3B


//extended editor for all preview links too
/* preview url that iFrames content from wired.com
https://copilot.aws.conde.io/wrd/preview/article/5935bbba31379d0b2f5b9013

If url has HASH - take it and go to https://ci-copilot.aws.conde.io/wrd/articles/ + hash
Else do the normal thing.

var = everythign to the right of /wrd/preview/article/
var pathArray = window.location.pathname.split( '/' );
var secondLevelLocation = pathArray[3];
if secondLevelLocation.length = 24
*/

// First pass at double copilot editor bookmarklet - previews and live urls

javascript:(function () {
    var pathArray = window.location.pathname.split( '/' );
    var secondLevelLocation = pathArray[2];
    if (secondLevelLocation.length === 24) {
         var o = secondLevelLocation;
         console.log(o);
         n = "https://copilot.aws.conde.io/wrd/articles/" + o,
         window.open(n);
         return;
    } else {
        var oh = document.querySelector("meta[name='id']").getAttribute("content");
        nh = "https://ci-copilot.aws.conde.io/wrd/articles/" + oh,
        window.open(nh);
    }
})();


// Working Bookmarklet for CP preview URLS
javascript:(function () {
    var pathArray = window.location.pathname.split("/");
    var secondLevelLocation = pathArray[4];
    var o = secondLevelLocation;
    n = "https://copilot.aws.conde.io/wrd/articles/" + o,
    window.open(n);
})();

// combine them together tested working

javascript:(function () {
    var pathArray = window.location.pathname.split("/");
    var secondLevelLocation = pathArray[4] || '';
    var o = secondLevelLocation;
    if ((secondLevelLocation.length === 24 )) {
    n = "https://copilot.aws.conde.io/wrd/articles/" + o,
    window.open(n);
} else {
    var o = document.querySelector("meta[name='id']").getAttribute("content");
    n = "https://copilot.aws.conde.io/wrd/articles/" + o,
    window.open(n);
}
})();

