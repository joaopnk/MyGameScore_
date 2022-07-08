const optionsDate = {
    timeZone: 'America/Sao_Paulo', // Lista de Timezones no fim do artigo
    hour12: true, // Alterna entre a mostragem dos horários em 24 horas, ou então AM/PM
}
const url = "http://localhost:4200";

// # Função personalizada que utilizo para escrever menos quando se tratar de document.getElementById('');
function docByID(id){return document.getElementById(id);}


// https://www.youtube.com/watch?v=IDG6EOXYAq8&ab_channel=POOLnetwork

function getTodosRegistros(){

    // # Montando estrutura Da Pagina
    const TodosRegistros = ( (data) => {

        // # Primeira validação para verificar se existe registro para ser buscado;
        if(data.length > 0){
            const jogosDisputados       = data.length;
            let primeiroRegistro        = null;
            let ultimoRegistro          = null;
            let totalPontosTemporada    = 0;
            // # Criando em array para depois utilizar de funções nativas do JS
            let totalPontuacoes    = [];
    
            let qntdVezesProprioRecord  = 0;
            let menorPontuacao          = 0;
            
            for(let i = 0; i < data.length; i++){
                totalPontosTemporada += data[i].Pontos;
                totalPontuacoes.push(data[i].Pontos);
                // # Primeiro caso, ambos possuem o mesmo valor
                if(i == 0){
                    primeiroRegistro = new  Date(data[i].Data);
                    ultimoRegistro   = new  Date(data[i].Data);
                }
    
                // # Validações [ SE A DATA QUE ESTA PERCORRENDO É MENOR QUE A]
                if(new Date(data[i].Data) < primeiroRegistro){
                    primeiroRegistro = new Date(data[i].Data);
                }
                else if(new Date(data[i].Data) > ultimoRegistro){
                    ultimoRegistro   = new  Date(data[i].Data);
                }
            }
            const mediaPontosPorJogo      = totalPontosTemporada / data.length;
            
            for(let i =0; i < totalPontuacoes.length; i++){
                // # Extraindo a menor pontução
                i==0 ? menorPontuacao = Math.min.apply(Math, totalPontuacoes) : '';
    
                if(totalPontuacoes[i] > menorPontuacao){
                  qntdVezesProprioRecord++;
                  menorPontuacao = totalPontuacoes[i];
                }
               
            }
    
            // # Atualizando o conteudo da pagina - Intervalo de tempo das datas
            docByID('dtRegistros').innerHTML = `${primeiroRegistro.toLocaleDateString('pt-br', optionsDate)} até ${ultimoRegistro.toLocaleDateString('pt-br', optionsDate)}`;
            // # Montando corpo dinamico da aplicação
            $('#registroList').append(` 
                <hr>
                <div class="d-flex justify-content-between">
                    <h5 class="fontColor-secondary font-weight-bold">Jogos disputados:</h5>
                    <h5 class="fontColor-secondary text-center">${jogosDisputados}</h5>
                </div>
                <hr>
                <div class="d-flex justify-content-between">
                    <h5 class="fontColor-secondary font-weight-bold">Total de pontos marcados na temporada:</h5>
                    <h5 class="fontColor-secondary text-center">${totalPontosTemporada}</h5>
                </div>
                <hr>
                <div class="d-flex justify-content-between">
                    <h5 class="fontColor-secondary font-weight-bold">Média de pontos por jogo:</h5>
                    <h5 class="fontColor-secondary text-center">${Math.round(mediaPontosPorJogo.toFixed(2))}</h5>
                </div>
                <hr>
                <div class="d-flex justify-content-between">
                    <h5 class="fontColor-secondary font-weight-bold">Maior pontuação em um jogo:</h5>
                    <h5 class="fontColor-secondary text-center">${Math.max.apply(Math, totalPontuacoes)}</h5>
                </div>
                <hr>
                <div class="d-flex justify-content-between">
                    <h5 class="fontColor-secondary font-weight-bold">Menor pontuação em um jogo:</h5>
                    <h5 class="fontColor-secondary text-center">${Math.min.apply(Math, totalPontuacoes)}</h5>
                </div>
                <hr>
                <div class="d-flex justify-content-between">
                    <h5 class="fontColor-secondary font-weight-bold">Quantidade de vezes que bateu o próprio recorde:</h5>
                    <h5 class="fontColor-secondary text-center">${qntdVezesProprioRecord}</h5>
                </div>
            `)
        }
        else{
            $('#registroList').append(` 
                <hr>
                <div class="container">
                    <div class="d-flex justify-content-center fontColor-secondary">
                        <h3>Você não registrou nenhum jogo ainda :(</h3>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a class="nav-link fontColor-primary font-weight-bold" href="./home.html" target="_self">Clique aqui para registrar um novo jogo!</a>
                    </div>
                </div>

            `)
        }
    })

    // # Recuperando todos os registros
    axios.get(`${url}/List`)
    .then(res => TodosRegistros(res.data));
    
}

// # Cadastrando novo registro
function postNewRegistro(){
    if((docByID('dataJogo').value == '') || docByID('pontosJogo').value == ''){
        Swal.fire({
            title: 'Atenção',
            text: 'Preencha todos os campos para salvar',
            icon: 'warning',
            confirmButtonText: 'OK'
        })
        return;
    }

    const NovoRegistro = {
        "Data"  : docByID('dataJogo').value,
        "Pontos": docByID('pontosJogo').value
    }

 
    // # Fazendo o post
    try{
        axios.post(`${url}/Create`,NovoRegistro)
        .then(res => Swal.fire({
            icon: 'success',
            title: 'Pontos registrados com sucesso!',
            showConfirmButton: false,
            timer: 2500
        }))
        .catch(err => 
            Swal.fire({
                title: 'Atenção',
                text: 'Não foi possivel salvar o registro no momento, por favor, tente mais tarde',
                icon: 'error',
                confirmButtonText: 'OK'
            }),
        );
    }
    catch(error){
        console.error(`Houve um erro ao tentar salvar um novo registro.\nErro: ${error}`);
    }
    finally{
        // # Limpando campos
        docByID('dataJogo').value   = '';
        docByID('pontosJogo').value = '';
    }
    
}
