
const form = document.getElementById('form_dep');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let nome = document.getElementById('nome');
    let cadeado = document.getElementById('cadeado');
    let usuario = document.getElementById('usuario');
    let senha = document.getElementById('senha');

    if(nome.value != "Joao"){

        // usuario.style.display = 'block';
        document.querySelector('.usuario').style.display = 'block';

        console.log(cadeado.value);

    }else if(cadeado.value  != "123"){

        console.log('Aqui IF');
        document.querySelector('.cadeado').style.display = 'block';
        // senha.style.display = 'block';
    }
})