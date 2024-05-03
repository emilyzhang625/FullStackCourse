import { useState } from "react";
import numberService from "../services/numbers";

const Form = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNum,
  setNewNum,
  setMessage,
}) => {
  const notify = (message) => {
    setMessage(message);
    setTimeout(() => {
      setMessage(null);
    }, 5000);
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (newNum === "" || newName === "") {
      window.alert("Please fill out all sections");
    } else if (persons.findIndex((person) => person.name === newName) !== -1) {
      window.alert(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );

      const p = persons.find((p) => p.id === newName);
      const changedPerson = { ...p, number: newNum };

      numberService
        .update(changedPerson.id, changedPerson)
        .then((returnedPerson) => {
          setPersons(
            persons.map((p) => (p.id !== newName ? p : returnedPerson))
          );
          setNewName("");
          setNewNum("");
          notify(`Added ${newName}`);
        })
        .catch((error) => {
          notify(
            `Information of ${newName} has already been removed from server`
          );
        });
    } else {
      const newPerson = { name: newName, number: newNum, id: newName };

      numberService.create(newPerson).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNum("");
        notify(`Added ${newName}`);
      });
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
    </div>
  );
};

export default Form;
