import React, { useState } from "react";

export default function SearchForm({query, setQuery}) {
 
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="search-form">
     <form>
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="characterName"
          placeholder="search by name"
        />
      </form>
    </section>
  );
}
