
/* ROLAGEM SUAVE DO MENU */

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
        const destino = document.querySelector(this.getAttribute('href'));

        if (destino) {
            event.preventDefault();
            destino.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


/* ANIMAÇÃO DOS CARDS */

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visivel');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll('.card, .card-estilo').forEach(card => {
    observer.observe(card);
});


/* CALCULADORA DA NÉCESSAIRE */

const formulario = document.querySelector('#formulario-calculadora');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const quantidade = Number(document.querySelector('#quantidade').value);
    const possui = Number(document.querySelector('#possui').value);
    const preco = Number(document.querySelector('#preco').value);

    const resultado = document.querySelector('#resultado');

    if (possui > quantidade) {
        resultado.textContent = 'A quantidade de produtos que você possui não pode ser maior que a quantidade desejada!';
        return;
    }

    if (quantidade <= 0 || preco <= 0) {
        resultado.textContent = 'Digite valores válidos!';
        return;
    }

    const faltam = quantidade - possui;
    const total = faltam * preco;

    resultado.textContent =
        'Faltam ' + faltam + ' produtos. Você precisará investir R$ ' +
        total.toFixed(2).replace('.', ',') + ' para completar sua nécessaire!';
});


/* MENSAGEM DE BOAS-VINDAS */

console.log('💗 Bem-vinda ao Beauty Universe!');
