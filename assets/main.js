/* ********* Menu responsive ********** */
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
});

/* ********** Popup ********** */
const locationButton = document.querySelector('.location span');
const locationPopup = document.getElementById('location-popup');
const closePopup = document.querySelector('.close-popup');
const confirmLocationBtn = document.getElementById('confirm-location');
const locationSelect = document.getElementById('location-select');

// abrir popup al hacer clic en el lugar
locationButton.addEventListener('click', () => {
    locationPopup.style.display = 'flex';
});

// cerar popup con x
closePopup.addEventListener('click', () => {
    locationPopup.style.display = 'none';
});

// confirmar la ubicación seleccionada
confirmLocationBtn.addEventListener('click', () => {
    const selectedLocation = locationSelect.value;
    locationButton.textContent = `📍 ${selectedLocation}`;
    locationPopup.style.display = 'none'; // Cerrar el popup
});

/* ********** CARROUSEL PAQUETES ********** */
$(document).ready(function() {
    const callMePopup = document.getElementById('callMePopup');
    const closeCallPopupBtn = document.querySelector('.close-popup-call');

    // Inicializa el carrusel
    const owlCarousel = $("#carousel-packages").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // Función para asignar el evento click tanto a las tarjetas originales como a las que se duplican
    function assignClickEvents() {
        const openCallPopupBtns = document.querySelectorAll('.openCallPopup');

        openCallPopupBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                callMePopup.style.display = 'flex';
            });
        });
    }

    // Asignar eventos al cargar la página
    assignClickEvents();

    // Asignar eventos a los elementos duplicados cuando estén menos de 4 cards
    owlCarousel.on('changed.owl.carousel', function() {
        assignClickEvents();
    });

    // Cerrar el popup al hacer clic en la x
    closeCallPopupBtn.addEventListener('click', () => {
        callMePopup.style.display = 'none'; 
    });

    // Cerrar el popup al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === callMePopup) {
            callMePopup.style.display = 'none'; 
        }
    });
});

/* ********** CARROUSEL PROMOS ********** */
document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('promo-banners');
    const indicators = carousel.querySelector('.carousel-indicators');
    const items = carousel.querySelectorAll('.carousel-item');
  
    // Limpia los indicadores antes de añadirlos dinámicamente
    indicators.innerHTML = '';
  
    // Genera los dots dinámicamente
    items.forEach((item, index) => {
      const indicator = document.createElement('button');
      indicator.type = 'button';
      indicator.setAttribute('data-bs-target', '#promo-banners');
      indicator.setAttribute('data-bs-slide-to', index);
      indicator.setAttribute('aria-label', `Slide ${index + 1}`);
  
      // El primer indicador debe ser activo
      if (index === 0) {
        indicator.classList.add('active');
        indicator.setAttribute('aria-current', 'true');
      }
  
      indicators.appendChild(indicator);
    });
  
    // Inicializa el carrusel si es necesario
    var carouselInstance = new bootstrap.Carousel(carousel);
  });
  