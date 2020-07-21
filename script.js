/* SLIDER */

 let imagesIndex = 0;
 let images = document.getElementsByClassName("slide-page");

 let slider = () => {
    for (let i = 0; i < images.length; ++i) {
        images[i].style.display = "none";
    }

    if (imagesIndex === images.length) {
        imagesIndex = 0;
    }

    images[imagesIndex].style.display = "block";
    imagesIndex++;

    setTimeout(slider, 5000);
 }

 slider();


 /* SCROLL TOP */

let scrollTopIcon = document.querySelector(".scroll-top-icon");

window.onscroll = () => {

    document.documentElement.scrollTop > 100
        ? scrollTopIcon.style.opacity = 1
        : scrollTopIcon.style.opacity = 0;
}

scrollTopIcon.onclick = () => {

    document.documentElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* NAVIGATION */

$("nav a").click(function(event) {
    event.preventDefault();
    
    let id = $(this).attr("href");
    let target = $(id).offset().top;

    $("html").animate({
        scrollTop: target,
    }, 500);
});