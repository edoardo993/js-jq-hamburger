// creo due funzioni, una che mi mostra
// il menu 'nascosto' cliccando
// sull'hamburger menu, l'altra
// che me lo fa scomparire quando si
// clicca sulla X

$('.fa-bars').click(function() {
 $('.hamburger-menu').show();
});
$('.close').click(function() {
 $('.hamburger-menu').hide();
});

// creo due funzioni, una che mi mostra
// il menu 'nascosto' cliccando
// sull'hamburger menu facendolo apparire
// con un fadeIn di 1 sec, l'altra
// che me lo fa scomparire quando si
// clicca sulla X con un fadeOut di 1 sec

// $('.fa-bars').click(function() {
//  $('.hamburger-menu').fadeIn(1000);
// });
// $('.close').click(function() {
//  $('.hamburger-menu').fadeOut(1000);
// });

// creo due funzioni, una che mi mostra
// il menu 'nascosto' passando col mouse
// sull'hamburger menu, l'altra
// che me lo fa scomparire quando si
// clicca sulla X
// $('.fa-bars').mouseenter(function() {
//  $('.hamburger-menu').show();
// });
// $('.close').click(function() {
//  $('.hamburger-menu').hide();
// });
