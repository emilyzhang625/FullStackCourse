import React from "react";

const Country = ({ selected }) => {
  if (selected === null || selected.length === 0) return null;

  console.log("something was selected", selected);
  const name = selected.name.common;
  const capital = selected.capital;
  const area = selected.area;
  const languages = selected.languages;
  const flag = selected.flag;

  const flagStyle = {
    fontSize: "150px",
  };

  const listOfLangs = Object.values(languages).map((name) => (
    <li key={name}>{name}</li>
  ));

  return (
    <div>
      <h2>{name}</h2>
      <p>capital {capital}</p>
      <p>area {area}</p>
      <h4>languages: </h4>
      <ul>{listOfLangs}</ul>
      <div style={flagStyle}>{flag}</div>
    </div>
  );
};

export default Country;
