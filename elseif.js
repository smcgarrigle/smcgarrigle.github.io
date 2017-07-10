//else if approach expanding on original working JS

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



							[0]	[1]	 [2]	[3]			[4]
//https://copilot.aws.conde.io/wrd/preview/article/593ad0a79a93607bd17ca9ce
// don't forget to do the null thing first

{
    var pathArray = window.location.pathname.split("/");
    var secondLevelLocation = pathArray[4] || '';
    var pathOne = pathArray[1] || '';
    var o = secondLevelLocation;
    var n = "https://copilot.aws.conde.io/wrd/articles/";
    if ((secondLevelLocation.length === 24 )) {
    n = "https://copilot.aws.conde.io/wrd/articles/" + o;
    console.log("preview:" + n);
        } else if (pathOne.length === 6 ) {
        var c = document.querySelector("meta[name='id']").getAttribute("content");
        n = "https://copilot.aws.conde.io/wrd/contributors/" + c;
            console.log("contributor:" + n);
            } else if (pathOne.length === 8 ) {
            var c = document.querySelector("meta[name='id']").getAttribute("content");
            n = "https://copilot.aws.conde.io/wrd/bundles/" + c;
                console.log("bundle:" + n);
            } else if (pathOne.length === 0 ) {
            var c = document.querySelector("meta[name='id']").getAttribute("content");
            n = "https://copilot.aws.conde.io/wrd/bundles/" + c;
                console.log("homepage:" + n);
                } else n = "https://copilot.aws.conde.io/wrd/articles/" + o,
               console.log("************************");
               console.log("meta:" + c + "url:" + o);
               console.log(secondLevelLocation);
               console.log(pathOne);
               console.log("************************");
}


//                window.open(n);

// path only works for preview
// homepage lenth is zero
// section front will contain "/category/" -match on string?
// contribuet will contain "/author/" - match on strign
