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
        var content = document.querySelector("meta[name='id']").getAttribute("content");
        var gotoURL = "https://ci-copilot.aws.conde.io/wrd/articles/" + content;
        window.open(gotoURL);
    })()
}();
