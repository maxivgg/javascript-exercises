/* Dado un string formado por (), [] y {}, 
escribe un programa que indique si los pares correspondientes son correctos.

Entrada: [()]{}{[()()]()} (CORRECTO)
Entrada: [(]) (INCORRECTO)*/

const check = (string) => {
  const openBrackets = "[";
  const closeBrackets = "]";
  const openParen = "(";
  const closeParent = ")";
  const openKey = "{";
  const closeKey = "}";

  string.split().forEach((element) => {
    console.log(element);
  });
};

console.log("([()]{}{[()()]()}", check("[()]{}{[()()]()}"));
console.log("[(])", check("[(])"));
