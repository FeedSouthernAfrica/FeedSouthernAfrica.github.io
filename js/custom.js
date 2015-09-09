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
    '<li><a href="/program_description">THE PROGRAM</a></li>'+
    '<li><a href="/join">JOIN</a></li>'+
    '<li><a href="/rates">RATES</a></li>'+
    '<li><a href="/contact">CONTACT</a></li>'+
    '</ul>'+
    '</div>'+
    '<!-- /.navbar-collapse -->'+
    '</div>'
;

/* Footer */



document.getElementById("footer").innerHTML = '<div class="container">'+
    '<div class="row">'+
'<div class="col-lg-12 text-center">'+
'<p style="text-align: center"> ' +
    '&copy;  ' + new Date().getFullYear() + ' Feed Southern Africa. All rights reserved.' +
    '</p>'+
'</div>'+
'</div>'+
'</div>';
