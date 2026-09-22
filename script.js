document.addEventListener("DOMContentLoaded", function () {

    console.log("Página de Miguel Lopez cargada correctamente.");

    // Desplazamiento suave al hacer clic en los enlaces del menú
    const enlaces = document.querySelectorAll('nav a[href^="#"]');

    enlaces.forEach(function (enlace) {

        enlace.addEventListener("click", function (evento) {

            evento.preventDefault();

            const destino = document.querySelector(
                this.getAttribute("href")
            );

            if (destino) {
                destino.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});