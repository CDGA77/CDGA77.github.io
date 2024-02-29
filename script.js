$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky"); // Agrega la clase "sticky" a la barra de navegación cuando se hace scroll
        } else {
            $('.navbar').removeClass("sticky"); // Quita la clase "sticky" de la barra de navegación cuando se hace scroll
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show"); // Muestra el botón de scroll hacia arriba cuando se hace suficiente scroll
        } else {
            $('.scroll-up-btn').removeClass("show"); // Oculta el botón de scroll hacia arriba cuando se hace poco scroll
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 }); // Realiza una animación de desplazamiento hacia arriba cuando se hace clic en el botón de scroll
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto"); // Quita el comportamiento de desplazamiento suave después de hacer clic en el botón de scroll
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth"); // Aplica nuevamente el desplazamiento suave al hacer clic en los elementos del menú de navegación
    });

    // toggle menu/navbar script
   

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Full-Stack developer", "App Developer"], // Texto que se muestra en la animación de escritura
        typeSpeed: 100, // Velocidad de escritura
        backSpeed: 60, // Velocidad de retroceso
        loop: true // Repetir la animación en bucle
    });

    var typed = new Typed(".typing-3", {
        strings: ["Connect with me on :)"], // Texto que se muestra en la animación de escritura
        typeSpeed: 100, // Velocidad de escritura
        backSpeed: 60, // Velocidad de retroceso
        loop: false // No repetir la animación en bucle
    });

    var typed = new Typed(".typing-2", {
        strings: ["Full-Stack developer", "App Developer"], // Texto que se muestra en la animación de escritura
        typeSpeed: 100, // Velocidad de escritura
        backSpeed: 60, // Velocidad de retroceso
        loop: true // Repetir la animación en bucle
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});


$(document).ready(function () {
    (function () {
        // Agregar un evento de escucha para el envío del formulario
        document.getElementById('form').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevenir la acción predeterminada del envío del formulario

            // Recopilar los datos del formulario y agregarlos a un objeto de datos
            var formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                asunto: document.getElementById('asunto').value,
                message: document.getElementById('message').value
            };

            // Enviar el correo electrónico utilizando EmailJS
            emailjs.send('Portafolio', 'template_omxbgsi', formData, 'BMtxGOggWB5bBnTMO')
                .then(function (response) {
                    //console.log('SUCCESS!');

                    // Aquí iría el código para enviar el correo
                    // Por ahora, mostramos una notificación personalizada de éxito
                    var notificacion = document.getElementById("notificacion");
                    notificacion.style.display = "block";
                    //MOSTRAR MENSAJE POR 5 SEG
                    setTimeout(function () {
                        notificacion.style.display = "none";
                    }, 2000)
                    //RECARGAR LA PAGINA
                    setTimeout(function () {
                        location.reload();
                    }, 5000); // 5000 milisegundos (5 segundos)

                }, function (error) {
                    alert('Su mensaje no pudo ser enviado. Por favor, inténtelo de nuevo más tarde :(.');
                });
        });
    })();
});