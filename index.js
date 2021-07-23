const button = document.getElementById("btn1");

function loadPage(){
        const url = window.location.href.replace("cover.html","index.html");
        window.location.href = url;
}