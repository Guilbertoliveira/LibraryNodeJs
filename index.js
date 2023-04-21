import fs from 'fs';
import chalk from 'chalk';

pegaArquivo('./arquivos/texto.md');


async function pegaArquivo (caminhoArquivo){
    try{
        const encondig = 'utf-8';
        const resposta = await fs.promises.readFile(caminhoArquivo, encondig);
        console.log(resposta);}

    catch(erro) { 
         trataErro(erro);
    }

}

// function pegaArquivo(caminhoArquivo){  //versão assincrono com then
//     const encondig = 'utf-8';
//     fs.promises
//      .readFile(caminhoArquivo, encondig)
//      .then((texto)=> console.log(chalk.green(texto))) 
//      .catch((erro)=>trataErro(erro))
// }


function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretorio'));
}




