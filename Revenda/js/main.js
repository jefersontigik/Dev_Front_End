$(document).ready(function(){
    $('#carrossel_imagens').slick({
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1000,
    });

    $('.menu_hamburger').click(function(){
        $('nav').slideToggle();
    })

    $('#nome').bind('keyup blur', function(){
        let i = $(this);
        i.val(i.val().replace(/[^a-zA-Z]/g, ''));
    })

    $('#telefone').mask('(00)00000-0000', {
        placeholder: '(12)99345-8901'
    })

    $('#cep').mask('00000-000',{
        placeholder: '91420-589'
    })

    $('form').validate({  
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            veiculo_interesse: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, informe seu nome!',
            telefone: 'Por favor, informe seu telefone!',
            email: 'Por favor, informe seu e-mail!',
            veiculo_interesse: 'Por favor, informe um veículo do seu interesse!'
        }, 
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(e, validador) {
            let camposIncorretos = validador.numberOfInvalids();

            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos!`);
            }
        }
    })

    $('.lista_veiculos button').click(function(){
        const destino = $('#formulario');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo_interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    $('#sendTo').click(function(){
        alert('Formulário enviado');
        $('#veiculo_interesse').val('');
        $('#nome').val('');
        $('#telefone').val('');
        $('#email').val('');
        $('#mensagem').val('');
    })
})