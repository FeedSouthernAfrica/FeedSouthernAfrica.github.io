/* Facebook like page*/

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.4&appId=1534300023482847";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/* Google analytics */

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-67287154-1', 'auto');
ga('send', 'pageview');


/* Navigation bar */

document.getElementById("nav").innerHTML =
    '<div class="container">'+
    '<!-- Brand and toggle get grouped for better mobile display -->'+
    '<div class="navbar-header">'+
    '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">'+
    '<span class="sr-only">Toggle navigation</span>'+
    '<span class="icon-bar"></span>'+
    '<span class="icon-bar"></span>'+
    '<span class="icon-bar"></span>'+
    '</button>'+
    '<!-- navbar-brand is hidden on larger screens, but visible when the menu is collapsed -->'+
    '<a class="navbar-brand" href="index.html">Feed Southern Africa</a>'+
    '</div>'+
    '<!-- Collect the nav links, forms, and other content for toggling -->'+
    '<div class="collapse navbar-collapse" >'+
    '<ul class="nav navbar-nav navbar-right">'+
    '<li><a href="/">HOME</a></li>'+
    '<li><a href="/about">ABOUT</a></li>'+
    '<li><a href="/program_description">PROGRAMS</a></li>'+
    '<li><a href="/join">JOIN</a></li>'+
    '<li><a href="/rates">RATES</a></li>'+
    '<li><a href="/contact">CONTACT</a></li>'+
    '<li class="dropdown">'+
    '<a href="/gallery" data-toggle="dropdown" class="dropdown-toggle">Gallery <b class="caret"></b></a>'+
    '<ul class="dropdown-menu" id="gallery">'+
    '<li><a href="/gallery" id="program-1" onclick="IFrameScroll(\'/gallery/program-1\')" >Program-1</a></li>'+
    '<li><a href="javascript:void(0)" onclick="IFrameScroll(\'/gallery/program-2\')" target="galleryIframe">Program-2</a></li>'+
    '</ul>'+
    '</li>'+
    '</ul>'+
    '</div>'+
    '</div>'
;

/* Footer */

document.getElementById("footer").innerHTML = '<div class="container">'+
    '<div class="row">'+
    '<div class="col-lg-6 text-center" style="padding-top:1% ">'+
    '<div  class="fb-page" data-href="https://www.facebook.com/pages/Feed-Southern-Africa/1095310450480809?fref=ts" data-width="180" data-height="70" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true" data-show-posts="false">' +
    '<div class="fb-xfbml-parse-ignore">' +
    '<blockquote cite="https://www.facebook.com/pages/Feed-Southern-Africa/1095310450480809?fref=ts">' +
    '<a href="https://www.facebook.com/pages/Feed-Southern-Africa/1095310450480809?fref=ts">Feed Southern Africa' +
    '</a>' +
    '</blockquote>' +
    '</div>' +
    '</div>' +
    '</div>'+
    '<div class="col-lg-6 text-center">'+
    '<p style="text-align: center"> ' +
    '&copy;  ' + new Date().getFullYear() + ' Feed Southern Africa. All rights reserved.' +
    '</p>'+
    '</div>'+
    '</div>'+
    '</div>';

/* iframe loading function*/
function IFrameScroll(link){
    window.galleryIframe.location=link;
    window.location.hash='galleryIframe';
}


function ff(id, link){
$(window).load(function() {
    $(id).click(function() {
        $('galleryIframe').load(function() {
            IFrameScroll(id, link);
        });
    });
});}
/*
<iframe name="iframe_a" id="iframe_a"></iframe>
    <a href="http://www.example.com/" target="iframe_a" id="iframe_trigger">Go!</a>
    */