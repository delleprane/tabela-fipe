function checkIfTheFirstLetterIsUppercase(word) {
  if (!word) {
    return false;
  }

  const firstLetter = word.charAt(0);

  return /^[A-Z]/.test(firstLetter);
}

// Exemplos de uso
console.log(checkIfTheFirstLetterIsUppercase("Brasil"));     
console.log(checkIfTheFirstLetterIsUppercase("mobiauto"));  
console.log(checkIfTheFirstLetterIsUppercase("xXx xXx"));    
console.log(checkIfTheFirstLetterIsUppercase("xDD"));        
console.log(checkIfTheFirstLetterIsUppercase("Deu Certo!")); 