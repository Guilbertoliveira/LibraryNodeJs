import fs from 'fs';
import chalk from 'chalk';



async function pegaArquivo (caminhoArquivo){
    try{
        const encondig = 'utf-8';
        const resposta = await fs.promises.readFile(caminhoArquivo, encondig);
        return extraiLinks(resposta);

        }

    catch(erro) { 
         trataErro(erro);
    }

}

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretorio'));
}


function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm; //para colocar o regex inserir dentro de /regex/
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map((e)=>({[e[1]]: e[2]})) //criando um objeto, que recebe um array como chave e outro array como resultado da chave
    return resultados.length !== 0 ? resultados : 'não há links';
    


}

export default pegaArquivo;




