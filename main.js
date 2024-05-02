const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    alert('Vi kommer til å være i kontakt med deg snart!')
    e.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email ').value;
    const message = document.querySelector('#message').value;

    const webhookURL = 'https://hook.eu2.make.com/2cd5b8jymswfyx8ykxfhh64d9pw3ahu7';

    const payload = {
        content: `Ny lead kom nettop in:\nPakke: ${document.querySelector('#pakke').value}\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then((res) => res.json())
        .then((data) => {
        if (data.success) {
            alert('Melding sendt');
        } else {
            alert('Feil ved sending av melding');
        }
        })
});
