import { question } from "readline-sync";

type Operator = "+" | "-" | "*" | "/";
function main(): void {
  const firstStr: string = question("Enter first number: ");
  const operator: string = question("Enter operator: ");
  const secondStr: string = question("Enter second number: ");
  const validInput: boolean =
    isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
  if (validInput) {
    const firstNum: number = parseInt(firstStr);
    const secondNum: number = parseInt(secondStr);
    const result: number = calculate(firstNum, operator as Operator, secondNum);
    console.log(result);
  } else {
    console.log("Invalid input");
    main();
  }
}

function calculate(firstNum: number, operator: Operator, secondNum: number) {
  switch (operator) {
    case "+":
      return firstNum + secondNum;
    case "-":
      return firstNum - secondNum;
    case "*":
      return firstNum * secondNum;
    case "/":
      return firstNum / secondNum;
  }
}

function isOperator(op: string): boolean {
  switch (op) {
    case "+":
    case "-":
    case "*":
    case "/":
      return true;
    default:
      return false;
  }
}

function isNumber(str: string): boolean {
  const mayBeNum = parseInt(str);
  const isNum: boolean = !isNaN(mayBeNum);
  return isNum;
}

main();
