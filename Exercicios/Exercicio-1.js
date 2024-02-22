// Geralmente, quando você compra algo, é perguntado se o número do seu cartão de crédito, telefone ou
// resposta para sua pergunta secreta ainda está correto. No entanto, como alguém pode olhar por cima
// do seu ombro, você não quer que isso apareça em sua tela. Em vez disso, nós o mascaramos. Sua
// tarefa é escrever uma função maskify, que altera todos, exceto os últimos quatro caracteres, para "#".

function maskify(string) {
    if (string.length <= 4) {
      return string; 
    }
  

    const lastFourCharacters = string.slice(-4);
  

    const maskedCharacters = '#'.repeat(string.length - 4);
  

    return maskedCharacters + lastFourCharacters;
  }
  
  // Exemplos de uso
  console.log(maskify('4556364607935616')); 
  console.log(maskify('64607935616')); 
  console.log(maskify('1')); 
  console.log(maskify('')); 
  console.log(maskify('Skippy'));
  console.log(maskify('Nanananananananananana Batman!'));
  