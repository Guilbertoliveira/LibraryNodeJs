import fs from 'fs';
import chalk from 'chalk';
const textoteste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.).'

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

extraiLinks(textoteste);

function extraiLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm; //para colocar o regex inserir dentro de /regex/
    const capturas = regex.exec(texto);
    console.log(capturas);

}
//\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)



