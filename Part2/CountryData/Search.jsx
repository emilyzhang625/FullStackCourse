import { useState } from "react";

const Search = ({ countries, setMatch }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
    setMatch(
      countries.filter((c) =>
        c.name.common.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <p>
      find countries <input value={value} onChange={handleChange} />
    </p>
  );
};

export default Search;
