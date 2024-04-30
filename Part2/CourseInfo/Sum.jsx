const Sum = ({ parts }) => {
  const total = parts.map((part) => part.exercises);
  const sum = total.reduce((runningTot, curr) => runningTot + curr, 0);

  return <b>total of {sum} exercises</b>;
};

export default Sum;
