javascript: void
function() {
    (function() {
        var o = document.querySelector("body").getAttribute("class"),
            t = /postid-(\d+)/,
            i = t.exec(o)[1],
            n = "/wp-admin/post.php?post=" + i + "&action=edit",
            c = window.location.protocol + "//" + window.location.host + n;
        window.open(c)
    })()
}();
