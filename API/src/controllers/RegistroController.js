const ModelRegistro = require('../models/registro');

module.exports =
{
    async List(req, res)
    {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        
        try{
            // Trazendo todos os Registros
            const registros = await ModelRegistro.findAll();
            return  res.json(registros);
        }
        catch(erro){
            return console.error(`Erro na List : ${erro}`);
        }
    },

    async Create(req, res)
    {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        // res.header("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        try{
            const registros = await ModelRegistro.create(
                {
                    Codigo  : req.body.Codigo,
                    Data    : req.body.Data,
                    Pontos  : req.body.Pontos,
                }
            );
            return  res.json(registros);
        }
        catch(erro){
            return console.error(`Erro na Create : ${erro}`);
        }
    },
}