let nomes = ['admilson','benevides','clementina'];
let frutas = ['abacaxi','banana','cereja'];
//exportação explicita
//module.exports=nomes;
//module.exports=frutas;

function soma(a,b){
    return a+b;
}

module.exports={
    nomes,
    frutas,
    soma
}