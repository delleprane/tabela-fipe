import React, { useState, useEffect } from "react"
function Exercicio2() {
  const [originalRegister, setoriginalRegister] = useState({
    name: "Marcos",
    country: "Brasil",
    age: 22,
  })

  const labels = {
    name: "Nome",
    country: "País",
    age: "Idade",
  }

  const [register, setregister] = useState({})

  const [showEditForm, setshowEditForm] = useState(false)

  useEffect(() => {
    setregister(originalRegister)
  }, [originalRegister])

  const updateData = () => {
    const updatedObject = {}

    for (const key in originalRegister) {
      if (register.hasOwnProperty(key)) {
        updatedObject[key] = register[key]
      } else {
        updatedObject[key] = originalRegister[key]
      }
    }

    setoriginalRegister(updatedObject)
    setshowEditForm(false)
    renderObjectProperties()
  }

  const renderObjectProperties = () => {
    const properties = []

    for (const key in originalRegister) {
      if (originalRegister.hasOwnProperty(key)) {
        properties.push(
          <p key={key}>
            <strong>{labels[key]}:</strong> {originalRegister[key]}
          </p>
        )
      }
    }

    return properties
  }

  const enableEditRegister = () => {
    setshowEditForm(true)
  }

  const changeName = (event) => {
    setregister({ ...register, name: event.target.value })
  }
  const changeCountry = (event) => {
    setregister({ ...register, country: event.target.value })
  }
  const changeAge = (event) => {
    setregister({ ...register, age: event.target.value })
  }

  return (
    <div className="Exercicio4">
      <h1>Informacoes cadastradas:</h1>

      <ul>{renderObjectProperties()}</ul>

      <button onClick={enableEditRegister}>Editar</button>

      {showEditForm ? (
        <div className="formEditRefister">
          <label htmlFor="name">Nome:</label>
          <input
            value={register.name}
            onChange={changeName}
            type="text"
            id="name"
            name="name"
          />
          <label htmlFor="country">Pais:</label>
          <input
            value={register.country}
            onChange={changeCountry}
            type="text"
            id="country"
            name="country"
          />
          <label htmlFor="age">Idade:</label>
          <input
            value={register.age}
            onChange={changeAge}
            type="number"
            id="age"
            name="age"
          />
          <button onClick={updateData}>Salvar</button>
        </div>
      ) : null}
    </div>
  )
}

export default Exercicio2
