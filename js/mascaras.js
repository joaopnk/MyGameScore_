// # Funções de Validação para auxiliar;

// FUNÇÃO QUE FORMATA CAMPOS PERMITINDO SOMENTE NUMEROS (ACEITA SOMENTE NUMEROS NO CAMPO, BLOQUEANDO LETRAS E ETC.)
function somenteNumerosVirgula( obj , e ){
    const tecla = ( window.event ) ? e.keyCode : e.which;
    if ( tecla == 8 || tecla == 0 )
        return true;
    if ( tecla != 44 && tecla < 48 || tecla > 57 )
        return false;
}


