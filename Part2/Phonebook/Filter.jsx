import { useState } from "react";

const Filter = ({ filter, setFilter, persons, setFilteredPpl }) => {
  const handleFilter = (event) => {
    setFilter(event.target.value);
    setFilteredPpl(
      persons.filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  return (
    <p>
      filter shown with
      <input value={filter} onChange={handleFilter} />
    </p>
  );
};

export default Filter;
