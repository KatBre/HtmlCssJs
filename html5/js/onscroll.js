document.onscroll = function() {
    if (document.documentElement.scrollTop > 60) {
        document.querySelector('#navigation').style.padding = "40px 10px";
    } else {
        document.querySelector('#navigation').style.padding = "60px 10px";
    }
}