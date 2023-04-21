import fs from 'fs';
import chalk from 'chalk';


function pegaArquivo(caminhoArquivo){
    const encondig = 'utf-8'
    fs.readFile(caminhoArquivo, encondig, (_, texto)=>{ //metodo utilizado para trabalhar com leitura no fs
        console.log(chalk.green(texto));
    } )
}

pegaArquivo('./arquivos/texto.md');