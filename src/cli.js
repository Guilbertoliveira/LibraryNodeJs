import pegaArquivo from "./index.js";



const caminho = process.argv;  // process é um comando do node, argv (argumento, informação passada por linha de comando)
pegaArquivo(caminho[2]); // retorna um array, informações referente aos 2 comandos