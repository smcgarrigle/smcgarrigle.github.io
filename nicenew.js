function () {
    var pathArray = window.location.pathname.split("/");
    var secondLevelLocation = pathArray[4] || '';
    var o = secondLevelLocation;
    var c = document.querySelector("meta[name='id']").getAttribute("content");
    if ((secondLevelLocation.length === 24 )) {
    n = "https://copilot.aws.conde.io/wrd/articles/" + o;
        } else if (secondLevelLocation.length === 6 ) {
        n = "https://copilot.aws.conde.io/wrd/contributors/" + c;
            } else if (secondLevelLocation.length === 7 ) {
            n = "https://copilot.aws.conde.io/wrd/bundles/" + c;
                } else (n = "https://copilot.aws.conde.io/wrd/articles/" + o,)
                window.open(n);
}
})

function () {
    var pathArray = window.location.pathname.split("/");
    var secondLevelLocation = pathArray[4] || '';
    var o = secondLevelLocation;
    console.log ( o );
    var n = "https://copilot.aws.conde.io/wrd/articles/";
    var c = document.querySelector("meta[name='id']").getAttribute("content");
    if ((secondLevelLocation.length === 24 )) {
    n = "https://copilot.aws.conde.io/wrd/articles/" + o;
        } else if (secondLevelLocation.length === 6 ) {
        n = "https://copilot.aws.conde.io/wrd/contributors/" + c;
            } else if (secondLevelLocation.length === 7 ) {
            n = "https://copilot.aws.conde.io/wrd/bundles/" + c;
                } else n = "https://copilot.aws.conde.io/wrd/articles/" + o,
                window.open(n);
}




added extra function
javascript:(function()%7Bvar pathArray %3D window.location.pathname.split("%2F")%3Bvar secondLevelLocation %3D pathArray%5B4%5D %7C%7C ''%3Bvar o %3D secondLevelLocation%3Bvar n %3D "https%3A%2F%2Fcopilot.aws.conde.io%2Fwrd%2Farticles%2F"%3Bvar c %3D document.querySelector("meta%5Bname%3D'id'%5D").getAttribute("content")%3Bif ((secondLevelLocation.length %3D%3D%3D 24 )) %7Bn %3D "https%3A%2F%2Fcopilot.aws.conde.io%2Fwrd%2Farticles%2F" %2B o%3B%7D else if (secondLevelLocation.length %3D%3D%3D 6 ) %7Bn %3D "https%3A%2F%2Fcopilot.aws.conde.io%2Fwrd%2Fcontributors%2F" %2B c%3B%7D else if (secondLevelLocation.length %3D%3D%3D 7 ) %7Bn %3D "https%3A%2F%2Fcopilot.aws.conde.io%2Fwrd%2Fbundles%2F" %2B c%3B%7D else n %3D "https%3A%2F%2Fcopilot.aws.conde.io%2Fwrd%2Farticles%2F" %2B o%2Cwindow.open(n)%3B%7D%7D)()

original
javascript:(function()%7Bvar pathArray %3D window.location.pathname.split("%2F")%3Bvar secondLevelLocation %3D pathArray%5B4%5D %7C%7C ''%3Bvar o %3D secondLevelLocation%3Bif ((secondLevelLocation.length %3D%3D%3D 24 )) %7Bn %3D "https%3A%2F%2Fcopilot.aws.conde.io%2Fwrd%2Farticles%2F" %2B o%2Cwindow.open(n)%3B%7D else %7Bvar o %3D document.querySelector("meta%5Bname%3D'id'%5D").getAttribute("content")%3Bn %3D "https%3A%2F%2Fcopilot.aws.conde.io%2Fwrd%2Farticles%2F" %2B o%2Cwindow.open(n)%3B%7D%7D)()
