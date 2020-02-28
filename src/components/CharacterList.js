import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [data, setData] = useState([]);

  const [query, setQuery] = useState("");

    useEffect(() => {
      axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {
          console.log(response.data.results);
          const characters = response.data.results.filter(character =>
            character.name.toLowerCase().includes(query.toLowerCase())
          );
          setData(characters);
        });
    }, [query]);

  return (
    <section className="character-list">
      <SearchForm query={query} setQuery={setQuery} />
      {data.map(character =>(
          <CharacterCard key={character.id}character ={character} />
        )
      )}
    </section>
  );
}
