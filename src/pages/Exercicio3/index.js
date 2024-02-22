import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Exercicio3() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const charactersNames = ['Rick Sanchez', 'Morty Smith', 'Summer Smith', 'Beth Smith', 'Jerry Smith'];
        const charactersData = [];

        for (const characterName of charactersNames) {
          const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}`);
          const characterInfo = response.data.results[0];
          const { name, gender, species, image } = characterInfo;

          const formattedCharacter = {
            nome: name,
            genero: gender === 'Male' ? 'Homem' : 'Mulher',
            avatar: image,
            especie: species
          };

          charactersData.push(formattedCharacter);
        }

        setCharacters(charactersData);
      } catch (error) {
        console.error('Erro ao buscar personagens:', error);
      }
    }

    fetchCharacters();
  }, []);

  return (
    <div className="Exercicio3">
      <h1>Personagens de Rick and Morty</h1>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <img src={character.avatar} alt={character.nome} />
            <p>Nome: {character.nome}</p>
            <p>Gênero: {character.genero}</p>
            <p>Espécie: {character.especie}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Exercicio3;