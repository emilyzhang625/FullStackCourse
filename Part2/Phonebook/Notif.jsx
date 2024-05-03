const Notif = ({ message }) => {
  if (message === null) return null;

  const addedStyle = {
    color: "green",
    fontSize: 20,
    backgroundColor: "#cccccc",
    border: "2px solid green",
    borderRadius: 5,
    padding: 5,
  };

  const removedStyle = {
    color: "red",
    fontSize: 20,
    backgroundColor: "#cccccc",
    border: "2px solid red",
    borderRadius: 5,
    padding: 5,
  };

  if (message.includes("Added")) {
    return <div style={addedStyle}>{message}</div>;
  }
  return <div style={removedStyle}>{message}</div>;
};

export default Notif;
