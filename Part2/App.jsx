import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredPpl, setFilteredPpl] = useState(persons);

  const handleFilter = (event) => {
    const lowerFilter = event.target.value.toLowerCase();
    setFilter(lowerFilter);
    setFilteredPpl(
      persons.filter((person) => person.name.toLowerCase().includes(filter))
    );
  };

  const listNumbers = () => {
    if (filter === "") {
      return persons.map((person, index) => (
        <div key={index}>
          {person.name} {person.number}
        </div>
      ));
    } else {
      return filteredPpl.map((person, index) => (
        <div key={index}>
          {person.name} {person.number}
        </div>
      ));
    }
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.findIndex((person) => person.name === newName) != -1) {
      window.alert(`${newName} is already added to phonebook`);
    } else if (newNum === "") {
      window.alert("Please input a phone number");
    } else {
      const newPerson = { name: newName, number: newNum };
      setPersons([...persons, newPerson]);
      setNewName("");
      setNewNum("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNewNum(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <p>
        filter shown with
        <input value={filter} onChange={handleFilter} />
      </p>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNum} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {listNumbers()}
    </div>
  );
};

export default App;
