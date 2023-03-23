// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  
  return num1 + num2
  
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

 //EXERCÍCIO 01
function calculaAreaRetangulo() {
const altura =prompt( "qual a altura ?")
const largura =prompt( "qual a largura ?")
console.log(altura * largura);
}


// EXERCÍCIO 02
function imprimeIdade() {
const anoAtua = prompt("qual seu ano atual?")
const anoDeNacimento = prompt("qual seu ano de Nacimento?")
  
console.log(anoAtua - anoDeNacimento);
}


// EXERCÍCIO 03
function calculaIMC(peso,altura) {

 const imsUsuario = peso / ( altura * altura);
 
return imsUsuario.toFixed(1)
}


// EXERCÍCIO 04

function imprimeInformacoesUsuario() {
 const nome = prompt( "qual e seu nome ?")
 const idade = prompt( "qual e sua idade ?")
 const email = prompt( "qual e seu e-mail ?")
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Email:", email);

console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);


}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cores1 = prompt(" Qual suas cor favorita ?")
  const cores2 = prompt(" Qual suas cor favorita ?")
  const cores3 = prompt(" Qual suas cor favorita ?")

const coresEsco = [ cores1, cores2, cores3]
console.log(coresEsco);

}


// EXERCÍCIO 06
function retornaStringEmMaiuscula( minuscula) {

return minuscula.toLocaleUpperCase()

}


// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
 
return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  
return string1 > string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  
  return array [0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  

return  array.pop()
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array){
  const primeiro = array[0]
const ultimo = array[array.length -1]
 
array [0] = ultimo
array [array.length -1] =primeiro
return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const letra = string1.toLowerCase()
  const letra2 = string2.toLowerCase()


   return letra  == letra2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = prompt(" Qual e seu ano atual ?")
  const anoDeNacimento = prompt(" Qual e seu ano de Nacimento ?")
  const anoDeEmisao = prompt(" Qual e o ano da emisao da sua CNH ?")

const idade = anoAtual - anoDeNacimento 
const dataEmisao = anoAtual - anoDeEmisao 

const renovarAte20 =( idade <= 20) &&(dataEmisao >= 5);
const renovarAte50 =( idade > 20) &&( idade <= 50) && (dataEmisao >= 10);
const renovarAcimaDe50 =( idade > 50) &&(dataEmisao >= 15);



  console.log(renovarAte20 || renovarAte50 || renovarAcimaDe50);
 }

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
 
const multiploPor4 = ano % 4 === 0
const multiploPor100 =ano % 100 ===0
const multiploPor400 =ano % 400 ===0

return  (multiploPor400 || (multiploPor4 && !multiploPor100))



}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(){

  const idade = prompt(" Você tem mais de 18 anos ?"); 
  const ensino = prompt(" Você possui ensino médio completo ?"); 
  const disponibilidade = prompt(" Você possui disponibilidade exclusiva durante os horários do curso ?");
 const resposta = (idade === "sim" && ensino === "sim" && disponibilidade === "sim");

console.log(resposta);
}
