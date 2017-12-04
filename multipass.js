    var pathArray = window.location.pathname.split('/');
    var secondLevelLocation = pathArray[4] || '';
    var pathOne = pathArray[1] || '';
    var o = secondLevelLocation;
    var n = "https://copilot.aws.conde.io/wrd/articles/";
    if ((secondLevelLocation.length === 24 )) {
    n = "https://copilot.aws.conde.io/wrd/articles/" + o;
            window.open(n);
        } else if (pathOne.length === 6 ) {
        var c = document.querySelector("meta[name='id']").getAttribute("content");
        n = "https://copilot.aws.conde.io/wrd/contributors/" + c;
            window.open(n);
            } else if (pathOne.length === 7 ) {
            var c = document.querySelector("meta[name='id']").getAttribute("content");
            n = "https://copilot.aws.conde.io/wrd/galleries/" + c;
            window.open(n);
            } else if (pathOne.length === 8 ) {
            var c = document.querySelector("meta[name='id']").getAttribute("content");
            n = "https://copilot.aws.conde.io/wrd/bundles/" + c;
                    window.open(n);
            } else if (pathOne.length === 0 ) {
            var c = document.querySelector("meta[name='id']").getAttribute("content");
            n = "https://copilot.aws.conde.io/wrd/bundles/" + c;
                    window.open(n);
            } else if (document.querySelector("meta[property='og:type']").getAttribute("content") === "review") {
            var c = document.querySelector("meta[name='id']").getAttribute("content");
            n = "https://copilot.aws.conde.io/wrd/reviews/" + c,
                    window.open(n);
            } else if (document.querySelector("meta[property='og:type']").getAttribute("content") != "review") {
            var c = document.querySelector("meta[name='id']").getAttribute("content");
            n = "https://copilot.aws.conde.io/wrd/articles/" + c,
              window.open(n);
            }
               console.log("********BookMarklet****************");
               console.log("meta: " + c);
               console.log("path: " + n);
               console.log("************************************");
