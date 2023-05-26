let valor = []

$(document).ready(function(){
    $('button').click(function(){
        let valor = $(this).val();
        $('textarea').val(valor)
    });
});
