import { useState } from "react";

const Statistics = ({ good, neutral, bad, sum }) => {
  if (sum == 0) {
    return <p>No feedback given</p>;
  }
  return (
    <>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={sum} />
      <StatisticLine text="average" value={(good - bad) / sum} />
      <StatisticLine text="positive" value={(good / sum) * 100} />
    </>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  if (text == "positive") {
    return (
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{value} %</td>
          </tr>
        </tbody>
      </table>
    );
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>{text}</td>
          <td>{value}</td>
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => setGood(good + 1);
  const addNeutral = () => setNeutral(neutral + 1);
  const addBad = () => setBad(bad + 1);

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={addGood} text="good" />
      <Button onClick={addNeutral} text="neutral" />
      <Button onClick={addBad} text="bad" />
      <h1>statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        sum={good + neutral + bad}
      />
    </>
  );
};

export default App;
