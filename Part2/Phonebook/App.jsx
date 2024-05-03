import { useState, useEffect } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import List from "./components/List";
import axios from "axios";
import numberService from "./services/numbers";
import Notif from "./components/Notif";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [filter, setFilter] = useState("");
  const [filteredPpl, setFilteredPpl] = useState(persons);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    numberService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notif message={message} />
      <Filter
        filter={filter}
        setFilter={setFilter}
        persons={persons}
        setFilteredPpl={setFilteredPpl}
      />
      <Form
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNum={newNum}
        setNewNum={setNewNum}
        setMessage={setMessage}
      />
      <List
        filter={filter}
        persons={persons}
        filteredPpl={filteredPpl}
        setPersons={setPersons}
      />
    </div>
  );
};

export default App;
