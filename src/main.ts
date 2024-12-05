import Scanner from "@codeea/scanner";

const scanner = new Scanner();

async function main() {
  const menu =`
  0 - SAIR
  1 - SOMA
  2 - SUBTRACAO
  3 - DIVISAO
  4 - MULTIPLICACAO
  5 - POTENCIACAO
  6 - CHECA SE NUMERO É PAR
  `;
  let operacao = 0;

  do {
    console.log(menu);
    operacao = parseInt(await scanner.question("Informe a operação: "));
    switch (operacao) {
      case 0:
        break
      case 1:
        const resultado = await calcular("+");
        console.log(`A soma de ${a} + ${b} é igual a: ${resultado}`);
        break;
      case 2:
        await calcular("-");
        break;
      default;
      break;
    }
  } while (operacao !== 0)
    scanner.close();
}

async function somar(){
  console.log("SOMANDO");
  const a = await scanner.questionFloat("Informe o primeiro número: ");
  const b = await scanner.questionFloat("Informe o segundo número: ");
  const resultado = a + b;
  console.log(`A soma de ${a} + ${b} é igual a: ${resultado}`);
}

async function calcular(operador:string){
  const a = await scanner.questionFloat("Informe o primeiro número: ");
  const b = await scanner.questionFloat("Informe o segundo número: ");
  switch (operador) {
    case "+":
          return a + b;
    case "-":
          return a - b;
    case "/":
          return a / b;
    case "*":
          return a * b;
    default: 0;
        break
  }
}

(async () => {
  await main();
  scanner.close();
})
