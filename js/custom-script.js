// ########### slick slider js  ##################
$(document).ready(function () {
    $('.slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }
        ]
    });


    $('.customers-reviwe-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }
        ]
    });









});



// ########## toggle Dropdown Menu Scrip ##########
function toggleMenu() {
    const menu = document.getElementById('menu');
    const isExpanded = document.getElementById('menu-button').getAttribute('aria-expanded') === 'true';


    if (isExpanded) {
        menu.classList.add('hidden');
        document.getElementById('menu-button').setAttribute('aria-expanded', 'false');
    } else {
        menu.classList.remove('hidden');
        document.getElementById('menu-button').setAttribute('aria-expanded', 'true');
    }
}



//############ Navigatio  Dialog Box Script ###################
const navDialog = document.getElementById("nav-dialog");
function handleMenu() {
    navDialog.classList.toggle('hidden');
}