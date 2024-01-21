window.addEventListener('scroll', () => {
    const navbar = document.querySelector('#nav'); // Select your navbar element
    const scrollPosition = window.scrollY; // Get the current scroll position
  
    if (scrollPosition > 0) {
      navbar.classList.add('scrolled'); // Add a class when scrolled down
    } else {
      navbar.classList.remove('scrolled'); // Remove the class when scrolled to the top
    }
  });
  
  window.onload = () => {
    const crsr = document.querySelector("#cursor");
  
    document.addEventListener("mousemove", function (event) {
      crsr.style.left = event.clientX + "px";
      crsr.style.top = event.clientY + "px";
    });
  };
  
// var h4all = document.querySelectorAll("#nav h4")
// h4all.forEach(function(el){
//   el.addEventListener("mouseenter", function(){
//     crsr.style.scale= 3
//     crsr.style.border = "1px solid #fff"
//     crsr.style.backgroundColor = "transparent"
//   })
// })