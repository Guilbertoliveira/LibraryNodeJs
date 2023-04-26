import chalk from "chalk";
import fs from "fs";
import pegaArquivo from "./index.js";


const caminho = process.argv;  // process é um comando do node, argv (argumento, informado pelo usuario passará no terminal), retorna um array com o caminho de todos os comandos 

processaTexto(caminho);

async function processaTexto(argumentos){

    

    try {
        fs.lstatSync(argumentos[2]) //tentando verificar o caminho, caso caminho não seja encontrado, será gerado um objeto erro
    } catch (erro) {
        if (erro.code === 'ENOENT') {
            console.log(chalk.red('Arquivo ou diretorio não existente'));
            return;
        }
    }

    //metodo do fs (lstatSync(caminhoquedesejaverificar)), isFile retorna ou true ou false
    if (fs.lstatSync(argumentos[2]).isFile()){
        const resultado = await pegaArquivo(argumentos[2]);
        console.log(chalk.yellow('lista de links'), resultado);       
    }
    else if (fs.lstatSync(argumentos[2]).isDirectory){
        const arquivos = await fs.promises.readdir(argumentos[2]); //demonstra arquivos dentro do diretorio
        arquivos.forEach(async arquivo => {
            const verificacao = await pegaArquivo(`${argumentos[2]}/${arquivo}`);
            imprimirTela(`${argumentos[2]}${arquivo}`, verificacao);
        });
    }

}

function imprimirTela(caminho, objeto){

        console.log(chalk.yellow(`Arquivo referente ao: ${caminho}`));
        console.log(objeto);

  
}

