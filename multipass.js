{
    var pathArray = window.location.pathname.split("/");
    var secondLevelLocation = pathArray[4] || '';
    var pathOne = pathArray[1] || '';
    var o = secondLevelLocation;
    var n = "https://copilot.aws.conde.io/wrd/articles/";
    if ((secondLevelLocation.length === 24 )) {
    n = "https://copilot.aws.conde.io/wrd/articles/" + o;
    console.log("preview:" + n);
            window.open(n);
        } else if (pathOne.length === 6 ) {
        var c = document.querySelector("meta[name='id']").getAttribute("content");
        n = "https://copilot.aws.conde.io/wrd/contributors/" + c;
            console.log("contributor:" + n);
            window.open(n);
            } else if (pathOne.length === 8 ) {
            var c = document.querySelector("meta[name='id']").getAttribute("content");
            n = "https://copilot.aws.conde.io/wrd/bundles/" + c;
                console.log("bundle:" + n);
                            window.open(n);
            } else if (pathOne.length === 0 ) {
            var c = document.querySelector("meta[name='id']").getAttribute("content");
            n = "https://copilot.aws.conde.io/wrd/bundles/" + c;
                console.log("homepage:" + n);
                            window.open(n);
                } else n = "https://copilot.aws.conde.io/wrd/articles/" + o,
                            window.open(n);
               console.log("************************");
               console.log("meta:" + c + "url:" + o);
               console.log(secondLevelLocation);
               console.log(pathOne);
               console.log("************************");
}
