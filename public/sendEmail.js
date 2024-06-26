function sendEmail() {
    const emailData = {
        to: 'blogdoalysson@gmail.com',
        subject: 'Cotação feita pelo site',
        text: 'Conteúdo do E-mail'
    };

    fetch('https://sun-rio-energia-solar-ltda.cloudfunctions.net/sendEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(emailData)
    })
        .then(response => response.text())
        .then(result => {
            console.log('Sucesso:', result);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}
