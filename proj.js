// $(window).scroll(function(){
//     let x = $(window).scrollTop()
//     if(x>350)
//     {
//         $('.navbar').css('background-color','black') 
//     }
//     else
//     {
//         $('.navbar').css('background-color','red') 
//     }
//   })
// var fixnav = document.getElementsByClassName('fixnav')
// $(window).scroll(function(){
//     let x = $(window).scrollTop()
// console.log(x)
// if(x>187.1999969482422)
// {
//     // $('.fixnav').css('position',' fixed')
//     // $('.fixnav').css('top',' 0')
//     // $('.fixnav').css('width','100%')
//     fixnav.classList.add('sticky')
// }
// else{
//     $('.fixnav').css('position',' relative')
// }
// })
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



