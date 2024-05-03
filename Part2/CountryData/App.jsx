import { useState, useEffect } from "react";
import Search from "./components/Search";
import List from "./components/List";
import countryService from "./services/countries";
import Country from "./components/Country";

function App() {
  const [countries, setCountries] = useState(null);
  const [match, setMatch] = useState([]);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    countryService.getAll().then((initialCountries) => {
      setCountries(initialCountries);
    });
  }, [countries]);

  if (!countries) return null;

  const handleClick = (country) => {
    setSelected((selected) => country);
  };

  return (
    <>
      <Search countries={countries} setMatch={setMatch} />
      <List match={match} handleClick={handleClick} />
      <Country selected={selected} />
    </>
  );
}

export default App;
