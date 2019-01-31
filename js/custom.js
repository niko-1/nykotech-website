// Carousel für Kunden-Logos
$(document).ready(function () {
    $('.kunden-carousel').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});




//Popover-Effekt
$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});



//Chat-Popup-Delay

function chat() {
    window.purechatApi = { l: [], t: [], on: function () { this.l.push(arguments); } }; (function () { var done = false; var script = document.createElement('script'); script.async = true; script.type = 'text/javascript'; script.src = 'https://app.purechat.com/VisitorWidget/WidgetScript'; document.getElementsByTagName('HEAD').item(0).appendChild(script); script.onreadystatechange = script.onload = function (e) { if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) { var w = new PCWidget({ c: '49a9a864-5249-45b8-aee4-f900e92f0035', f: true }); done = true; } }; })();
}
window.setTimeout(chat, 12000)



function rem() {
    const firstDiv = document.querySelector('.purechat-poweredby-container');
    const wdw = document.querySelector('.purechat-widget-content-wrapper');
    wdw.addEventListener('mouseenter', () => {
        firstDiv.remove()
    });
}

window.setTimeout(rem, 13500)
