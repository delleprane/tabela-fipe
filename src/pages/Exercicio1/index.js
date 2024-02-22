import React, { useState } from "react"
function Exercico1() {
  const [maskCreditCardNumber, setmaskCreditCardNumber] = useState(0)
  const [creditCardNumber, setcreditCardNumber] = useState([])

  const handleChange = (event) => {
    setcreditCardNumber(event.target.value)
  }

  const handleButtonClick = () => {
    setmaskCreditCardNumber(maskify(creditCardNumber))
  }

  const clearResult = () => {
    setmaskCreditCardNumber(0)
    setcreditCardNumber("")
  }

  const maskify = (creditCardNumber) => {
    if (creditCardNumber.length <= 4) {
      return creditCardNumber
    }

    const lastFourCharacters = creditCardNumber.slice(-4)

    const maskedCharacters = "#".repeat(creditCardNumber.length - 4)

    return maskedCharacters + lastFourCharacters
  }

  return (
    <div className="Exercicio1">
      <h1>Exercicio-1</h1>
      <input type="text" value={creditCardNumber} onChange={handleChange} />
      <button onClick={handleButtonClick}>Adicionar Mascara</button>
      <button onClick={clearResult}>Limpar</button>
      {maskCreditCardNumber !== 0 ? (
        <p>O resultado é: {maskCreditCardNumber}</p>
      ) : null}
    </div>
  )
}

export default Exercico1
