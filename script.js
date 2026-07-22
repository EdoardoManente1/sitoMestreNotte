document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll per le ancore del menu
    const navLinks = document.querySelectorAll('nav a, .btn');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    console.log("Mestrenotte Website Ready.");
});

// Events data and rendering
const events = [
    { date: '12 Lug 2026', title: 'Mestre Summer Night', place: 'Club La Corte', status: 'Biglietti disponibili' },
    { date: '23 Ago 2026', title: 'Dolo Reggaeton Party', place: 'ROYAL CARNE', status: 'Evento confermato' },
    { date: '05 Set 2026', title: 'Opening Season', place: 'Beach Club', status: 'Prevendite' }
];

function renderEvents() {
    const list = document.querySelector('.events-list');
    if (!list) return;
    list.innerHTML = '';
    events.forEach(ev => {
        const item = document.createElement('div');
        item.className = 'event-item';
        item.innerHTML = `
            <div class="event-date">${ev.date}</div>
            <div class="event-details">
                <h4>${ev.title}</h4>
                <span>${ev.place}</span>
            </div>
            <div class="event-status">${ev.status}</div>
        `;
        list.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderEvents();
});

// Simple contact form handler (client-side only)
function handleContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('[name="name"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const message = form.querySelector('[name="message"]').value.trim();
        if (!name || !email || !message) {
            alert('Per favore compila tutti i campi.');
            return;
        }
        // Open mail client as fallback
        const subject = encodeURIComponent('Richiesta da sito Mestrenotte — ' + name);
        const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`);
        window.location.href = `mailto:info@mestrenotte.it?subject=${subject}&body=${body}`;
    });
}

document.addEventListener('DOMContentLoaded', handleContactForm);