import { useState } from "react";
import numberService from "../services/numbers";

const List = ({ filter, persons, filteredPpl, setPersons }) => {
  const handleClick = (id) => {
    window.confirm(`Delete ${id} ?`);
    numberService.remove(id).then((returnedId) => {
      setPersons(persons.filter((p) => p.id !== id));
    });
  };

  const listNumbers = () => {
    if (filter === "") {
      return persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
          <button onClick={() => handleClick(person.id)}>delete</button>
        </div>
      ));
    } else {
      return filteredPpl.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}{" "}
          <button onClick={() => handleClick(person.id)}>delete</button>
        </div>
      ));
    }
  };

  return (
    <div>
      <h2>Numbers</h2>
      {listNumbers()}
    </div>
  );
};

export default List;
