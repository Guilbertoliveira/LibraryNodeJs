import fs from 'fs';
import chalk from 'chalk';

pegaArquivo('./arquivos/texto.md');

function pegaArquivo(caminhoArquivo){
    const encondig = 'utf-8'
    fs.readFile(caminhoArquivo, encondig, (erro, texto)=>{ //metodo utilizado para trabalhar com leitura no fs
       if (erro){
        trataErro(erro);
       }
        console.log(chalk.green(texto));
    } )
}

function trataErro(erro){
    throw new Error(chalk.red(erro.code, 'não há arquivo no diretorio'));
}


