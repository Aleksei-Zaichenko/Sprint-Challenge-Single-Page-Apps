import React from "react";
import styled from "styled-components";

export default function CharacterCard({character}) {

    const CardWrapper = styled.div`
    border: 3px gainsboro solid;
    width: 50%;
    margin: 2% 0;
    padding 2%;
  `;

    const src = character.image;

  return (
    <CardWrapper key ={character.id}>
      <img src ={src} />
      <h2>{character.name}</h2>
      <h3>{character.status}</h3>
      <h3>Species: {character.species}</h3>
      <h3>Gende: {character.gender}</h3>
    </CardWrapper>
    )
};
