(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    // Contact form submission
    $(document).ready(function() {
        const form = $('#contactForm');
        
        if (form.length) {
            form.on('submit', function(event) {
                event.preventDefault();

                const formData = new FormData(this);

                fetch('http://127.0.0.1:3006/send-contact', {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erro ao enviar e-mail.');
                    }
                    return response.text();
                })
                .then(data => {
                    if (typeof swal !== 'undefined') {
                        swal("Sucesso!", data, "success");
                    } else {
                        alert("Sucesso! " + data);
                    }
                })
                .catch(error => {
                    if (typeof swal !== 'undefined') {
                        swal("Erro!", error.message, "error");
                    } else {
                        alert("Erro! " + error.message);
                    }
                });
            });
        }
    });

    // Email redirect functionality
    $(document).ready(function() {
        const submitBtn = $('#submitBtn');
        
        if (submitBtn.length) {
            submitBtn.on('click', function() {
                const email = $('#emailInput').val(); // Captura o valor do e-mail
        
                // Redireciona para a página de login com o e-mail como parâmetro de URL
                window.location.href = `http://127.0.0.1:5501/login.html?email=${encodeURIComponent(email)}`;
            });
        }
    });
    
})(jQuery);

// Load SweetAlert only if not already loaded
if (typeof swal === 'undefined') {
    var sweetAlertScript = document.createElement('script');
    sweetAlertScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js';
    document.head.appendChild(sweetAlertScript);
}