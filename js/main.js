// creo due funzioni, una che mi mostra
// il menu 'nascosto' cliccando
// sull'hamburger menu, l'altra
// che me lo fa scomparire quando si
// clicca sulla X

$('.header-right a').click(function() {
 $('.hamburger-menu').show();
});
$('.close').click(function() {
 $('.hamburger-menu').hide();
});
