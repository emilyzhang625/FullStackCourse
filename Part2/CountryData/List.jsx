const List = ({ match, handleClick }) => {
  if (match.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }
  if (match.length > 1) {
    return match.map((m) => (
      <div key={m.cca2}>
        {m.name.common} <button onClick={() => handleClick(m)}>show</button>
      </div>
    ));
  }

  if (match.length === 1) handleClick(match[0]);

  return null;
};

export default List;
