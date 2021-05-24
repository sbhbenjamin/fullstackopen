import React, { useState } from "react";

const Button = ({ text, handler }) => <button onClick={handler}>{text}</button>;

const Anecdote = ({ anecdotes, index, votes }) => {
  return (
    <div>
      <p>{anecdotes[index]}</p>
      <p>has {votes[index]} votes</p>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    new Array(anecdotes.length + 1).join("0").split("").map(parseFloat)
  );

  function getRandomAnecdote() {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  function setVoteHandler(index) {
    const copy = [...votes];
    copy[index] += 1;
    setVotes(copy);
  }

  function getTopAnecdoteIndex() {
    const largest = Math.max.apply(0, votes);
    return votes.indexOf(largest);
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote anecdotes={anecdotes} index={selected} votes={votes} />
      <Button handler={getRandomAnecdote} text="next anecdote" />
      <Button handler={() => setVoteHandler(selected)} text="vote" />

      <h2>Anecdote with most votes</h2>
      <Anecdote
        anecdotes={anecdotes}
        index={getTopAnecdoteIndex()}
        votes={votes}
      />
    </div>
  );
};

export default App;
