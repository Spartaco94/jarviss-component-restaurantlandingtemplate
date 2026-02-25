document.addEventListener('DOMContentLoaded', () => {
    const config = restaurantConfig;

    // Header
    document.getElementById('headline').textContent = config.header.headline;
    document.getElementById('subtitle').textContent = config.header.subtitle;
    document.querySelector('.landing-header').style.backgroundImage = `url('${config.header.backgroundImage}')`;

    // Presentazione
    document.getElementById('restaurant-description').textContent = config.presentation.description;
    document.getElementById('restaurant-location').textContent = config.presentation.location;

    // Menù
    document.getElementById('menu-title').textContent = config.menu.title;
    const menuOfferContainer = document.getElementById('menu-offer');
    config.menu.offer.forEach(offer => {
        const offerElement = document.createElement('div');
        offerElement.innerHTML = `
            <h4>${offer.name} - ${offer.price}</h4>
            <ul>
                ${offer.courses.map(course => `<li>${course}</li>`).join('')}
            </ul>
        `;
        menuOfferContainer.appendChild(offerElement);
    });

    // Galleria
    const galleryContainer = document.getElementById('gallery-images');
    config.gallery.images.forEach(imageUrl => {
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = "Immagine ristorante";
        galleryContainer.appendChild(img);
    });

    // Prenotazione
    const reservationLink = document.getElementById('reservation-link');
    reservationLink.textContent = config.reservation.cta;
    reservationLink.href = config.reservation.link;

    // Contatti
    document.getElementById('contact-title').textContent = config.contact.title;
    document.getElementById('contact-phone').textContent = config.contact.phone;
    document.getElementById('contact-email').textContent = config.contact.email;
    document.getElementById('maps-link').href = config.contact.mapsLink;

    // Social
    document.getElementById('footer-text').textContent = config.social.text;
    const socialContainer = document.getElementById('social-links');
    config.social.platforms.forEach(platform => {
        const socialLink = document.createElement('a');
        socialLink.href = platform.url;
        socialLink.innerHTML = `<i class="${platform.icon}"></i>`;
        socialContainer.appendChild(socialLink);
    });
});